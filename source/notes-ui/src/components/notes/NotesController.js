import React, { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = "http://localhost:5000/api";
function NotesController() {
  useEffect(() => {
    axios.get(`${apiUrl}/notes`).then((res) => {
      const notes = res.data;
      setData(notes);
    });
  }, []);
  const [data, setData] = useState([]);
  console.log("apiData", data);

  return <div>{data}</div>;
}

export default NotesController;
