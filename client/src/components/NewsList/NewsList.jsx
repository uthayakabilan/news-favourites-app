import React, { useEffect } from "react";
import "./NewsList.css";
// import { newsData } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { getLatestNews } from "../../features/newsSlice/newsSlice";
const NewsList = () => {
  const newsData = useSelector((state) => state.news.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLatestNews());
  }, []);
  return (
    <div className="news-contianer">
      {newsData.map((item, index) => {
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
