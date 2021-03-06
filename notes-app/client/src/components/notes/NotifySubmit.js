import React from "react";
import { motion } from "framer-motion";

function NotifySubmit(props) {
  const { success } = props;
  return (
    <div>
      {success.status === "SUCCESS" ? (
        <div className='flex justify-center pb-4 font-bold'>
          <motion.svg
            initial={{ scale: 10 }}
            animate={{ scale: 1 }}
            width='1.5em'
            height='1.5em'
            viewBox='0 0 16 16'
            className='bi bi-pen mt-2 mr-1'
            fill='#EA425C'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M5.707 13.707a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391L10.086 2.5a2 2 0 0 1 2.828 0l.586.586a2 2 0 0 1 0 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L5 13l-3 1 1-3z'
            />
            <path
              fillRule='evenodd'
              d='M9.854 2.56a.5.5 0 0 0-.708 0L5.854 5.855a.5.5 0 0 1-.708-.708L8.44 1.854a1.5 1.5 0 0 1 2.122 0l.293.292a.5.5 0 0 1-.707.708l-.293-.293z'
            />
            <path d='M13.293 1.207a1 1 0 0 1 1.414 0l.03.03a1 1 0 0 1 .03 1.383L13.5 4 12 2.5l1.293-1.293z' />
          </motion.svg>

          <motion.div
            className='text-xl mt-1'
            style={{ color: "#EA425C" }}
            initial={{ scale: 10 }}
            animate={{ scale: 1 }}>
            {success.notes.title + " - "}{" "}
            {success.from === "Update" ? "Updated" : "Added"}
          </motion.div>
        </div>
      ) : success.status === "FAILED" ? (
        <motion.div
          className='flex justify-center pb-4 text-xl font-bold mt-1'
          style={{ color: "#EA425C" }}
          initial={{ scale: 10 }}
          animate={{ scale: 1 }}>
          Cannot Add Note
        </motion.div>
      ) : null}
    </div>
  );
}

export default NotifySubmit;
