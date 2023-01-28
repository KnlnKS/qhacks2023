import { useEffect } from "react";
import { account } from "../../config/appwrite";


function App() {
  useEffect(() => {
    (async () => {
      const session = await account.getSession("current");
      console.log(session?.providerAccessToken);
    })();
  }, []);

  return (
    <div className="App">
      <h1>QHacks '23</h1>
      <div className="card">
        <button onClick={() => console.log("Hello, world!")}>Login</button>
      </div>
    </div>
  );
}

export default App;
