import * as Yup from 'yup';
export const ValidationSchema = Yup.object({
  name : Yup.string().required('Name Required').min(2,'atleast 2 charecters required'),
  last: Yup.string().required('last name is required').min(2,'atleast 2 charecters required'),
  email: Yup.string().email('invalid email').required('email is required')
});