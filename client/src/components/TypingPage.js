import { React, useState } from "react";


const SearchBar = () => {

  const white = { color: "white", }

  const [styleFlag, setStyleFlag] = useState(white);
  const string = "lorem input output stream basic input output system apple bmw asus samsung"

  const [from, setFrom] = useState("lorem input output stream basic input output system apple bmw asus samsung qwerty asdfg zxcvb oiuy lkjh nbvc ojhg hfbvbdf ndsklncsn");
  const [count, setCount] = useState(0)
  const myArray = from.split("");

  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let interval;
  let timer = document.getElementById('timer');

  const updateTime = () => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }


  const onKeyPressed = (e) => {
    const keyKeyboard = e.key;
    const keyArray = myArray[count];
    const backspace = "Backspace"

    let el = document.getElementById(count.toString());

    if (keyArray === keyKeyboard) {
      document.getElementById(count.toString()).style.color = "green";
      setCount(count + 1);
    } else if (keyKeyboard === backspace) {
      const item = count - 1;
      document.getElementById(item.toString()).style.color = "white";
      setCount(count - 1)
    } else {
      document.getElementById(count.toString()).style.color = "red";
      setCount(count + 1);
    }
  }



  //interval = setInterval(updateTime, 1000);

  {/* <div id="time" style={{ display: "flex", justifyContent: "center", flexDirection: "column", height: "100px", width: "80px", marginLeft: "100px", marginTop: "200px" }}>
        <span>minutes</span>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div > */}

  return (

    <>

      <div id="time" style={{ position: "relative", marginTop: "1%", textAlign: "center" }} >
        <span>SELECT MINUTES: </span>
        <button style={{ marginLeft: "2px" }}>1</button>
        <button style={{ marginLeft: "2px" }}>2</button>
        <button style={{ marginLeft: "2px" }}>3</button>
        <h3 id="timer">00:00:00</h3>
      </div >

      <div tabIndex={0} onKeyDown={onKeyPressed} style={{
        display: "flex",
        marginTop: "10px",
        justifyContent: "space-around"
      }}>

        <div style={{
          'backgroundColor': '#3D3C3A',
          borderRadius: "50px",
          "height": "400px",
          "width": "900px",
          position: "fixed",
          color: "white",
          paddingLeft: "100px",
          paddingRight: "100px",
          paddingTop: "50px"
        }}>

          {myArray.map((elem, index) => (
            <span style={styleFlag} id={index}>{elem}</span>
          ))}

        </div>
      </div >
    </>
  );
};

export default SearchBar;