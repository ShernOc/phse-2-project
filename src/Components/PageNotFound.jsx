import {Link} from "react-router-dom"

const PageNotFound =()=>{
  return (
    <>
     <h2> 404 Error, 
      <br />
      Sorry Page Not Found!! 
      </h2>
     <h1></h1>
     <Link to="./home">Back to the Homepage</Link>
    </> 

  )
}

export default PageNotFound; 