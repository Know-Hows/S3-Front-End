import React, { useState, useEffect } from "react";
import { UpdateLikes, GetLikes } from "../services/ArticleService";

const LikesComponent = ({ articleId }) => {
  const [likeScore, setLikeScore] = useState("Loading...");

  useEffect(() => {
    GetLikes(articleId)
      .then((likesFromApi) => setLikeScore(likesFromApi))
      .catch((error) => console.error(error));
  }, [articleId]);

  const handleLikeClick = () => {
    UpdateLikes(articleId, true);
  };

  const handleDislikeClick = () => {
    UpdateLikes(articleId, false);
  };

  return (
    <div>
      <button onClick={handleLikeClick}>Like</button>
      <button onClick={handleDislikeClick}>Dislike</button>
      <div>
        Likes: {likeScore}
      </div>
    </div>
  );
};

export default LikesComponent;