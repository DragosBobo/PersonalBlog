import "./Intro.scss"

function Intro() {
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
        <h3>Freelancer </h3>
      </div>
      <a href="#portofolio">
        <img src="assets/down.png" alt=""/>
      </a>
    </div>
    </div>
  )
}

export default Intro