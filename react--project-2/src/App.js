import React, {useState} from "react"
import ReactDOM from 'react-dom/client';
import UseGenerateRandomColor from "./randomColor";
import "./app.css"

 
function App() {

  /////// CREATING STATE /////////
const [backgroundColor, setBackgroundColor] = useState("white")
const [inputBackgroundColor, setInputBackgroundColor] = useState("white")
const [inputTextColor, setInputTextColor] = useState("");
const [textSize, setTextSize] = useState(10)
const [textColor, setTextColor] = useState("black")
const [inputText, setInputText] = useState("")
const [text , setText] = useState("Your Words here")
const { randomColor, generateRandomColor } = UseGenerateRandomColor("");



/////// Functions to handle background change when color is typed //////

const handleBackgroundChange = (e) => {
  setInputBackgroundColor(e.target.value);
};

//// Fucntion to handle when submit is clicked with changes /////
const handleClick = () => {
  setBackgroundColor(inputBackgroundColor);
  setTextColor(inputTextColor)
  setText(inputText)
}

const handleTextChange = (e) => {
  setInputTextColor(e.target.value);
};
const handleTextInput = (e) => {
  setInputText(e.target.value);
};

  
return (
    <div className="App">
      
      <div>
         <input type="text" placeholder= "Enter a background color" onChange={handleBackgroundChange} />
         <input type="text" placeholder="Enter text to display" onChange={handleTextInput}/>
         <input type="text" placeholder="Enter text color" onChange={handleTextChange}/>
         <button type='submit' onClick={handleClick}>Submit Change</button>
      </div>
  <div className="box"
      style={{
        height: "70vh",
        width: "70vw",
        backgroundColor: backgroundColor,
        fontSize: textSize
      }}>
        <div className="Text" style={{
        color: textColor,
      }}>
        {text}
        </div>
    </div>
       <div>
        <button type="submit"onClick={()=> {setTextSize(50)}} >Small</button>
          <button type="submit" onClick={()=> {setTextSize(75)}}>Medium</button>
          <button type="submit" onClick={()=> {setTextSize(88)}}>Large </button>
          <UseGenerateRandomColor string={"something"} setBackgroundColor={setBackgroundColor} />
      </div>
    
    </div>

)};

export default App;
