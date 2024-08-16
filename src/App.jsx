import { useState, useEffect} from 'react'
import React from 'react'  
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Search from './Components/Search'
import Comments from 'postcss/lib/comment'
import Login from './Components/Login'
import BlogContent from './Components/BlogContent'
import Signup from './Components/Signup'
import { Routes,Route } from 'react-router-dom'
import './index.css'
import PageNotFound from './Components/PageNotFound'


function App() {
 const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  }

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((blog) => setGetBlogContent(blog));
  }, []);

  return(
    <>
    {/* Passing roots, login   */}
    <Routes>
     <Route path="login" element={<Login/>}/>
    <Route path="signup"
      element={<Signup/>} />
    <Route path="blogcontent" element={<BlogContent/>} />
     <Route path="comments" element={<Comments/>} /> <Route path="header" element={<Header/>} />
    <Route path="search" element={<Search/>} />
    <Route path="footer" element={<Footer/>} />
  <Route path="navBar" element={<NavBar/>} />
   <Route path="home" element={<Home/>} />
   <Route path="*" element={<PageNotFound/>} />
    </Routes>
     </>
  )
}

export default App
