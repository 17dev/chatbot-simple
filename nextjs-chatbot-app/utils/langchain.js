```javascript
import axios from 'axios';

const LANGCHAIN_API_URL = 'https://api.langchain.io';

export const translateMessage = async (message, sourceLang, targetLang) => {
  try {
    const response = await axios.post(`${LANGCHAIN_API_URL}/translate`, {
      text: message,
      source: sourceLang,
      target: targetLang,
    });

    if (response.data && response.data.translatedText) {
      return response.data.translatedText;
    } else {
      throw new Error('Translation failed');
    }
  } catch (error) {
    console.error('Error in Langchain translation:', error);
    return message;
  }
};
```