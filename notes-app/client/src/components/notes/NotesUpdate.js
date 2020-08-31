import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../common/Header";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import NotifySubmit from "./NotifySubmit";

function NotesUpdate() {
  const [oldData, setOldData] = useState({
    status: "",
    notes: {},
  });
  const [newData, setNewData] = useState({
    status: "",
    notes: [],
    from: "Update",
  });
  const { id } = useParams();
  const API_URL = `http://localhost:5000/api/notes/${id}`;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setOldData({ status: "SUCCESS", notes: res.data }))
      .catch((err) => setOldData({ status: "FAILED", notes: {} }));
  }, []);
  function HandleUpdate(values, { setSubmitting }) {
    axios
      .put(API_URL, values)
      .then((res) => {
        setSubmitting(false);
        setNewData({
          status: "SUCCESS",
          notes: res.data,
          from: "Update",
        });
      })
      .catch((err) => {
        setSubmitting(false);
        setNewData({
          status: "FAILED",
          notes: [],
        });
      });
  }

  return (
    <motion.div initial={{ scale: 3 }} animate={{ scale: 1 }}>
      <Header
        headLeft='UPDATE'
        headRight='NOTE'
        link='/notes'
        linkName='HOME'
        secondLink='LIST'
      />
      <Formik
        enableReinitialize
        initialValues={{
          title: oldData.notes.title,
          notes: oldData.notes.notes,
        }}
        onSubmit={(values, { setSubmitting }) => {
          HandleUpdate(values, { setSubmitting });
        }}>
        <motion.div className='mx-10'>
          <Form className='grid grid-cols-8'>
            <div className='col-span-2' />
            <div className='col-span-4'>
              <div className='grid grid-cols-6 border border-gray-900 rounded-md shadow-md m-2 p-4'>
                <div className='col-span-6 mt-2 mx-2 p-2 '>
                  <NotifySubmit success={newData} />
                  <h1 className='text-white'>Title</h1>
                  <div className='mt-2 flex relative'>
                    <Field
                      name='title'
                      placeholder='Title'
                      className='h-10 text-orange-700 px-5 pr-20 rounded-md text-sm focus:outline-none border border-pink-300 form-input block w-full'
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
                </div>
                <div className='col-span-6 mb-2 mx-2 p-2 mt-2 '>
                  <h1 className='text-white text-label'>Notes</h1>
                  <div className=' mt-2'>
                    <Field
                      name='notes'
                      as='textarea'
                      className='form-textarea w-full text-orange-700 rounded-md px-5 pt-2 pr-10 focus:outline-none border border-pink-300 flex'
                      style={{ background: "#111" }}
                      placeholder='Notes'
                      rows='8'
                      cols='40'></Field>
                  </div>
                </div>
                <div className='col-span-6 flex justify-center mb-5 mt-4'>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}
                    type='submit'
                    className=' focus:outline-none px-4 py-2 text-white  border border-pink-200 rounded-full hover:border-pink-600'>
                    Update
                  </motion.button>
                </div>
              </div>
            </div>
          </Form>
          <div className='col-span-2' />
        </motion.div>
      </Formik>
    </motion.div>
  );
}

export default NotesUpdate;
