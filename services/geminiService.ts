import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

const apiKey = process.env.API_KEY;

export const initializeChat = (): Chat | null => {
  if (!apiKey) {
    console.warn("API Key is missing. AI features will be disabled.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    // Attempt to initialize if null (e.g. first call)
    chatSession = initializeChat();
  }

  if (!chatSession) {
    return "I'm sorry, I cannot connect to the AI service at the moment. Please check the API configuration.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I didn't get a response.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Sorry, something went wrong while processing your request.";
  }
};