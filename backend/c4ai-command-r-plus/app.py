import gradio as gr
import cohere
import os
import re
import uuid
import secrets



cohere_api_key = os.getenv("COHERE_API_KEY")
co = cohere.Client(cohere_api_key, client_name="huggingface-rp")


def trigger_example(example):
    chat, updated_history = generate_response(example)
    return chat, updated_history
        
def generate_response(user_message, cid, token, history=None):

    if not token:
        raise gr.Error("Error loading.")
        
    if history is None:
        history = []
    if cid == "" or None:    
        cid = str(uuid.uuid4())

    print(f"cid: {cid} prompt:{user_message}")
    
    history.append(user_message)
    
    stream = co.chat_stream(message=user_message, conversation_id=cid, model='command-r-plus', connectors=[], temperature=0.3)
    
    output = ""
    
    for idx, response in enumerate(stream):
        if response.event_type == "text-generation":
            output += response.text
        if idx == 0:
            history.append(" " + output)
        else:
            history[-1] = output
        chat = [
            (history[i].strip(), history[i + 1].strip())
            for i in range(0, len(history) - 1, 2)
        ] 
        yield chat, history, cid
        
    return chat, history, cid
    

def clear_chat():
    return [], [], str(uuid.uuid4())


examples = [
    "What are 8 good questions to get to know a stranger?",
    "Create a list of 10 unusual excuses people might use to get out of a work meeting",
    "Write a python code to reverse a string",
    "Explain the relativity theory in French",
    "Como sair de um helicóptero que caiu na água?",
    "Formally introduce the transformer architecture with notation.",
    "¿Cómo le explicarías el aprendizaje automático a un extraterrestre?",
    "Summarize recent news about the North American tech job market",
    "Explain gravity to a chicken.",
    "Is the world discrete or analog?",
    "What is the memory cost in a typical implementation of an all-gather operation?",
    "Give me a brief history of the golden era of Cantopop.",
    "Descrivi il processo di creazione di un capolavoro, come se fossi un artista del Rinascimento a Firenze.",
    "Explique-moi le sens de la vie selon un grand auteur littéraire.",
    "Give me an example of an endangered species and let me know what I can do to help preserve it"
]

custom_css = """
#logo-img {
    border: none !important;
}
#chat-message {
    font-size: 14px;
    min-height: 300px;
}
"""

with gr.Blocks(analytics_enabled=False, css=custom_css) as demo:
    cid = gr.State("")
    token = gr.State(value=None)
    
    with gr.Row():
        with gr.Column(scale=1):
            gr.Image("logoplus.png", elem_id="logo-img", show_label=False, show_share_button=False, show_download_button=False)
        with gr.Column(scale=3):
            gr.Markdown("""C4AI Command R+ is a research open weights release of a 104B billion parameter with highly advanced Retrieval Augmented Generation (RAG) capabilities, tool Use to automate sophisticated tasks, and is multilingual in 10 languages: English, French, Spanish, Italian, German, Portuguese, Japanese, Korean, Arabic, and Chinese. Command R+ is optimized for a variety of use cases including reasoning, summarization, and question answering.
            <br/><br/>
            **Model**: [c4ai-command-r-plus](https://huggingface.co/CohereForAI/c4ai-command-r-plus)
            <br/> 
            **Developed by**: [Cohere](https://cohere.com/) and [Cohere for AI](https://cohere.com/research)
            <br/>
            **License**: [CC-BY-NC](https://cohere.com/c4ai-cc-by-nc-license), requires also adhering to [C4AI's Acceptable Use Policy](https://docs.cohere.com/docs/c4ai-acceptable-use-policy)
            """
            )
            
    with gr.Column():
        with gr.Row():
            chatbot = gr.Chatbot(show_label=False, show_share_button=False, show_copy_button=True)
        
        with gr.Row():
            user_message = gr.Textbox(lines=1, placeholder="Ask anything ...", label="Input", show_label=False)

      
        with gr.Row():
            submit_button = gr.Button("Submit")
            clear_button = gr.Button("Clear chat")

                        
        history = gr.State([])
        
        user_message.submit(fn=generate_response, inputs=[user_message, cid, token, history], outputs=[chatbot, history, cid], concurrency_limit=32)
        submit_button.click(fn=generate_response, inputs=[user_message, cid, token, history], outputs=[chatbot, history, cid], concurrency_limit=32)
        
        clear_button.click(fn=clear_chat, inputs=None, outputs=[chatbot, history, cid], concurrency_limit=32)

        user_message.submit(lambda x: gr.update(value=""), None, [user_message], queue=False)
        submit_button.click(lambda x: gr.update(value=""), None, [user_message], queue=False)
        clear_button.click(lambda x: gr.update(value=""), None, [user_message], queue=False)
        
        with gr.Row():
            gr.Examples(
                examples=examples,
                inputs=user_message,
                cache_examples=False,
                fn=trigger_example,
                outputs=[chatbot],
                examples_per_page=100
            )

    demo.load(lambda: secrets.token_hex(16), None, token)

if __name__ == "__main__":
    # demo.launch(debug=True)
    try:
        demo.queue(api_open=False, max_size=40).launch(show_api=False)
    except Exception as e:
        print(f"Error: {e}")