export default function handleFileUpload(e) {
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
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: val,
    });

    window.reload();
  };
  reader.readAsDataURL(file);
}
