import IgniteFeed from "../../assets/ignite-feed-logo.svg";

import "./styles.css";

export function IgniteFeedHeader() {
  return (
    <header className="header">
      <img src={IgniteFeed} alt="Ignite Feed Logo" />
    </header>
  );
}
