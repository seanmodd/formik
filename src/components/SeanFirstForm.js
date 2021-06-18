import * as React from 'react';

import { Button, FormLabel } from '@material-ui/core';

export default function App() {
  return (
    <>
      <div>
        <h1>YouTube Formik Tutorial</h1>
        <form>
          <FormLabel htmlFor="name">Name</FormLabel>
          <input type="text" id="name" name="name" />

          <FormLabel htmlFor="email">Email</FormLabel>
          <input type="email" id="email" name="email" />

          <FormLabel htmlFor="channel">Channel</FormLabel>
          <input type="text" id="channel" name="channel" />

          <Button variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
