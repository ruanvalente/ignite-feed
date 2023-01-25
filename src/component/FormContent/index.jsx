import "./styles.css";

export function IgniteFeedFormContent() {
  return (
    <section className="post">
      <div className="post__profile">
        <img
          className="post__profile--image"
          src="https://avatars.githubusercontent.com/u/6674232?v=4"
          alt="User profile image"
        />
        <div className="post__profile--user-information">
          <h4>Ruan Valente</h4>
          <p>Dev Frontend</p>
        </div>
        <p className="post__hour_information">Públicado há 1h</p>
      </div>

      <div className="post__content-container">
        <p className="post__content">
          Fala galeraa 👋 <br />
        </p>
        <div className="post__content--user">
          <p className="post__content">
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat.
          </p>
          <p className="post__content">O nome do projeto é DoctorCare 🚀</p>
        </div>
        <div className="post__content--link">
          <p className="post__content">
            <strong>👉 jane.design/doctorcare</strong>
          </p>
        </div>
        <div className="post__tags">
          <span className="post__content--tag"> #novoprojeto</span>
          <span className="post__content--tag">#nlw</span>
          <span className="post__content--tag">#rocketseat</span>
        </div>
      </div>

      <div className="post__content--line" />

      <section className="feedbacks">
        <h4 className="feedback__title">Deixe seu feedback</h4>

        <textarea className="feedback__area" name="feedback" id="feedback">
          Nossa, adorei amigo! Parabéns !
        </textarea>

        <button className="feedback__submit">Publicar</button>
      </section>
    </section>
  );
}
