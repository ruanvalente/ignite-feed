import "./styles.css";

export function IgniteFeedFormContent() {
  return (
    <div className="post">
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
    </div>
  );
}
