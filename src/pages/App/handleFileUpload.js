export default function handleFileUpload(session) {
  return (e, title) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      const val = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "")
        .toString("base64");

        const titleVal = title;

      await fetch("http://localhost:5000/transcription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.providerAccessToken}`,
        },
        body: JSON.stringify({ b64: val, title: titleVal}),
      });

      window.reload();
    };
    reader.readAsDataURL(file);
  };
}
