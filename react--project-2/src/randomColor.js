import {useState} from 'react';
 

export const UseGenerateRandomColor = (props) => {
  const {string, setBackgroundColor} = props
 
    const [randomColor, setRandomColor] = useState("")
     
    const generateRandomColor = () =>{
        console.log(string)
///////////////creates random CSS colors/////////////////////////////////////////
        // var num = Math.round(0xffffff * Math.random());
        // var r = num >> 16;
        // var g = num >> 8 & 255;
        // var b = num & 255;
        // setBackgroundColor('rgb(' + r + ', ' + g + ', ' + b + ')')
/////////////////////////////////////////////////////////////////////////////////
        setBackgroundColor("#" + Math.random().toString(16).substr(-6));
    
    };
    return ( 
    <div
        style={{
        background: "#" + randomColor,
        }}
        >
        <button
        type="submit"
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundImage: 
  "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
          }}
          onClick={generateRandomColor}>
          Random Background Color
        </button>
      </div>

    )};
   export default UseGenerateRandomColor