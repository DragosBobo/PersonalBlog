import { useEffect, useState } from "react";
import PortofolioList from "../portofolioList/PortofolioList";
import "./Portofolio.scss"
import {
  featuredPortofolio,
  webPortofolio,
  mobilePortofolio,
  designPortofolio,
  contentPortofolio,
} from "../../data";

function Portofolio() {
const [selected,setSelected]=useState("featured");
const [data,setdata]=useState([]);
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


];
useEffect(()=>{

  switch(selected){
    case  "featured" : 
    setdata(featuredPortofolio);
    break;
    case  "web" : 
    setdata(webPortofolio);
    break;
    case  "mobile" : 
    setdata(mobilePortofolio);
    break;
    case  "design" : 
    setdata(designPortofolio);
    break;
    case  "content" : 
    setdata(contentPortofolio);
    break;
    default : setdata(featuredPortofolio);
  }

},[selected]);
  return (
    <div className="portofolio" id="portofolio">
          <h1>Portofolio</h1>
          <ul>
            {list.map(item=>(
              <PortofolioList title={item.title}
               id={item.id}
                active={selected===item.id} 
                setSelected={setSelected} />
            ))}
          </ul>
      <div className="container">
       {data.map((d)=>(
 <div className="item">
 <img src={d.img} alt="Banking app" />
 <h3>{d.title}</h3>
</div>
       ))}
       
        
      </div>
      
      
    </div>
  )
}

export default Portofolio