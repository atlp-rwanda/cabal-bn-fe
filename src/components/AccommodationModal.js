import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  CircularProgress,
  Select,
  MenuItem,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Header from '../components/header';
import Buttons from '../components/button';
import { getAllLocations } from '../redux/actions/location.action';
import store from '../redux/store';
import { makeStyles } from '@material-ui/core/styles';
import { FormControlSX, SignupBtn } from '../helpers/signup.helper';
import CloseIcon from '@mui/icons-material/Close';
import {
  createAccommodationAction,
  fetchAccommodationsAction,
} from '../redux/actions/accommodation.action';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { accommodationSchema } from '../validation/accommodation.validation';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useDispatch, useSelector } from 'react-redux';
import ControlledInputs from '../components/controlledInput';

const style = {
  position: 'relative',
  top: '400px',
  left: { xs: '195px', sm: '300px', md: '600px', lg: '750px', xl: '750px' },
  transform: 'translate(-50%, -50%)',
  width: {
    xs: 350,
    sm: 420,
    md: 420,
    lg: 420,
    xl: 420,
  },
  minHeight: {
    xs: 550,
    md: 530,
  },
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export const AccommodationModal = ({ open, title, handleClose, inputData }) => {
  const [fetchLocation, setFetchLocation] = useState([]);
  const dispatch = useDispatch();

  const populateSelectLocation = async () => {
    await store.dispatch(getAllLocations());
    const { results } = store.getState().locationReducer.data.data;
    setFetchLocation(results);
    dispatch(fetchAccommodationsAction(1, 4));
  };
  useEffect(() => {
    populateSelectLocation();
  }, [dispatch]);

  const useStyle = makeStyles((theme) => ({
    formControl: {
      [theme.breakpoints.down('xs')]: {
        width: 280,
        minHeight: 20,
        margin: '30px 0px',
      },
      width: 350,
      minHeight: 50,
      margin: '20px 0px',
    },
  }));
  const classes = useStyle();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: inputData?.name ?? '',
      description: '',
      services: '',
      amenities: '',
      images: '',
      location_id: '',
    },
    resolver: yupResolver(accommodationSchema),
  });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('services', data.services);
    formData.append('amenities', data.amenities);
    for (let i = 0; i <= data.images.length; i++) {
      formData.append('images', data.images[i]);
    }
    formData.append('location_id', data.location_id);
    await store.dispatch(createAccommodationAction(formData));

    if (store.getState().createAccommodationReducer.accommodations?.data) {
      reset();
      handleClose();
      dispatch(fetchAccommodationsAction(1, 4));
    }
  };

  const loading = useSelector(
    (state) => state.createAccommodationReducer.pending,
  );
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex' }}>
              <Typography
                id="modal-modal-title"
                variant="h5"
                sx={{
                  fontSize: '26px',
                  fontWeight: '400',
                  fontFamily: 'Josefin Sans, sans-serif',
                  color: '#00095E',
                }}
              >
                {title}
              </Typography>
              <IconButton
                onClick={handleClose}
                sx={{
                  color: '#00095E',
                  left: { xs: '20px', lg: '50px', xl: '50px' },
                  bottom: '20px',
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <ControlledInputs
              name="name"
              label="Name"
              control={control}
              {...(errors?.name && {
                error: true,
                helperText: errors.name.message,
              })}
            />

            <ControlledInputs
              name="description"
              label="Description"
              control={control}
              {...(errors?.description && {
                error: true,
                helperText: errors.description.message,
              })}
            />
            <ControlledInputs
              name="services"
              label="Services"
              control={control}
              {...(errors?.services && {
                error: true,
                helperText: errors.services.message,
              })}
            />
            <ControlledInputs
              name="amenities"
              label="Amenities"
              control={control}
              {...(errors?.amenities && {
                error: true,
                helperText: errors.amenities.message,
              })}
            />

            <FormControl className={classes.formControl} sx={FormControlSX}>
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Controller
                name="location_id"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    labelId="acc-select-label"
                    sx={{ margin: '10px 0px' }}
                    value={value}
                    onChange={onChange}
                    id="accommodation-select"
                    inputProps={{
                      'data-testid': 'accommodation-input',
                    }}
                    label="Location"
                  >
                    {fetchLocation.map((locations) => (
                      <MenuItem key={locations.id} value={locations.id}>
                        {locations.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
            <label htmlFor="contained-button-file">
              <Controller
                name="images"
                control={control}
                render={({ field: { onChange } }) => (
                  <input
                    onChange={(e) => {
                      onChange(e.target.files);
                    }}
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    hidden
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
            <SignupBtn variant="contained" type="submit">
              {loading ? (
                <CircularProgress
                  sx={{
                    color: 'white',
                  }}
                  size={30}
                  thickness={4}
                />
              ) : (
                `${title}`
              )}
            </SignupBtn>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};
