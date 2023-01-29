export default function handleFileUpload(session) {
  return (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const val = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "")
        .toString("base64");

      await fetch("http://localhost:5000/transcription", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
          Authorization: `Bearer ${session?.providerAccessToken}`,
        },
        body: val,
      });

      window.reload();
    };
    reader.readAsDataURL(file);
  };
}
