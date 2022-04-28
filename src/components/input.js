/* eslint-disable react/prop-types */
import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ labelName }) => (
  <TextField
    fullWidth
    size="small"
    id="outlined"
    label={labelName}
    variant="outlined"
    sx={{ margin: 1, maxWidth: '30vw' }}
  />
);
export default InputField;
