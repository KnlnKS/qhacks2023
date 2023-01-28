import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1>QHacks '23</h1>
      <div className="card">
        <button onClick={() => console.log("Hello, world!")}>Login</button>
      </div>
    </div>
  );
}

export default Home;
