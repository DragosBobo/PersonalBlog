import "./Testimonials.scss"

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Burciu Alexandru ",
      title: "Developer for ATOS Timisoara ",
      img:"https://i.imgur.com/XmjD4YT.jpg",
      icon: "assets/twitter.png",
      desc:
        "He's a very serious guy, really good delivery and respects every deadline :*",
    },
    {
      id: 2,
      name: "Filis Andrei ",
      title: "Student Politehnica Bucuresti ",
      img:"https://i.imgur.com/NbRym9x.jpg",
      icon: "assets/youtube.png",
      desc:
        "Bobo is a perseverant and curious man , who want's to learn something new every day  ",
      featured: true,
    },
    {
      id: 3,
      name: "Remus ",
      title: "London bank employed",
      img:"https://i.imgur.com/J2wQggs.jpg",
      icon: "assets/linkedin.png",
      desc:
        "tot nimic momentan :/",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d)=>(
        <div className={d.featured ? "card featured " : "card" }>
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img className="user"
            src={d.img} alt="" />
            <img className="right" src={d.icon} alt="" />
          </div>
          <div className="center">{
            d.desc
          }
   </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default Testimonials