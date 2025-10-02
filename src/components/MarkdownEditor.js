import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownEditor = () => {
  const [userInput, setUserInput] = useState(""); // store Markdown text
  const [previewContent, setPreviewContent] = useState(""); // store rendered HTML

  useEffect(() => {
    // Convert Markdown to HTML whenever userInput changes
    setPreviewContent(marked(userInput));
  }, [userInput]);

  return (
    <div className="app markdown">
      <textarea
        name="textarea"
        cols="30"
        rows="10"
        className="textarea"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></textarea>

      <section
        className="preview"
        dangerouslySetInnerHTML={{ __html: previewContent }}
      ></section>
    </div>
  );
};

export default MarkdownEditor;
