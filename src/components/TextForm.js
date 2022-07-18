import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("enter your text");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlart("converted to uppercase","succes ");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlart("converted to lowercase","succes ");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlart("text is clered","succes");
  };
  const handleCCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlart("copyed","succes ");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlart("removed all extra spaces","succes ");
  };
  const handleOnChange = (event) => {
    console.log("on_changing");
    setText(event.target.value);
  };
  // setText("dfgfdghfdjhfdgj")
  return (
    <> 
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', 
          color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8" />
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lovercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>
          Remove extra Spaces
        </button>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="my-4">Your Text Summary</h2>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} min to read</p>
        <h2 className="my-4">Preview Text Here</h2>
        {/* <p>{text}</p> */}
        <p>{text.length>0?text:"enter somthing to preciwe here "}</p>
      </div>
    </>
  );
}
