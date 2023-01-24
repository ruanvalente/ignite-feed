import { IgniteFeedContainer } from "./component/Container";
import { IgniteFeedFormContent } from "./component/FormContent";
import { IgniteFeedHeader } from "./component/Header";
import { IgniteFeedProfileCard } from "./component/ProfileCard";

function App() {
  return (
    <>
      <main>
        <IgniteFeedHeader />
        <IgniteFeedContainer>
          <IgniteFeedProfileCard />
          <IgniteFeedFormContent />
        </IgniteFeedContainer>
      </main>
    </>
  );
}

export default App;
