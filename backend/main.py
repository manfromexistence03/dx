from next_word_prediction import GPT2

gpt2 = GPT2()

text = "The course starts next"

print(gpt2.predict_next(text, 5))






