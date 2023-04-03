import React from "react";
import "./hamburger.css";
import Swal from "sweetalert2";
// import { useDispatch } from "react-redux";
// import { deletePost } from "redux/action/blog.action";
const Hamburger = () => {
//   const dispatch = useDispatch();
  const handleClicked = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(deletePost());
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="wrapper">
      <div onClick={handleClicked}>
        <lord-icon
          src="https://cdn.lordicon.com/kfzfxczd.json"
          trigger="morph"
          state="hover-empty"
          colors="primary:#c71f16"
          style={{ width: "25px", height: "25px" }}
        />
      </div>
    </div>
  );
};

export default Hamburger;
