import { NextApiRequest, NextApiResponse } from 'next';
import { createChat, editChat, deleteChat, connectDatabase } from '../../utils/db';
import { getChatHistory } from '../../utils/session';
import { OPENAI_API_KEY } from '../../.env';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const chatHistory = getChatHistory();
        res.status(200).json(chatHistory);
      } catch (error) {
        res.status(500).json({ error: 'Error retrieving chat history' });
      }
      break;
    case 'POST':
      try {
        const { chatName, databaseId } = req.body;
        const newChat = createChat(chatName, databaseId);
        res.status(201).json(newChat);
      } catch (error) {
        res.status(500).json({ error: 'Error creating new chat' });
      }
      break;
    case 'PUT':
      try {
        const { chatId, newChatName } = req.body;
        const updatedChat = editChat(chatId, newChatName);
        res.status(200).json(updatedChat);
      } catch (error) {
        res.status(500).json({ error: 'Error updating chat' });
      }
      break;
    case 'DELETE':
      try {
        const { chatId } = req.body;
        deleteChat(chatId);
        res.status(200).json({ message: 'Chat deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Error deleting chat' });
      }
      break;
    case 'PATCH':
      try {
        const { chatId, databaseId } = req.body;
        connectDatabase(chatId, databaseId);
        res.status(200).json({ message: 'Database connected successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Error connecting database' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}