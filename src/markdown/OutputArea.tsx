import React, { Component } from "react";
import { EditorContext } from "../EditorContext";
import FormatMarkDown from "./MarkDown";
import Dompurify from "dompurify";

class OutputArea extends Component {
  static contextType = EditorContext;
  render() {
    const markDownOutPut = FormatMarkDown.toHtmlString(
      this.context.markdownText
    );
    const santizedMarkDownOutPut = Dompurify.sanitize(markDownOutPut, {
      USE_PROFILES: { html: true },
    });
    return (
      <div className="container">
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: santizedMarkDownOutPut }}
        ></div>
      </div>
    );
  }
}

export default OutputArea;
