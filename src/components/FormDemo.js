import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Card, CardContent, Typography } from '@material-ui/core';

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
                <Field name="fullName" />

                <Field name="initialInvestment" type="number" />

                <Field name="investmentRisk" value="High" type="checkbox" />
                <Field name="investmentRisk" value="Medium" type="checkbox" />
                <Field name="investmentRisk" value="Low" type="checkbox" />

                <Field name="commentAboutInvestmentRisk" as="textarea" />

                <Field name="dependents" as="select" >
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Field>

                <Field name="acceptedTermsAndConditions" type="checkbox" />

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
