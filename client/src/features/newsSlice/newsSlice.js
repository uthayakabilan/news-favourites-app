import { createSlice } from "@reduxjs/toolkit";
import * as API from "../../api/newsApi.js";

const initialState = {
  error: {
    state: false,
    message: "",
  },
  data: [],
  loading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsStart: (state) => {
      state.loading = true;
      state.error = {
        state: false,
        message: "",
      };
      state.data = [];
    },
    newsSuccess: (state, action) => {
      state.loading = false;
      state.error = {
        state: false,
        message: "",
      };
      state.data = action.payload;
    },
    newsError: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const getLatestNews = () => async (dispatch) => {
  dispatch(newsStart());
  try {
    const { data } = await API.latestNews();
    dispatch(newsSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(newsError({ state: true, message: error }));
  }
};

export const getTopicNews = (category) => async (dispatch) => {
  dispatch(newsStart());
  try {
    const { data } = await API.getNews(category);
    dispatch(newsSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(newsError({ state: true, message: error }));
  }
};

export const getSavedNews = (userId) => async (dispatch) => {
  dispatch(newsStart());
  try {
    console.log({ userId });
    const { data } = await API.getSavedNews(userId);
    if (data.message === "No saved news") {
      dispatch(newsSuccess([]));
    } else {
      dispatch(newsSuccess(data));
    }
  } catch (error) {
    console.log(error);
    dispatch(newsError({ state: true, message: error }));
  }
};

export const { newsError, newsStart, newsSuccess } = newsSlice.actions;
export default newsSlice.reducer;
