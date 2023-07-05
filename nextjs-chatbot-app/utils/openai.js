```javascript
import { createClient } from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = createClient({
  apiKey: OPENAI_API_KEY,
});

export const generateResponse = async (prompt) => {
  try {
    const gptResponse = await openai.complete({
      engine: "gpt-3.5-turbo-16k-0613",
      prompt,
      maxTokens: 60,
    });

    return gptResponse.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error in generating response from OpenAI: ", error);
    throw error;
  }
};
```