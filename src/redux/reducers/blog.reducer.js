import {
  CREATE_BLOG,
  DELETE_BY_ID,
  FETCH_ALL_BLOGS,
  FETCH_BY_ID,
} from "redux/types/types";

const initialState = {
  blogs: [],
  blog: {},
  loading: false,
  error: null,
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BLOG:
      return { ...state, blogs: [...state.blogs, action.payload] };
    case FETCH_ALL_BLOGS:
      return { ...state, blogs: action.payload };
    case FETCH_BY_ID:
      return { ...state, blog: action.payload };
    case DELETE_BY_ID:
      return {
        ...state,
        blogs: state.blog.filter((blog) => blog.id !== action.payload.id),
      };
    default:
      return state;
  }
};
