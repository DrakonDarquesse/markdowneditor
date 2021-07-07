import React, { Component } from "react";
import { EditorContext } from "../EditorContext";

class InputArea extends Component {
  render() {
    return (
      <div className="container">
        <EditorContext.Consumer>
          {({ markdownText, setMarkdownText }) => (
            <textarea
              value={markdownText}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                event.target.style.height = "";
                event.target.style.height = event.target.scrollHeight + "px"
                setMarkdownText(event.target.value);
              }}
            ></textarea>
          )}
        </EditorContext.Consumer>
      </div>
    );
  }
}

export default InputArea;
