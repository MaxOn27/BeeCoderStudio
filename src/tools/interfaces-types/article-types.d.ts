type ArticleTypes = {
  activeStep: number;
  handleNext: (isLast: boolean) => void;
  handlePrev: (isFirst: boolean) => void;
}