const handleSearch = (query, docs, setRes) => {
  let docDict = {};
  docs.forEach((doc) => {
    docDict[doc?.document_id] = doc?.text;
  });
  const req = { query: query, data: docDict };

  fetch("http://localhost:5000/searchall", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((resp) => resp.json())
    .then((data) => {
      setRes(data);
    });
};

export default handleSearch;
