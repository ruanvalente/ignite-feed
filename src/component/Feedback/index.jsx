import "./styles.css";

export function IgniteFeedFeedbackArea() {
  return (
    <section className="feedbacks">
      <h4 className="feedback__title">Deixe seu feedback</h4>

      <textarea
        className="feedback__area"
        name="feedback"
        id="feedback"
        placeholder="Escreva o seu comentário...."
      ></textarea>

      <button className="feedback__submit">Publicar</button>
    </section>
  );
}
