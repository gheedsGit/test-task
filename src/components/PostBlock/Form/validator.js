import * as Yup from "yup";

const SUPPORED_FORMATS = ["image/jpg", "image/jpeg"];

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .required("Required")
    .matches(/^([\+]{0,1}380([0-9]{9})$)/, "Phone number is not valid"),
  position_id: Yup.string().required("Choose any position"),
  photo: Yup.mixed()
    .nullable()
    .required("Please upload photo")
    .test(
      "FILE_SIZE",
      "Only 70*70px supported",
      (value) => !value || (value && value.size <= 70 * 70)
    )
    .test(
      "FILE_FORMAT",
      "Upload should contain jpg or jpeg format file",
      (value) => !value || (value && SUPPORED_FORMATS.includes(value?.type))
    ),
});
