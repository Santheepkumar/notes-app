import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className='bg-white-800 '>
      <motion.div className='flex p-4 justify-center'>
        <motion.h1
          className='text-3xl font-semibold font text-white mr-3'
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          YOUR
        </motion.h1>
        <motion.div
          className='mr-3'
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <svg
            width='3em'
            height='3em'
            viewBox='0 0 16 16'
            class='bi bi-heart-fill '
            fill='#EA425C'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
            />
          </svg>
        </motion.div>
        <motion.h1
          className='text-3xl font-semibold font text-white'
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          NOTES
        </motion.h1>
      </motion.div>
      <motion.div
        className='border-b border-pink-500'
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: "0.5" }}
      />
    </div>
  );
}

export default Header;
