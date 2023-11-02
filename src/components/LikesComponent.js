import React from "react";
import { UpdateLikes } from "../services/ArticleService";

const LikesComponent = ({ articleId }) => {
  const handleLikeClick = () => {
    console.log("Like Component")
    UpdateLikes(articleId, true);
  };

  const handleDislikeClick = () => {
    console.log("Dislike Component")
    UpdateLikes(articleId, false);
  };

  return (
    <div>
      <button onClick={handleLikeClick}>Like</button>
      <button onClick={handleDislikeClick}>Dislike</button>
    </div>
  );
};

export default LikesComponent;
