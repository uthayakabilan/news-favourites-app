import News from "../models/newsModel.js";

export const addNews = async (req, res) => {
  try {
    const { newsData, userId } = req.body;
    if (newsData && userId) {
      const { _id, ...news } = newsData;
      news.newsId = _id;
      const oldNews = await News.findOne({ newsId: _id });
      if (oldNews) {
        if (oldNews.savedBy.includes(userId)) {
          res.status(200).json({
            message: `User ${userId} already saved the news ${_id}`,
          });
        } else {
          oldNews.savedBy.push(userId);
          await oldNews.save();
          res.status(200).json({
            message: `${userId} added to the news ${_id}`,
          });
        }
      } else {
        news.savedBy = [userId];
        await News.create(news);
        res.status(200).json({
          message: `${userId} added to the news ${_id}`,
        });
      }
    } else {
      res.status(400).json({
        message: "Invalid credetials",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const removeNews = async (req, res) => {
  try {
    const { userId, newsData } = req.body;
    if (userId && newsData && newsData.newsId) {
      const oldNews = await News.findOne({ newsId: newsData.newsId });
      if (oldNews) {
        if (oldNews.savedBy.includes(userId)) {
          oldNews.savedBy.pull(userId);
          oldNews.save();
          res
            .status(200)
            .json({ message: `${userId} removed from news ${oldNews.newsId}` });
        } else {
          res.status(200).json({
            message: `${userId} not found in news ${oldNews.newsId}`,
          });
        }
      } else {
        res.status(400).json({
          message: "No news found",
        });
      }
    } else {
      res.status(400).json({
        message: "Invalid credetials",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getUserNews = async (req, res) => {
  try {
    // const { userId } = req.body;
    // const { userId } = req.query.userId;
    // console.log(req.body);
    // console.log(userId);
    const userId = req.params.userId;
    // const userId = req.session.user._id;
    if (userId) {
      const newsData = await News.find({ savedBy: { $all: [userId] } });
      if (newsData.length > 0) {
        res.status(200).json(newsData);
      } else {
        res.status(200).json({
          message: "No saved news",
        });
      }
    } else {
      res.status(400).json({
        message: "Invalid credetials",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
