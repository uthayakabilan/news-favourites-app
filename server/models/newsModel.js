import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    published_date: String,
    published_date_precision: String,
    link: String,
    clean_url: String,
    excerpt: String,
    summary: String,
    rights: String,
    rank: Number,
    topic: String,
    country: String,
    language: String,
    authors: String,
    media: String,
    is_opinion: Boolean,
    twitter_account: String,
    _score: Number,
    _id: String,
  },
  { timeseries: true }
);

const News = mongoose.model("news", newsSchema);
export default News;
