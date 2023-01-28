import { account } from "../../config/appwrite";

import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1>QHacks '23</h1>
      <div className="card">
        <button
          onClick={() =>
            account.createOAuth2Session(
              "google",
              "http://localhost:5173/app",
              "http://localhost:5173/",
              [
                "https://www.googleapis.com/auth/documents",
                "https://www.googleapis.com/auth/userinfo.email",
                "https://www.googleapis.com/auth/userinfo.profile",
              ]
            )
          }
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
