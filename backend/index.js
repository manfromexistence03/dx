// import { CohereClient } from "cohere-ai";

// const cohere = new CohereClient({
//   token: "agnI51GCGhkPOpIxQdo3Hqkdw3D60OXYIAvBwfan",
// });

// (async () => {
//   const stream = await cohere.chatStream({
//     model: "command-r-plus",
//     message: "<YOUR MESSAGE HERE>",
//     temperature: 0.3,
//     chatHistory: [],
//     promptTruncation: "AUTO",
//     connectors: [{"id":"web-search"}]
//   });

//   for await (const chat of stream) {
//       if (chat.eventType === "text-generation") {
//           process.stdout.write(chat.text);
//       }
//   }
// })();
// const pymport = require('pymport');

// const text = "The course starts next";
// const numWords = 5;

// (async () => {
//   try {
//     const { GPT2 } = await pymport('main.py'); // Path to your Python script
//     const gpt2 = new GPT2();
//     const predictedWords = await gpt2.predict_next(text, numWords);
//     console.log(predictedWords);
//   } catch (err) {
//     console.error(err);
//   }
// })();
// const { PythonShell } = require('python-shell');

// const text = "The course starts next";
// const options = {
//   scriptPath: './main.py', // Replace with the path to your Python script
//   args: [text, 5] // List of arguments to pass to the Python script
// };

// PythonShell.run('pymport main.py', options, (err: any, results: any[]) => {
//   if (err) throw err;
//   console.log(results[0]); // This will contain the predicted next words
// });
// import { pymport, proxify } from 'pymport';
// const np = proxify(pymport('numpy'));

// const a = np.arange(15).reshape(3, 5);
// const b = np.ones([2, 3], { dtype: np.int16 });

// console.log(a)
// Example from
// https://matplotlib.org/stable/gallery/lines_bars_and_markers/bar_colors.html#sphx-glr-gallery-lines-bars-and-markers-bar-colors-py
// const { pymport } = require('../proxified');

// const plt = pymport('matplotlib.pyplot');

// const plots = plt.subplots();
// const ax = plots.item(1);

// const fruits = ['apple', 'blueberry', 'cherry', 'orange'];
// const counts = [40, 100, 30, 55];
// const bar_labels = ['red', 'blue', '_red', 'orange'];
// const bar_colors = ['tab:red', 'tab:blue', 'tab:red', 'tab:orange'];

// ax.bar(fruits, counts, { label: bar_labels, color: bar_colors });

// ax.set_ylabel('fruit supply');
// ax.set_title('Fruit supply by kind and color');
// ax.legend({ title: 'Fruit color' });

// plt.show();

/*
Original Python code

import matplotlib.pyplot as plt

fig, ax = plt.subplots()

fruits = ['apple', 'blueberry', 'cherry', 'orange']
counts = [40, 100, 30, 55]
bar_labels = ['red', 'blue', '_red', 'orange']
bar_colors = ['tab:red', 'tab:blue', 'tab:red', 'tab:orange']

ax.bar(fruits, counts, label=bar_labels, color=bar_colors)

ax.set_ylabel('fruit supply')
ax.set_title('Fruit supply by kind and color')
ax.legend(title='Fruit color')

plt.show()

*/


// const { PythonShell } = require('python-shell');

// // const text = "The course starts next";
// // const options = {
// //   scriptPath: './next_word_prediction.py', // Replace with the path to your Python script
// //   args: [text, 5] // List of arguments to pass to the Python script
// // };

// PythonShell.run('pymport main.py', (err, results) => {
//   if (err) throw err;
//   console.log(results[0]); // This will contain the predicted next words
// });
// import * as tf from '@tensorflow/tfjs'; // Import TensorFlow.js library
// import { Tokenizer } from '@tensorflow-models/text'; // Import Tokenizer class

// // Assuming you have TensorFlow.js and the tokenizer library installed

// const text = "The course starts next";
// const numWordsToPredict = 5;

// // Load a pre-trained language model (replace 'bert_base_uncased' with the desired model)
// const model = await tf.hub.load('https://tfhub.dev/tensorflow/bert_base_uncased_L-2_H-128_A-2/1', { representations: 'token' });

// // Tokenize the text input (convert words to numerical representations)
// const tokenizer = new Tokenizer(); // Create a Tokenizer instance
// await tokenizer.adapt(text); // Adapt the tokenizer to the vocabulary in your text (if necessary)
// const input = tokenizer.textsToTensors([text]);

// // Get predictions using the model
// const predictions = await model(input);
// const predictedTokens = predictions[0].dataSync().slice(1, 1 + numWordsToPredict); // Skip the first token (original text)

// // Decode the predicted tokens back to words
// const predictedWords = tokenizer.decode(predictedTokens);

// console.log("Predicted next words:", predictedWords);
import * as tf from '@tensorflow/tfjs';

// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
model.fit(xs, ys).then(() => {
  // Use the model to do inference on a data point the model hasn't seen before:
  model.predict(tf.tensor2d([5], [1, 1])).print();
});