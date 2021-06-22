import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Card, CardContent, TextField, Typography } from '@material-ui/core';

const initialValues = {
  fullName: '',
  initialInvestment: undefined,
  investmentRisk: [],
  commentAboutInvestmentRisk: '',
  dependents: -1,
  acceptedTermsAndConditions: false
};


function FormDemo() {
  const onSubmit = () => { console.log("here i am fuckers!") };
  return (
    <div>

      <Card >
        <CardContent>
          <Typography variant="h4">New Account</Typography>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values }) => (
              <Form>
                <Field name="fullName" as={TextField} label="First Name" />




                <pre>{JSON.stringify(values, null, 4)}</pre>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>

    </div>
  );
}

export default FormDemo;
