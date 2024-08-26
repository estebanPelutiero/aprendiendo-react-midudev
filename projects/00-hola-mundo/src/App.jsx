import './App.css'

function App() {
  return (
    <article className="tw-followCard">

      <header className="tw-followCard-header">

        <img className="tw-followCard-avatar"
          src="https://www.fakepersongenerator.com/Face/male/male1084976386353.jpg"
          alt="Bruce M Brown"
        />

        <div className="tw-followCard-info">
          <strong>Bruce M Brown</strong>
          <span>@salvatore.1982</span>
        </div>

      </header>

      <aside className="tw-followCard-button">
        <button>Seguir</button>
      </aside>
      
    </article>
  );
}

export default App;
