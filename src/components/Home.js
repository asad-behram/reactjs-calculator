import React, { useState } from 'react'
import classes from './css/Home.module.css'
import Button from './Button';

function Home() {

  const [res, setRes] = useState("");
  const buttons = [
    "C",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "DEL",
    "=",
  ];
  const findVal = () => {
    let result = Function("return" + res);
    setRes(result.toString());

  }
  const handler = (arg) => {
    if(arg == "C") setRes("");
    else if(arg == "=") findVal();
    else if(arg == "DEL") {
      let n = res.length;
      if (n>0) setRes(res.slice(0, n -1));
    else setRes(res.concat(arg));
    }
    console.log(res)
  }

  return (
    <div className={classes.home}>
      <div className={classes.inner}>
        <div className={classes.result}>
          <div className={classes.resbox}>
            {res}
          </div>
        </div>
        <div className={classes.btns}>
          {buttons.map((element, index) => { return <Button handler={handler} value = {element} key= {index}/> })}
        </div>
      </div>
      
    </div>
  )
}

export default Home