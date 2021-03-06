import React, { useState } from "react";
import "./style/App.css";
import InputArea from "./markdown/InputArea";
import OutputArea from "./markdown/OutputArea";
import { EditorContextData, EditorContext } from "./EditorContext";

function App() {
  const [markdownText, setMarkdownText] = useState(
    "**bold**\n***italic***\n_underline_"
  );

  // context to pass data of from input to output components
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
