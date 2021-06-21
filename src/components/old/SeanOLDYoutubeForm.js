import * as React from 'react';
import { Button, FormLabel } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log(values);
};

// const validate = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = 'Required';
//   }
//   if (!values.email) {
//     errors.email = 'Required';
//   }
//   if (!values.channel) {
//     errors.channel = 'Required';
//   }
//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required('Required!!!!!!'),
  email: Yup.string().email('Invalid email format').required('Required!!!'),
  channel: Yup.string().required('Required!!'),
});
export default function App() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  return (
    <>
      <div>
        <h1>YouTube Formik Tutorial</h1>
        <form onSubmit={formik.handleSubmit}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <FormLabel htmlFor="email">Email</FormLabel>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <FormLabel htmlFor="channel">Channel</FormLabel>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div>{formik.errors.channel}</div>
          ) : null}

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
