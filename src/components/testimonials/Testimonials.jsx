import "./Testimonials.scss"

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Burciu Alexandru ",
      title: "Developer for ATOS Timisoara ",
      img:
        "https://scontent.fcra1-1.fna.fbcdn.net/v/t1.6435-9/190943555_1712906808896877_8608226842976003607_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=NNuDzqGmg9kAX8zqWCG&_nc_ht=scontent.fcra1-1.fna&oh=00_AT_i0AW0v5r5LbbpAk2lHLZr9GrPsZHhsgLjmAs6lrs5pA&oe=6234E0A8",
      icon: "assets/twitter.png",
      desc:
        "He's a very serious guy, really good delivery and respects every deadline :*",
    },
    {
      id: 2,
      name: "Filis Andrei ",
      title: "Student Politehnica Bucuresti ",
      img:
        "https://scontent.fcra1-1.fna.fbcdn.net/v/t39.30808-6/271151128_3645272562264648_8402742632714446117_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=EsHWeHJoG1YAX9vQ7j8&tn=l-80_JORztCArx6y&_nc_ht=scontent.fcra1-1.fna&oh=00_AT9y__SNgWPZ7eT96qtvUveya--EgPWNRYz9h2DxKlefAg&oe=6215DEC4",
      icon: "assets/youtube.png",
      desc:
        "Bobo is a perseverant and curious man , who want's to learn something new every day  ",
      featured: true,
    },
    {
      id: 3,
      name: "Remus ",
      title: "London bank employed",
      img:
        "https://scontent.fcra1-1.fna.fbcdn.net/v/t1.18169-1/c0.0.260.260a/20664432_683129138552830_755641267856127665_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=xOao3lgKNlEAX9QXZwq&_nc_ht=scontent.fcra1-1.fna&oh=00_AT_5tFFZT0QMOYDQEZnPY_Ud8bOWqDAa2b4s7Pf0xQhMIg&oe=6236B406",
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