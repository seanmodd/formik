/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Input from './Input';
import Textarea from './TextArea'
import Select from './Select'
import RadioButtons from './RadioButtons'


function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea': return <Textarea {...rest} />;
    case 'select': return <Select {...rest} />;
    case 'radio': return <RadioButtons {...rest} />;
    case 'checkbox':
    case 'date':
    default:
      return null;
  }
}

export default FormikControl;
