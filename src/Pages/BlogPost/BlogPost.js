import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlog } from "redux/action/blog.action";
import { Loading } from "component/Loading/Loading";
const BlogPost = () => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const blogDetails = useSelector((state) => state.blog.blog);
  // console.log("blogDetails=>", blogDetails);
  useEffect(() => {
    dispatch(getSingleBlog(id, setGlobalLoading));
  }, [dispatch, id]);

  return (
    <>
      {globalLoading && <Loading />}
      <div className="container-fluid row d-flex col-12 justify-content-center mt-4 mb-4">
        <div className="col-lg-2 col-md-2 col-12 justify-content-center d-flex">
          <div className="BUTTON_BACK">
            <div className="padding">
              <Link to="/" className="nav-link home mt-4 ">
                <lord-icon
                  src="https://cdn.lordicon.com/osuxyevn.json"
                  trigger="hover"
                  colors="primary:#000000"
                  state="hover-3"
                  style={{ width: 40, height: 40 }}
                />
              </Link>
            </div>
            <div className="padding">
              <Link to="/blogs" className="nav-link home mt-4">
                <lord-icon
                  src="https://cdn.lordicon.com/vufjamqa.json"
                  trigger="boomerang"
                  colors="primary:#121331"
                  state="hover"
                  style={{
                    width: "50px",
                    height: "55px",
                    color: "white",
                    backgrundColor: "white",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className=" col-lg-10 col-md-10 col-12 justify-content-center d-flex">
          <div>
            <img
              src={blogDetails?.image}
              className="card-img-top"
              alt="..."
              style={{
                height: "286px",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title fs-1">{blogDetails?.title}</h5>
              <p
                className="paragraph card-text text-wrap "
                dangerouslySetInnerHTML={{ __html: blogDetails?.content }}
              />
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
