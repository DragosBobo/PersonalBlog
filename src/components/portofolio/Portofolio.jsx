import { useState } from "react";
import PortofolioList from "../portofolioList/PortofolioList";
import "./Portofolio.scss"
function Portofolio() {
const [selected,setSelected]=useState("featured");
const list=[
{
  id: "featured",
  title: "Featured",
},
{
  id: "web",
  title: "Web App",
},
{
  id: "mobile",
  title: "Mobile App",
},
{
  id: "design",
  title: "Design",
},
{
  id:"content",
  title:"Content",
},
];

  return (
    <div className="portofolio" id="portofolio">
          <h1>Portofolio</h1>
          <ul>
            {list.map(item=>(
              <PortofolioList title={item.title} id={item.id} active={selected===item.id} setSelected={setSelected} />
            ))}
          </ul>
      <div className="container">
        <div className="item">
          <img src="https://images.unsplash.com/photo-1609921141835-710b7fa6e438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFua2luZyUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Banking app" />
          <h3>Banking App</h3>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Portofolio