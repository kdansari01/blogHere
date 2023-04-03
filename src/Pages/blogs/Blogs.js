import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../component/Card";
import "./style.css";
// import { getSingleBlog } from "redux/action/blog.action";
import { useSelector } from "react-redux";
import Skeleton from "component/Loading/Skeleton";
const Blogs = () => {
  const isLoggedIn = useSelector((state) => state.user.user);

  // const dispatch = useDispatch();
  // const { id } = useParams();

  const [globalLoading, setGlobalLoading] = useState(false);
  useEffect(() => {
    setGlobalLoading();
  }, [globalLoading]);
  return (
    <div className="BG_BLOGS">
      <div>
        {globalLoading && <Skeleton />}

        <Card />
      </div>
      {isLoggedIn && (
        <div className="mainNewBlogSec">
          <div className="newBlogSec">
            <Link to="/new-blog">
              <lord-icon
                src="https://cdn.lordicon.com/mecwbjnp.json"
                trigger="hover"
                style={{ width: "80px", height: "80px" }}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
