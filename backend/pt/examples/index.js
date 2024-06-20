const { pymport, proxify } = require('pymport');
const next_word_prediction = proxify(pymport('next_word_prediction'));

console.log('Next Word');
{
    const gpt = next_word_prediction.GPT2();
    let text = "The course starts next";

    const a = gpt.predict_next(text, 5);
    console.log(a.toString());
}