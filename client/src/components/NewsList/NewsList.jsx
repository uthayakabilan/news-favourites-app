import React, { useEffect } from "react";
import "./NewsList.css";
// import { newsData } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
// import { getLatestNews } from "../../features/newsSlice/newsSlice";
import { useParams } from "react-router-dom";
import {
  getLatestNews,
  getSavedNews,
  getTopicNews,
} from "../../features/newsSlice/newsSlice";
import NoNews from "../NoNews/NoNews";
const NewsList = () => {
  const params = useParams();
  const newsData = useSelector((state) => state.news.data);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (params.category === "latest") {
      //latest api
      dispatch(getLatestNews());
    } else if (params.category === "saved") {
      //saved api
      dispatch(getSavedNews(user._id));
    } else {
      dispatch(getTopicNews(params.category));
    }
    console.log(params.category);
  }, [params, dispatch, user]);
  return (
    <div className="news-contianer">
      {newsData.length <= 0 ? (
        <NoNews />
      ) : (
        newsData.map((item, index) => {
          return (
            <div className="news-contents" key={index}>
              <div className="news-inner-contents">
                <div className="news-image">
                  <img src={item.media} alt="news" />
                </div>
                <div className="news-details">
                  <h3>{item.title}</h3>
                  <p>{item.author}</p>
                  <p>{item.published_date}</p>
                  <p className="news-summary">{item.summary}</p>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Read more ...
                  </a>
                  <button>Save</button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default NewsList;
