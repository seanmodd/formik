import * as React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/* prettier-ignore */
const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required!!!!!!'),
  email: Yup.string().email('Invalid email format').required('Required!!!'),
  channel: Yup.string().required('Required!!'),
});
export default function SeanFirstForm() {
  return (

    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >

        <h1>YouTube Formik Tutorial</h1>
        <Form className="form-control">
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />

          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />

          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
          <button type="submit" variant="contained" color="primary">
            Submit
          </button>
        </Form>

      </Formik>
    </div>

  );
}
