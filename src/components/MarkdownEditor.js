import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [userInput, setUserInput] = useState(""); // store Markdown text
  const [previewContent, setPreviewContent] = useState(""); // store rendered HTML

  useEffect(() => {
    setPreviewContent(<ReactMarkdown>{userInput}</ReactMarkdown>);
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

      <section className="preview">{previewContent}</section>
    </div>
  );
}

export default MarkdownEditor;
