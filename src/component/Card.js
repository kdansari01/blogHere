import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "redux/action/blog.action";
import logo from "../component/assets/logo.png";
import Skeleton from "./Loading/Skeleton";
const Card = () => {
  const dispatch = useDispatch();
  const [globalLoading, setGlobalLoading] = useState(false);
  const blogs = useSelector((state) => state.blog.blogs);
  console.log("blogsdata===>", blogs);
  // const isLoggedIn = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getAllBlogs(setGlobalLoading));
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <>
      {globalLoading ? (
        <Skeleton />
      ) : (
        <div className="mainContainer row  d-flex">
          {/* <div className="  "> */}
          {blogs &&
            blogs?.map((item) => (
              <div
                className=" mb-4 col-xl-4 col-lg-4 col-md-6 col-12 mt-2 "
                key={Math.random(1000000)}
              >
                <div className="BG_CARDS card-container">
                  <div className="card-image">
                    <img
                      src={item?.image}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://picsum.photos/200/300";
                      }}
                      alt={item?.title}
                    />
                  </div>
                  <div
                    className="card-body"
                    onClick={() => navigate(`/blog/${item?._id}`)}
                    style={{ position: "relative" }}
                  >
                    <span className="card-badge card-badge-blue">Blog</span>
                    <h1>
                      {item?.title?.length > 30
                        ? item?.title?.slice(0, 25) + "..."
                        : item?.title}
                    </h1>
                    <p
                      // style={{ fontSize: "8px" }}
                      className="card-subtitle"
                      dangerouslySetInnerHTML={{
                        __html: item?.content?.substring(0, 80) + "...",
                      }}
                    ></p>
                    <div
                      className="card-author"
                      style={{ position: "absolute", bottom: 0 }}
                    >
                      <img src={logo} alt="author avatar" />
                      <div className="author-info">
                        <p className="author-name">Author</p>
                        <p className="post-timestamp">
                          {new Date().getHours() -
                            new Date(item?.createdAt).getHours() ===
                            0 ||
                          new Date().getHours() -
                            new Date(item?.createdAt).getHours() <=
                            new Date(item?.createdAt).getHours()
                            ? `${Math.abs(
                                new Date().getMinutes() -
                                  new Date(item?.createdAt).getMinutes()
                              )} minutes ago`
                            : `${Math.abs(
                                new Date().getHours() -
                                  new Date(item?.createdAt).getHours()
                              )} hours ago`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Card;
