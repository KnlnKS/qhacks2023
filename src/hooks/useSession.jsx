import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import { account } from "../config/appwrite";

export default function useSession() {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await account.getSession("current");
        setSession(data);
      } catch (e) {
        navigate("/");
      }
    })();
  }, []);

  return session;
}
