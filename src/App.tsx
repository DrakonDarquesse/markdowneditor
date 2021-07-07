import React, { useState } from "react";
import "./style/App.css";
import InputArea from "./InputArea";
import OutputArea from "./OutputArea";
import { EditorContextData, EditorContext } from "./EditorContext";

function App() {
  const [markdownText, setMarkdownText] = useState(
    "**bold**\n***italic***\n_underline_"
  );
  const contextValue = { markdownText, setMarkdownText };

  return (
    <div className="App">
      <div className="header">
        <h1>MarkDown Editor</h1>
      </div>
      <div className="content">
      <EditorContext.Provider value={contextValue as EditorContextData}>
        <InputArea />
        <OutputArea />
      </EditorContext.Provider>
      </div>
    </div>
  );
}

export default App;
