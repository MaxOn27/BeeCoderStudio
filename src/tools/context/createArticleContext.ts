import {createContext, useContext} from 'react';

export const ArticleContext = createContext<ArticleTypes>({
  activeStep: 0,
  handleNext: () => {},
  handlePrev: () => {},
});

export const useArticleContext = () => {
  return useContext(ArticleContext)
};

