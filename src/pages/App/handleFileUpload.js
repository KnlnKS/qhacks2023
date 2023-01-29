import { ID } from "appwrite";

import { databases } from "../../config/appwrite";

export default function handleFileUpload(session) {
  return (e, title, setTitle) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      const val = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "")
        .toString("base64");

      const titleVal = title;

      let resp = await fetch("http://localhost:5000/transcription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.providerAccessToken}`,
        },
        body: JSON.stringify({ b64: val, title: titleVal }),
      });
      const data = await resp.json();

      resp = await databases.createDocument(
        "63d5c4c702e04b3042a8",
        "63d5e58db550c87c6e57",
        ID.unique(),
        data
      );

      setTitle("");
    };
    reader.readAsDataURL(file);
  };
}
