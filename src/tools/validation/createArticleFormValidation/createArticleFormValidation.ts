import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required!"),
  content: Yup.string().required("No content. Content must be included!")
});