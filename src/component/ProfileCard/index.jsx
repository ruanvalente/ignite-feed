import { PencilSimpleLine } from "phosphor-react";

import BackgroundProfile from "../../assets/background-profile.svg";

import "./styles.css";

export function IgniteFeedProfileCard() {
  return (
    <div className="profile">
      <div className="profile__cover">
        <img src={BackgroundProfile} alt="User profile background image" />
      </div>
      <div className="profile__cover--user">
        <img
          src="https://avatars.githubusercontent.com/u/6674232?v=4"
          alt="User Profile"
        />
      </div>
      <div className="profile__information">
        <h4 className="profile__information--name">Ruan Valente</h4>
        <p className="profile__information--description">
          Desenvolvedor FrontEnd
        </p>
        <div className="profile__line" />

        <button className="profile__button outlined">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </button>
      </div>
    </div>
  );
}
