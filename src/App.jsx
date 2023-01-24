import { IgniteFeedContainer } from "./component/Container";
import { IgniteFeedHeader } from "./component/Header";
import { IgniteFeedProfileCard } from "./component/ProfileCard";

function App() {
  return (
    <>
      <main>
        <IgniteFeedHeader />
        <IgniteFeedContainer>
          <IgniteFeedProfileCard />
        </IgniteFeedContainer>
      </main>
    </>
  );
}

export default App;
