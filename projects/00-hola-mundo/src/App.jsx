import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = 
[
  {
    name: 'Miguel Angel Duran',
    userName: 'midudev',
    isFollowing: true
  },
  {
    name: 'Esteban Pelutiero',
    userName: 'peeeluuu',
    isFollowing: false
  },
  {
    name: 'Elon Musk',
    userName: 'elonmusk',
    isFollowing: true
  },
]

function App() {
  return (
    <section className="app">
      {
        users.map(user =>{
          const { name, userName, isFollowing } = user;
          return (
            <TwitterFollowCard 
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  );
}

export default App;
