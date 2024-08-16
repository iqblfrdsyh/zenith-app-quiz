const { HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const GoogleGenerativeAI = require("@google/generative-ai").GoogleGenerativeAI;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ],
});

exports.GenAI = async (req, res) => {
  try {
    const { message, history } = req.body;

    const chat = model.startChat({
      history,
    });

    let result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ status: 200, response: text });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, msg: "Failed to interact with the AI model" });
  }
};
