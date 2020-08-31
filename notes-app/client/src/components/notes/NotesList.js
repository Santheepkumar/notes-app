import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Header from "../common/Header";
import { useHistory } from "react-router-dom";

function NotesList() {
  const [Notes, setNotes] = useState({ status: "", notes: [] });
  const history = useHistory();
  const API_URL = "/api/notes";
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setNotes({ status: "SUCCESS", notes: res.data });
      })
      .catch((res) => {
        setNotes({ status: "FAILED", notes: [] });
      });
  }, [removeNote]);

  function removeNote(id) {
    console.log(`${API_URL}/${id}`);
    axios.delete(`${API_URL}/${id}`);
  }
  const { notes = [] } = Notes;
  return (
    <motion.div className='' initial={{ scale: 2 }} animate={{ scale: 1 }}>
      <Header headLeft='NOTES' headRight='LIST' link='/notes' linkName='HOME' />
      {notes.map((note, i) => (
        <motion.div className='mx-10' key={i}>
          <div className='grid grid-cols-8'>
            <div className='col-span-2' />
            <div className='col-span-4'>
              <div className='grid grid-cols-6 border border-gray-900 rounded-md shadow-md m-2 relative'>
                <div
                  className='hidden sm:block sm:col-span-1 mx-4 mt-4 font-bold'
                  style={{ color: "#EA425C" }}>
                  {i + 1} .
                </div>
                <div className='col-span-5 mt-2 mx-2 p-2 '>
                  <h1 className='text-white '>Title</h1>
                  <h1 className='ml-8 text-orange-700 text-base'>
                    {note.title}
                  </h1>
                </div>
                <div className='sm:col-span-1' />
                <div className='col-span-5 mb-2 mx-2 p-2'>
                  <h1 className='text-white text-label'>Notes</h1>
                  <h1 className=' ml-8 text-orange-700 text-sm break-words'>
                    {note.notes}
                  </h1>
                </div>
                <i
                  type='button'
                  className='absolute right-0 p-2 m-2 cursor-pointer rounded-md'>
                  <motion.svg
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0 }}
                    onClick={() => removeNote(note._id)}
                    type='button'
                    viewBox='0 0 20 20'
                    fill='#EA425C'
                    className='trash w-6 h-6'>
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'></path>
                  </motion.svg>
                </i>
                <i
                  type='button'
                  className='absolute right-0  p-2 mr-2 mt-10 cursor-pointer rounded-md'>
                  <motion.svg
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0 }}
                    onClick={() => history.push(`/notes/${note._id}`)}
                    type='button'
                    viewBox='0 0 20 20'
                    fill='#EA425C'
                    class='pencil-alt w-6 h-6'>
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                    <path
                      fill-rule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clip-rule='evenodd'></path>
                  </motion.svg>
                </i>
              </div>
            </div>
          </div>
          <div className='col-span-2' />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default NotesList;
