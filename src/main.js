const ngrok = require('ngrok');
const {spawn} = require('child_process');

const stream = spawn('python3',  ['./stream.py']);

stream.stdout.once('data', async() => {
  const url = await ngrok.connect(9090);
});
