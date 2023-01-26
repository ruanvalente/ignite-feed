import { useState } from "react";

import { Trash, ThumbsUp } from "phosphor-react";

import "./styles.css";

export function IgniteFeedComments() {
  const [quantityLike, setQuantityLike] = useState(0);

  function handleCommentLike() {
    setQuantityLike((prevQuantityLike) => (prevQuantityLike += 1));
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

          <div className="comment">Muito bom, parabéns 👏🏼👏🏼</div>
        </div>
      </div>
      <button
        onClick={handleCommentLike}
        className={`comment__like ${
          quantityLike >= 1 ? "comment__like--applause" : ""
        }`}
      >
        <ThumbsUp size={24} /> Aplaudir <span>{quantityLike || null}</span>
      </button>
    </section>
  );
}
