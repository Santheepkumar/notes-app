import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Header from "../common/Header";

function NotesList() {
  const [Notes, setNotes] = useState({ status: "", notes: [] });
  useEffect(() => {
    const API_URL = "http://localhost:5000/api/notes";
    axios
      .get(API_URL)
      .then((res) => {
        setNotes({ status: "SUCCESS", notes: res.data });
      })
      .catch((res) => {
        setNotes({ status: "FAILED", notes: [] });
      });
  }, []);
  const { notes = [] } = Notes;
  return (
    <motion.div className='mt-4' initial={{ scale: 2 }} animate={{ scale: 1 }}>
      <Header headLeft='NOTES' headRight='LIST' link='/notes' linkName='HOME' />
      {notes.map((note, i) => (
        <div className='mx-10'>
          <div className='grid grid-cols-8'>
            <div className='col-span-2' />
            <div className='col-span-4'>
              <div className='grid grid-cols-6 border border-gray-900 rounded-md shadow-md m-2'>
                <div
                  className='col-span-1 mx-4 mt-4 font-bold'
                  style={{ color: "#EA425C" }}>
                  {i + 1} .
                </div>
                <div className='col-span-5 mt-2 mx-2 p-2 '>
                  <h1 className='text-white '>Title</h1>
                  <h1 className='ml-8 text-orange-700 text-base'>
                    {note.title}
                  </h1>
                </div>
                <div className='col-span-1' />
                <div className='col-span-5 mb-2 mx-2 p-2'>
                  <h1 className='text-white text-label'>Notes</h1>
                  <h1 className=' ml-8 text-orange-700 text-sm break-words'>
                    {note.notes}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2' />
        </div>
      ))}
    </motion.div>
  );
}

export default NotesList;
