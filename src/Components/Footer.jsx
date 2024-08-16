import React from "react";
import { Link } from "react-router-dom";

const Footer= ()=>{
// Footer section 
  return(
    <>
    <footer>
       <nav>
          <ul >
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
            <li>
              <Link to="https://github.com/ShernOc/Phase2-feed-art-blog">Github</Link>
            </li>
            <li>
              <Link to="https://www.figma.com/design/lCEjdHHPjQcW25lYmJIggK/FEED-ART-BLOG-APP?node-id=0-1&m=dev">Figma</Link>
            </li>
          </ul>
        </nav>
    </footer>
    </>
  )
}
export default Footer; 