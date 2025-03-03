import * as Yup from "yup";

export const watchesValidationSchema = Yup.object({
 brand:Yup.string().required(),
 model:Yup.string().required(),
 price:Yup.number().required().positive(),
 description:Yup.string().required().min(10),
 image: Yup.string().url().required()
})
 


export default watchesValidationSchema