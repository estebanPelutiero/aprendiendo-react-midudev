import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  return (
    <section className="app">
      <TwitterFollowCard
        userName="midudev"
        isFollowing
      >
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard
        userName="peeeluuu"
        isFollowing={false}
      >
        Esteban Pelutiero
      </TwitterFollowCard>
    </section>
  );
}

export default App;
