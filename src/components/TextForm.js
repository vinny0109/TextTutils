import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase Was Clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase!", "success");
  };

  const handleLoClick = () => {
    console.log("UpperCase Was Clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase!", "success");
  };

  const handleReplaceClick = () => {
    let regex = new RegExp(wordToReplace, "gi");
    let newText = Text.replace(regex, newWord);
    setText(newText);
    props.showAlert("word has been replaced!", "success");
  };

  const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
  };

  const handleCopy = ()=>{
    var text = document.getElementById("my-Box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied!!!", "success");
  }

  const handleSpace = ()=>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed!", "success");
  }

  const [Text, setText] = useState("enter text here");
  const [wordToReplace, setWordToReplace] = useState("");
  const [newWord, setNewWord] = useState("");

  return (
    <>
      <div
        className="Container"
        style={{ color: props.mode === "dark" ? "white" : "#221d1d" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#221d1d",
            }}
            id="my-Box"
            rows="8"
          ></textarea>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1" onClick={handleSpace}>
            Remove Extra Space
          </button>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Word to replace"
            value={wordToReplace}
            onChange={(e) => setWordToReplace(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="New word"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handleReplaceClick}>
          Replace Word
        </button>
      </div>

      <div
        className="Container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {Text.split(" ").length} words and {Text.length} characters
        </p>
        <p>{Text.split(" ").length * 0.008} minutes read</p>
        <h2>Preview</h2>
        <p>
          {Text.length > 0
            ? Text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
