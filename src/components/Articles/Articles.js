import React from "react";
import { Card } from "react-bootstrap";
import Stats from "../../common/components/Stats";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Tags from "../../common/components/Tags";

const Articles = ({ articles }) => {
  const articlesHistory = useHistory();

  const navigateToArticle = (article) => {
    articlesHistory.push(`/article/${article.id}`);
  };

  return (
    <div>
      {!articles.length && (
        <div className="text-center mt-30">
          <Spinner animation="border" variant="primary" />
          <div>Loading...</div>
        </div>
      )}
      {articles &&
        articles.length > 0 &&
        articles.map((article, idx) => {
          return (
            <Card className="center-box" key={idx}>
              <Card.Body className="mb-4">
                <Card.Subtitle className="mb-2">
                  <img
                    src={
                      article.cover_image
                        ? article.cover_image
                        : article.social_image
                    }
                    alt=""
                    className="articles-img"
                  />
                </Card.Subtitle>
                <Tags tagList={article.tag_list} />
                <Card.Title
                  onClick={() => navigateToArticle(article)}
                  role="button"
                >
                  {article.title}
                </Card.Title>
                <div className="align-icons justify-content-center d-flex mb-2">
                  <Stats article={article} />
                </div>
                <Card.Text>{article.description}</Card.Text>
                <div className="article-details-nav-btn">
                  <span
                    className="mt-2 mb-3 p-1 mr-2"
                    variant="contained"
                    onClick={() => navigateToArticle(article)}
                  >
                    READ MORE {">"}
                  </span>
                </div>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};

export default Articles;
