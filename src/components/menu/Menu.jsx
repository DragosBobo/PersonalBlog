import "./Menu.scss";

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && "active " )}>
        <ul>
            <li>
                <a href="#intro">Home</a>
            </li>
            <li>
                <a href="#portofolio">Portofolio</a>
            </li>
            <li>
                <a href="#works   ">Works </a>
            </li>
            <li>
                <a href="#testimonials   ">Testimonials </a>
            </li>
            <li>
                <a href="#contact  ">Contact </a>
            </li>
            
        </ul>
    </div>
  )
}
