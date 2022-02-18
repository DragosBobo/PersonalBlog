import "./PortofolioList.scss";

function PortofolioList({title,id,active,setSelected}) {
  return (
    <li className={ active ? "portofolioList active" : "portofolioList"} 
    onClick={()=> setSelected(id)} >
        {title} 

    </li>
  )
}

export default PortofolioList