import { useEffect, useState } from "react";

import { Trash, ThumbsUp } from "phosphor-react";

import "./styles.css";

export function IgniteFeedComments({ comment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeCount() {
    setLikeCount((prevLikeCount) => (prevLikeCount += 1));
  }

  return (
    <section className="comments">
      <div className="comment__user">
        <img
          className="comment__user--image"
          src="https://avatars.githubusercontent.com/u/6674232?v=4"
          alt="User profile image"
        />
        <div className="comment__user--box">
          <div className="comment__user--name">
            <h4>
              Ruan Valente{" "}
              <span className="comment__user--you">{"(Você)"}</span>
            </h4>
            <Trash size={24} />
          </div>
          <p className="comment__user--time">Cerca de 2h</p>

          <div className="comment">{comment}</div>
        </div>
      </div>
      <button
        onClick={handleLikeCount}
        className={`comment__like ${
          likeCount >= 1 ? "comment__like--applause" : ""
        }`}
      >
        <ThumbsUp size={24} /> Aplaudir <span>{likeCount || null}</span>
      </button>
    </section>
  );
}
