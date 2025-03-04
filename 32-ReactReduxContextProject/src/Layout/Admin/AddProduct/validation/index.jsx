import * as Yup from "yup";

export const productsValidationSchema = Yup.object({
  name: Yup.string().min(4, "Must be at least 4 characters or more").required(),
  description: Yup.string()
    .min(10, "Must be at least 10 characters or more")
    .required(),
  price: Yup.number().positive().required(),
  discount: Yup.number()
    .min(0, "Discount must be at least 0%")
    .max(100, "Discount cannot exceed 100%")
    .required(),
  category: Yup.string().required(),
  image: Yup.string().url().required(),
});
