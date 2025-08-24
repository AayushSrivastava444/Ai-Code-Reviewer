import main from '../services/ai.service.js';

export default async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) {
      console.error("Request missing code:", req.body);
      return res.status(400).send("Code is missing");
    }

    const response = await main(code);
    res.send(response);
  } catch (error) {
    console.error("Error in /ai/get-review:", error);  // detailed error log
    res.status(500).send("Internal server error");
  }
};
