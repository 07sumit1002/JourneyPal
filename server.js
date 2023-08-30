const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

// Setup server

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 1024,
    temperature: 0,
    prompt: prompt,
    
  });
  res.send(completion.data.choices[0].text);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


