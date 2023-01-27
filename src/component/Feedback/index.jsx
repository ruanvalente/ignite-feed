import { useState } from "react";

import "./styles.css";

export function IgniteFeedFeedbackArea() {
  const [feedback, setFeedback] = useState("");
  const [newFeedBack, setNewFeedBack] = useState("");
  const isNewFeedBackEmpty = newFeedBack.length === 0;

  function handleCreateNewComment(event) {
    event.preventDefault();
    setFeedback([...feedback, newFeedBack]);
    setNewFeedBack("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewFeedBack(event.target.value);
  }

  return (
    <form className="feedbacks" onSubmit={handleCreateNewComment}>
      <h4 className="feedback__title">Deixe seu feedback</h4>

      <textarea
        className="feedback__area"
        name="feedback"
        id="feedback"
        placeholder="Escreva o seu comentário...."
        onChange={handleNewCommentChange}
        value={newFeedBack}
      ></textarea>

      <button disabled={isNewFeedBackEmpty} className="feedback__submit">
        Publicar
      </button>
    </form>
  );
}
