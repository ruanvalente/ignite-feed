import { useEffect, useId } from "react";
import { IgniteFeedComments } from "../Comments";
import { IgniteFeedFeedbackArea } from "../Feedback";
import { IgniteFeedTags } from "../Tags";

import "./styles.css";

export function IgniteFeedPost() {
  const commentList = [
    {
      id: useId(),
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, illo placeat? Labore autem officiis quibusdam soluta neque reiciendis quaerat facere, nemo nisi ipsam sunt dolor, est explicabo tempore cupiditate tenetur.",
      like: 0,
    },
    {
      id: useId(),
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse nam impedit, deserunt quasi velit harum nobis provident repellendus molestiae officiis voluptas accusantium ut sequi tenetur tempore modi? Numquam, est?",
      like: 2,
    },
    {
      id: useId(),
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, modi praesentium nisi vitae totam ipsum voluptatibus deserunt beatae nemo, cumque reprehenderit suscipit ducimus, vel corporis dolore quidem quis consequuntur distinctio?",
      like: 3,
    },
  ];
  return (
    <>
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
              Acabei de subir mais um projeto no meu portifa. É um projeto que
              fiz no NLW Return, evento da Rocketseat.
            </p>
            <p className="post__content">O nome do projeto é DoctorCare 🚀</p>
          </div>
          <div className="post__content--link">
            <p className="post__content">
              <strong>👉 jane.design/doctorcare</strong>
            </p>
          </div>
          <div className="post__content--line" />
          <IgniteFeedTags />
          <IgniteFeedFeedbackArea />
        </div>
      </section>

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
              Acabei de subir mais um projeto no meu portifa. É um projeto que
              fiz no NLW Return, evento da Rocketseat.
            </p>
            <p className="post__content">O nome do projeto é DoctorCare 🚀</p>
          </div>
          <div className="post__content--link">
            <p className="post__content">
              <strong>👉 jane.design/doctorcare</strong>
            </p>
          </div>
          <div className="post__content--line" />
          <IgniteFeedTags />
          <IgniteFeedFeedbackArea />

          {commentList.map(({ comment, id }) => (
            <IgniteFeedComments key={id} comment={comment} />
          ))}
        </div>
      </section>
    </>
  );
}
