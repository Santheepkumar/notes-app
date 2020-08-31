import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className=''>
      <div className='flex justify-around'>
        <motion.div className='flex p-4 justify-center'>
          <motion.h1
            className='text-3xl font-semibold font text-white mr-3'
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            {props.headLeft}
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
              className='bi bi-heart-fill '
              fill='#EA425C'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
              />
            </svg>
          </motion.div>
          <motion.h1
            className='text-3xl font-semibold font text-white'
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            {props.headRight}
          </motion.h1>
        </motion.div>
      </div>
      <motion.div
        className='border-b border-pink-500'
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: "0.5" }}
      />

      <div className='flex justify-center'>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
          <Link
            to={props.link}
            className='cursor-pointer p-2 text-2xl underline flex justify-center font-semibold mr-3 text-white'>
            {props.linkName}
          </Link>
        </motion.div>
        <motion.div
          className='flex justify-center'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}>
          <Link
            to='/notes/list'
            className='cursor-pointer p-2 text-2xl underline flex justify-center font-semibold mr-3 text-white'>
            {props.secondLink}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
