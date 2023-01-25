import { IgniteFeedContainer } from "./component/Container";
import { IgniteFeedHeader } from "./component/Header";
import { IgniteFeedPost } from "./component/Post";
import { IgniteFeedProfileCard } from "./component/ProfileCard";

function App() {
  return (
    <>
      <main>
        <IgniteFeedHeader />
        <IgniteFeedContainer>
          <IgniteFeedProfileCard />
          <IgniteFeedPost />
        </IgniteFeedContainer>
      </main>
    </>
  );
}

export default App;
