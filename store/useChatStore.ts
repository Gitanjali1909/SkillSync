import { ReactNode } from "react";
import { create } from "zustand";

interface Message {
  content: ReactNode;
  role: "user" | "ai";
  text: string;
}

interface ChatStore {
  messages: Message[];
  addMessage: (message: Message) => void;
  resetChat: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  resetChat: () => set({ messages: [] }),
}));
