import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewBlog from "./Pages/NewBlog/NewBlog";
import BlogPost from "./Pages/BlogPost/BlogPost";
import Navbar from "component/navbar/Navbar";
import Blogs from "Pages/blogs/Blogs";
import AboutUs from "Pages/aboutUs/AboutUs";
import { ProtectedRoute } from "Protectroute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/new-blog"
            element={
              <ProtectedRoute>
                <NewBlog />
              </ProtectedRoute>
            }
          />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/about-us" element={<AboutUs />} />
          AboutUs
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
