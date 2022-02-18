import "./Intro.scss"
import { init } from 'ityped'
import { useEffect,useRef } from "react"
function Intro() {
 const textRef = useRef();
  useEffect(()=>{
    init(textRef.current,{
      showCursor:true,
      backDelay:1500,
      strings:["Developer","Student","Designer","Content Creator"],
    });

  },[]);
  return (
    <div className="intro" id="intro"> 
    <div className="left">
      <div className="imgContainer">
        <img src="assets/man.png" alt="" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hello , I'm </h2>
        <h1>Dragos Daniel </h1>
        <h3>I am <span ref={textRef}> </span></h3>
      </div>
      <a href="#portofolio">
        <img src="assets/down.png" alt=""/>
      </a>
    </div>
    </div>
  )
}

export default Intro