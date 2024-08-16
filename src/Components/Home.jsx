import React, { useState, useContext,useEffect} from "react";
import { userAuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import BlogContent from "./BlogContent";
import Comments from "./Comments";
import Search from "./Search";


const Home =()=>{

// This gets the value from the AuthContext. 
  const { name } = useContext(AuthContext);

  // Blog data
  const [blogs, setBlogs] = useState([
    { id: 1, title: "First Blog", content: "This is the first blog post." },
    { id: 2, title: "Second Blog", content: "This is the second blog post." },
  ]);

  const [searchKey, setSearchKey] = useState(""); 
  // Removed the duplicates

  // Event handler for the search bar
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Function to filter blogs based on the search key
  const handleSearchResults = () => {
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    setBlogs(filtered);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    // Reset the blogs array to its original state
    setBlogs([
      { id: 1, title: "First Blog", content: "This is the first blog post." },
      { id: 2, title: "Second Blog", content: "This is the second blog post." },
    ]);
    setSearchKey("");
  };

  return (
    <div className="home">
      <h1>Hi! Welcome to Feed Art Blog!</h1>
      <Search searchKey={searchKey} setSearchKey={setSearchKey} />
      {filteredBlogs.length ? (
        filteredBlogs.map(blog => (
          <BlogContent key={blog.id} title={blog.title} content={blog.content} />
        ))
      ) : (
        <p>No blogs.</p>
      )}
    </div>
  );
};

export default Home;
