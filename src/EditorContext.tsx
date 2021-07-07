import { createContext } from "react";

export interface EditorContextData {
  markdownText: string;
  setMarkdownText: (text: string) => void;
}

export const defaultContext: EditorContextData = {
  markdownText: "",
  setMarkdownText: () => {},
};

export const EditorContext = createContext<EditorContextData>(defaultContext);
