import React, { useState } from "react";
import Header from "../common/Header";
import { motion } from "framer-motion";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import NotifySubmit from "./NotifySubmit";

function NotesForm() {
  const [success, setSuccess] = useState({
    status: "",
    notes: {},
  });
  function HandleSubmit(values, { setSubmitting }) {
    const API_URL = "http://localhost:5000/api/notes";
    axios
      .post(API_URL, values)
      .then((res) => {
        console.log("res", res);
        setSubmitting(false);
        setSuccess({
          status: "SUCCESS",
          notes: res.data,
        });
      })
      .catch((error) => {
        setSubmitting(false);
        setSuccess({ status: "FAILED", notes: {} });
      });
  }
  return (
    <div>
      <Header
        headLeft='YOUR'
        headRight='NOTES'
        link='/notes/list'
        linkName='LIST'
      />
      <Formik
        enableReinitialize
        initialValues={{ title: "", notes: "" }}
        onSubmit={(values, { setSubmitting }) => {
          HandleSubmit(values, { setSubmitting });
        }}>
        <Form>
          <motion.div
            className=''
            initial={{ scale: 3 }}
            animate={{ scale: 1 }}>
            <div className='mt-5 xl:border border-gray-700 shadow-lg xl:mx-64 xl:p-10 rounded-full  '>
              <NotifySubmit success={success} />
              {/* After Submission */}
              {/* Form */}
              <div className='mt-5 m-5'>
                <motion.div
                  className='flex justify-center'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}>
                  <div className='relative text-orange-700'>
                    <Field
                      name='title'
                      placeholder='Title'
                      className='h-10 px-5 pr-20 rounded-md text-sm focus:outline-none border border-pink-300'
                      style={{ background: "#111" }}
                    />
                    <div className='absolute right-0 top-0 mt-3 mr-4'>
                      <motion.svg
                        animate={{
                          scale: [1, 2, 2, 1, 1],
                          rotate: [0, 0, 270, 270, 0],
                          borderradius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        transition={{
                          delay: 1,
                          duration: 1,
                          loop: Infinity,
                          repeatDelay: 5,
                        }}
                        width='1em'
                        height='1em'
                        viewBox='0 0 16 16'
                        className='bi bi-pen'
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
                    </div>
                  </div>
                </motion.div>
                <div className='flex justify-center mt-10'>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    className='relative text-orange-700'>
                    <Field
                      name='notes'
                      as='textarea'
                      className='rounded-md px-5 pt-2 pr-10 focus:outline-none border border-pink-300'
                      style={{ background: "#111" }}
                      placeholder='Notes'
                      rows='8'
                      cols='40'
                    />
                    <div className='absolute right-0 top-0 mt-3 mr-4'>
                      <motion.svg
                        width='1.5em'
                        height='1.5em'
                        viewBox='0 0 16 16'
                        className='bi bi-journal-plus'
                        animate={{
                          scale: [1, 2, 2, 1, 1],
                          rotate: [0, 0, 270, 270, 0],
                          borderradius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        transition={{
                          delay: 2,
                          duration: 1,
                          loop: Infinity,
                          repeatDelay: 5,
                        }}
                        fill='#EA425C'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M4 1h5v1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2zm10 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1zM2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z' />
                        <path
                          fillRule='evenodd'
                          d='M13.5 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V1.5a.5.5 0 0 1 .5-.5z'
                        />
                        <path
                          fillRule='evenodd'
                          d='M13 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z'
                        />
                      </motion.svg>
                    </div>
                  </motion.div>
                </div>
                <div className=' flex justify-center mt-10 '>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}
                    type='submit'
                    className='focus:outline-none px-4 py-2 text-white  border border-pink-200 rounded-full hover:border-pink-600'>
                    Submit
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </Form>
      </Formik>
    </div>
  );
}

export default NotesForm;
