import { account } from "../../config/appwrite";

const loginWithGoogle = () => {
  account.createOAuth2Session(
    "google",
    "http://localhost:5173/app",
    "http://localhost:5173/",
    [
      "https://www.googleapis.com/auth/documents",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ]
  );
};

export default loginWithGoogle;
