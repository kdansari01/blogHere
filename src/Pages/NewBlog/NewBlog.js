import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import Swal from "sweetalert2";
import "react-quill/dist/quill.snow.css";
import "./style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "redux/action/blog.action";
import { Loading } from "component/Loading/Loading";

const NewBlog = () => {
  const userData = useSelector((state) => state.user.user);

  console.log("userId=.", userData);
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [
      { header: 1 },
      { header: 2 },
      { header: 3 },
      { header: 4 },
      { header: 5 },
      { header: 6 },
    ],
    ["image", "video"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ direction: "rtl" }],
  ];
  const [value, setValue] = useState({
    title: "",
    content: "",
    image: "",
  });
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [blogContent, setBlogContent] = useState("");
  const dispatch = useDispatch();
  const imageUploader = async (e) => {
    const formdata = new FormData();
    setLoading(true);
    formdata.append("file", e.target.files[0]);
    try {
      const data = await axios.post(
        "https://aws-uploader.onrender.com/api/v2/samunnati/upload/file",
        formdata
      );
      setLoading(false);
      setImageURL(data.data.link);
      setValue({ ...value, image: data.data.link });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    debugger;
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    const blogData = {
      ...value,
      content: blogContent,
      emailId: userData.email,
      userPic: userData.photoUrl,
    };
    if (blogData.title === "" || blogData.content === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill the all blanks.!",
      });
      return;
    }
    dispatch(createBlog(blogData, setGlobalLoading));
  };

  return (
    <>
      <div>
        {globalLoading && <Loading />}
        <div className="BG_NEW_BLOG container-fluid row col-12 d-flex justify-content-center mt-4 margin-bottom-100">
          <div className="iconSection col-lg-2">
            <Link to="/" className="home mb-4">
              <lord-icon
                src="https://cdn.lordicon.com/osuxyevn.json"
                trigger="hover"
                colors="primary:#000000"
                state="hover-3"
                style={{ width: 50, height: 50 }}
              />
            </Link>
            <div className="save " onClick={() => handleSave()}>
              <lord-icon
                src="https://cdn.lordicon.com/wfadduyp.json"
                trigger="hover"
                colors="primary:#121331"
                state="hover-2"
                style={{
                  width: "50px",
                  height: "55px",
                }}
              />
            </div>
          </div>
          <div className="textArea col-lg-7">
            <div className="mb-2">
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                placeholder="Title"
                name="title"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <input
                type="file"
                className="form-control"
                onChange={(e) => imageUploader(e)}
              />
            </div>
            {loading && (
              <div class="spinner-border text-secondary" role="status">
                <span class="sr-only"></span>
              </div>
            )}
            {imageURL && (
              <img src={imageURL} height={200} className="mb-2" alt=".." />
            )}
            <ReactQuill
              theme="snow"
              modules={{ toolbar: toolbarOptions }}
              value={blogContent}
              name="content"
              onChange={setBlogContent}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBlog;
