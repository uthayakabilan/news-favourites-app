import { getLatestNewsAPI, getTopicNewsAPI } from "../api/newsApi.js";

export const getLatestNews = async (req, res) => {
  try {
    const { data } = await getLatestNewsAPI();
    res.status(200).json(data.articles);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getLatestTopicNews = async (req, res) => {
  try {
    const category = req.params.category;
    console.log(category);
    const { data } = await getTopicNewsAPI(category);
    console.log(data);
    res.status(200).json(data.articles);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
