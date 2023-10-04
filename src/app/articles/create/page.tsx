"use client";
import React from 'react';
import CreateArticleForm from '@/components/createArticleForm/createArticleForm'
import 'react-quill/dist/quill.snow.css';
import {ArticleContext} from "@/tools/context/createArticleContext";
import {Card, CardBody} from "@material-tailwind/react";
import CreateArticleStepper from "@/components/stepper/stepper";

const Page = () => {
  const handleNext = (isLast: boolean) => !isLast && setArticleData(({activeStep}) => {
    return {
      ...articleData,
      activeStep: activeStep + 1,
    }
  });
  const handlePrev = (isFirst: boolean) => !isFirst && setArticleData(({activeStep}) => {
    return {
      ...articleData,
      activeStep: activeStep - 1,
    }
  });

  const [articleData, setArticleData] = React.useState({
    activeStep: 0,
    handleNext,
    handlePrev
  });

  return (
    <ArticleContext.Provider value={articleData}>
      <div className="p-6">
        <Card className="flex justify-center w-full shadow-lg h-80">
          <CardBody>
            <CreateArticleForm/>
          </CardBody>
        </Card>
        <CreateArticleStepper/>
      </div>
    </ArticleContext.Provider>

  );
};

export default Page;