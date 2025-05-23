import * as Yup from 'yup';

export const validationSchema = Yup.object({
  F_name: Yup.string().required("First name is required"),
  L_name: Yup.string().required("Last name is requird"),
  email: Yup.string().email("invalid email").required("Email is required"),
  cnic: Yup.string()
    .matches(/^[0-9]{13}$/, "CNIC must be 13 digits")
    .required("CNIC is required"),
  father: Yup.string().required("Father name is required"),
  F_cnic: Yup.string()
    .matches(/^[0-9]{13}$/, "Father CNIC must be 13 digit")
    .required("Father CNIC is required"),
  occupation: Yup.string().required("Occupation is required"),
  income: Yup.number()
    .typeError("Income just number only")
    .required("Income is required"),
  gender: Yup.string().required("Select Gender"),
  relegion: Yup.string().required("Select Relegion"),
  blood: Yup.string().required("Blood group is required"),
  birth: Yup.date()
    .typeError("Date of birth is not correct")
    .required("Date of birth is required"),
  contact: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact must be 11 digits")
    .required("Contact number is required"),
  nation: Yup.string().required("Nationality is required"),
  district: Yup.string().required("District is required"),
  married: Yup.string().required("Marital status is required"),
  adress: Yup.string().required("Address is required"),
  education: Yup.string().required("Nationality is required"),
  study:Yup.string().required('field is requied'),
  institute:Yup.string().required(),
  start: Yup.date().typeError("Date is not correct").required("Starting date is required"),
  end: Yup.date().typeError("Date is not correct").required("Last date is required"),
  marks:Yup.string().required('Marks Field required'),
  roll:Yup.string().required('Roll Number is required'),
  modeOfStudy:Yup.string().required('required'),
  job:Yup.string().required(),
  company:Yup.string().required(),
  experien:Yup.string().required(),
  altercontect:Yup.string().required(),
  CurrentSallery:Yup.string().required(),
  expectSallery:Yup.string().required(),
});
