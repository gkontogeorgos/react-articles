import React, { useState, useEffect, useContext } from "react";
import Articles from "../Articles/Articles";
import PopularArticles from "../PopularArticles/PopularArticles";
import RandomArticle from "../RandomArticle/RandomArticle";
import axios from "axios";
import { endpoints } from "../../endpoints/endpoints";

const Home = () => {
  const [articles, setArticlesData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  const fetchArticles = async () => {
    axios
      .get(endpoints.getArticles)
      .then((response) => {
        setArticlesData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(true);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      {!isLoading && <Articles articles={articles} />}
      <PopularArticles articles={articles} />
      <RandomArticle articles={articles} />
    </>
  );
};

export default Home;
