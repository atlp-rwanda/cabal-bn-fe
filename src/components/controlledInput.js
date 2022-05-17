import React from 'react';
import { Controller } from 'react-hook-form';
import InputField from './input';

const ControlledInputs = ({ name, control, variant, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <InputField
        variant="outlined"
        value={value}
        onChange={onChange}
        otherStyles={{
          width: '100%',
          height: 40,
        }}
        {...props}
      />
    )}
  />
);

export default ControlledInputs;
