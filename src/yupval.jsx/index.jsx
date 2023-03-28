import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Plesee enter your name"),
  email: Yup.string().email().required("Plesee enter your Email"),
  password: Yup.string().required('Password is required'),
 confirm_password: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
