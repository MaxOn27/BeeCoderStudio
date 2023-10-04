import dynamic from 'next/dynamic';
import React, {Fragment} from 'react';
import {useFormik} from "formik";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

import {
  validationSchema
} from "@/tools/validation/createArticleFormValidation/createArticleFormValidation";
import {modules, formats} from "@/tools/quill/configurations";
import CreateArticleStepper from "@/components/stepper/stepper";
import {useArticleContext} from "@/tools/context/createArticleContext";
import LoadingSpinner from '../spinner/spinner';
import './createArticleForm.css';

const ReactQuill =
  dynamic(() => import("react-quill"), {
    ssr: false,
    loading: () => <LoadingSpinner/>
  });

const CreateArticleForm = () => {
  const {activeStep} = useArticleContext();

  const createArticleFormik = useFormik({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema,
    onSubmit: (values, {resetForm}) => {
      resetForm({
        values: {
          title: '',
          content: ''
        }
      })
    },
  });

  return (
    <Fragment>
      <form className="flex justify-center items-center m-6" onSubmit={createArticleFormik.handleSubmit}>
        {
          activeStep === 1
            ?
            createArticleFormik.touched.content && createArticleFormik.errors.content ? (
                <div className="w-4/6 block text-sm font-medium text-gray-900 dark:text-white">
                  <ReactQuill
                    id="text-editor"
                    modules={modules}
                    placeholder="Content of the article"
                    formats={formats}
                    theme="snow"
                    value={createArticleFormik.values.content}
                    onChange={(event: string) => createArticleFormik.setFieldValue("content", event)}
                  />
                  <div className="text-red-500 w-4/6">
                    {createArticleFormik.errors.content}
                  </div>
                </div>
              ) :
              (
                <ReactQuill
                  id="text-editor"
                  className="w-4/6 my-6"
                  modules={modules}
                  placeholder="Content of the article"
                  formats={formats}
                  theme="snow"
                  value={createArticleFormik.values.content}
                  onChange={(event: string) => createArticleFormik.setFieldValue("content", event)}
                />
              )

            : activeStep === 2
              ? <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-6">
                Submit
              </button>
              : <label htmlFor="articleheader"
                       className="w-4/6 block text-sm font-medium text-gray-900 dark:text-white my-6">
                {createArticleFormik.touched.title && createArticleFormik.errors.title ?
                  <Fragment>
                    <input
                      id="articleheader"
                      name="articleheader"
                      type="text"
                      placeholder="Title of the article"
                      value={createArticleFormik.values.title}
                      onChange={createArticleFormik.handleChange('title')}
                      className="block w-full p-4 text-gray-900 border border-red-500 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="text-red-500">
                      {createArticleFormik.errors.title}
                    </div>
                  </Fragment>
                  :
                  <input
                    id="articleheader"
                    name="articleheader"
                    type="text"
                    placeholder="Title of the article"
                    value={createArticleFormik.values.title}
                    onChange={createArticleFormik.handleChange('title')}
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  />
                }
              </label>
        }
      </form>
    </Fragment>
  );
};

export default CreateArticleForm;