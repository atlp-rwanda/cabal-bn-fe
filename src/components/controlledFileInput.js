import React from 'react';
import { Controller } from 'react-hook-form';
import Buttons from '../components/button';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
const ControlledFile = ({ name, control }) => (
  <label htmlFor="contained-button-file">
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <input
          onChange={(e) => {
            onChange(e.target.files[0]);
          }}
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          hidden
          data-testid="file-input"
        />
      )}
    />
    <Buttons
      variant="contained"
      startIcon={<FileUploadOutlinedIcon />}
      sx={{
        height: '40px',
        backgroundColor: '#00095E',
        fontSize: '14px',
        color: 'white',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#00095E',
        },
        margin: '10px 0px',
      }}
      value="Upload Image"
      component="span"
    />
  </label>
);

export default ControlledFile;
