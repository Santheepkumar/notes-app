import React, { useState, useEffect } from "react";
import axios from "axios";
function NotesController() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`/api/notes`).then((res) => {
      const notes = res.data;
      setData(notes);
    });
  }, []);
  console.log("apiData", data);

  return <div>{data}</div>;
}

export default NotesController;
