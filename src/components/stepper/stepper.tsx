import React, {useEffect, useState} from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  BookmarkIcon,
  Bars4Icon,
  KeyIcon
} from "@heroicons/react/24/outline";
import {useArticleContext} from "@/tools/context/createArticleContext";

const CreateArticleStepper = () => {
  let articleData= useArticleContext();
  const [isFirst, setIsFirst] = useState(false);
  const [isLast, setIsLast] = useState(false);

  return (
    <div className="w-full px-24 py-4">
      <Stepper
        activeStep={articleData.activeStep}
        isLastStep={(value) => setIsLast(value)}
        isFirstStep={(value) => setIsFirst(value)}
      >
        <Step onClick={() => articleData.activeStep = 0}>
          <BookmarkIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={articleData.activeStep === 0 ? "blue-gray" : "gray"}
            >
              Title of the article
            </Typography>
          </div>
        </Step>
        <Step onClick={() => articleData.activeStep = 1}>
          <Bars4Icon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={articleData.activeStep === 1 ? "blue-gray" : "gray"}
            >
              Content of the article
            </Typography>
          </div>
        </Step>
        <Step onClick={() => articleData.activeStep = 2}>
          <KeyIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={articleData.activeStep === 2 ? "blue-gray" : "gray"}
            >
              Submission
            </Typography>
          </div>
        </Step>
      </Stepper>
      <div className="mt-32 flex justify-between">
        <Button onClick={() => articleData.handlePrev(isFirst)} disabled={isFirst}>
          Prev
        </Button>
        <Button onClick={() => articleData.handleNext(isLast)} disabled={isLast}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default CreateArticleStepper;