import { createBlogApi, getAllBlogApi, getBlogByIdApi } from "api/index";

import { CREATE_BLOG, FETCH_ALL_BLOGS, FETCH_BY_ID } from "redux/types/types";
import Swal from "sweetalert2";

export const createBlog = (body, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const blog = await createBlogApi(body);
    setLoading(false);
    Swal.fire("Blog Created Successfully!", "", "success").then(() => {
      window.location.replace("/blogs");
    });
    dispatch({ type: CREATE_BLOG, payload: blog });
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};
export const getAllBlogs = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const blog = await getAllBlogApi();
    setLoading(false);
    dispatch({
      type: FETCH_ALL_BLOGS,
      payload: blog?.data?.blogs,
    });
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};
export const getSingleBlog = (id, setGlobalLoading) => async (dispatch) => {
  setGlobalLoading(true);
  try {
    const blog = await getBlogByIdApi(id);
    setGlobalLoading(false);
    dispatch({ type: FETCH_BY_ID, payload: blog?.data?.blog });
  } catch (err) {
    console.log(err);
    setGlobalLoading(false);
  }
};
