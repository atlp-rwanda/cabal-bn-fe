/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import { Close, NavigateBefore, NavigateNext } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Skeleton,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RoomCard from '../components/roomCard';
import { fetchAccommodationsAction } from '../redux/actions/accommodation.action';
import { roomSchema } from '../validation/room.validation';

const HeaderText = styled(Typography)(() => ({
  fontSize: '30px',
  fontWeight: 700,
  '@media (max-width:600px)': {
    fontSize: '20px',
  },
}));
const BodyText = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 700,
  '@media (max-width:600px)': {
    fontSize: '14px',
  },
}));
const SelectFormControl = styled(FormControl)(() => ({
  width: '250px',
}));

const BookingPage = () => {
  const limit = 8;
  let totalPages = 0;
  const rooms = useRef([]);
  const activeRoom = useRef();
  const [accomodationSelect, setAccomodationSelect] = useState();
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const {
    accommodations,
    error: accommodationError,
    pending: accommodationPending,
  } = useSelector((state) => state.fetchAllAccommodations);
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(roomSchema),
  });

  // get all rooms in the accommodations
  if (accommodations?.data && accommodations?.data?.results?.length !== 0) {
    let forRooms = [];
    const forAccommodations = accommodations.data.results;
    for (let i = 0; i < forAccommodations.length; i++) {
      forRooms = [
        ...forRooms,
        ...forAccommodations[i].Rooms.map((room) => ({
          ...room,
          accommodationName: forAccommodations[i].name,
        })),
      ];
    }
    rooms.current = forRooms;
  } else {
    rooms.current = [];
  }

  // do the pagination
  totalPages = Math.ceil(rooms.current.length / limit);

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleBooking = (roomId) => {
    activeRoom.current = roomId;
    setOpenModal(true);
  };
  const createBooking = (value) => {
    console.log(value);
  };

  useEffect(() => {
    dispatch(fetchAccommodationsAction(1, -1));
  }, []);

  return (
    <>
      <Container sx={{ paddingTop: '10px' }}>
        <HeaderText color="primary" sx={{ marginBottom: '15px' }}>
          Book a Room
        </HeaderText>

        <Stack
          direction="row"
          alignItems="start"
          spacing={{ xs: '5px', md: '15px' }}
          marginBottom="15px"
        >
          <SelectFormControl
            size={{
              xs: 'small',
              md: 'medium',
            }}
          >
            <InputLabel id="searchAccommodation">
              Search Accommodation
            </InputLabel>
            <Select
              labelId="searchAccommodation"
              label="Search Accommodation"
              value={accomodationSelect}
              onChange={(e) => {
                setAccomodationSelect(e.target.value);
              }}
            >
              {(() => {
                if (accommodationError) {
                  return (
                    <MenuItem disabled color="error" value="Error">
                      Error
                    </MenuItem>
                  );
                }

                if (accommodationPending) {
                  return (
                    <MenuItem disabled color="error" value="Error">
                      <CircularProgress size={30} />
                    </MenuItem>
                  );
                }

                if (accommodations.length === 0) {
                  return (
                    <MenuItem disabled value="">
                      No Accommodation
                    </MenuItem>
                  );
                }

                return accommodations.data.results.reduce(
                  (prevAcc, nextAcc) => {
                    prevAcc.push(
                      <MenuItem key={nextAcc.id} value={nextAcc.id}>
                        {nextAcc.name}
                      </MenuItem>,
                    );

                    return prevAcc;
                  },
                  [
                    <MenuItem key={0} value="All">
                      All
                    </MenuItem>,
                  ],
                );
              })()}
            </Select>
          </SelectFormControl>
          <Button
            color="primary"
            variant="contained"
            sx={{
              height: '56px',
            }}
          >
            <BodyText>Search</BodyText>
          </Button>
        </Stack>

        <Grid
          container
          key="pagination-icons"
          sx={{
            width: '100%',
            justifyContent: 'end',
            padding: '0 30px 0 0',
            color: '#1A2D6D',
            alignItems: 'center',
          }}
        >
          <Typography>
            {page} - {totalPages} of {rooms.current.length}
          </Typography>
          <IconButton
            disabled={page === 1 ? true : null}
            onClick={handlePrevious}
            style={{
              color: '#1A2D6D',
            }}
          >
            <NavigateBefore />
          </IconButton>
          <IconButton
            disabled={page === totalPages ? true : null}
            onClick={handleNext}
            style={{
              color: '#1A2D6D',
            }}
          >
            <NavigateNext />
          </IconButton>
        </Grid>

        <Grid
          container
          justifyContent="space-evenly"
          columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          gap="15px"
        >
          {(() => {
            if (accommodationPending) {
              return (
                <Grid
                  container
                  justifyContent="space-evenly"
                  columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                  gap="15px"
                >
                  {Array.from(Array(8)).map(() => (
                    <Grid item>
                      <Skeleton
                        variant="rectangular"
                        width={{ xs: '200px', md: '250px' }}
                        height={{ xs: '200px', md: '250px' }}
                        sx={{
                          overflow: 'hidden',
                          borderRadius: '5px',
                          width: {
                            xs: '200px',
                            md: '250px',
                          },
                          height: {
                            xs: '200px',
                            md: '250px',
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              );
            }
            return rooms.current
              .filter(
                (room, index) =>
                  index >= (page - 1) * limit && index < page * limit,
              )
              .map((room) => (
                <Grid item>
                  <RoomCard
                    accommodationName={room.accommodationName}
                    images={room.images}
                    roomNo={room.id}
                    price={room.price}
                    onButtonClick={handleBooking}
                  />
                </Grid>
              ));
          })()}
        </Grid>
      </Container>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="div"
            sx={{
              display: 'flex',
              gap: '15px',
              flexFlow: 'column nowrap',
              padding: '30px',
              margin: '15px',
              position: 'relative',
              backgroundColor: 'white',
              borderRadius: '10px',
              maxWidth: '400px',
              width: '100%',
            }}
          >
            <Close
              sx={{ position: 'absolute', top: '10px', right: '10px' }}
              onClick={handleCloseModal}
            />
            <Controller
              name="checkInDate"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    /* istanbul ignore next */
                    onChange(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Checkin Date"
                      size="small"
                      color="primary"
                      onKeyDown={(e) => {
                        /* istanbul ignore next */
                        e.preventDefault();
                      }}
                      {...(errors.checkInDate && {
                        error: true,
                        helperText: errors.checkInDate.message,
                      })}
                    />
                  )}
                />
              )}
            />
            <Controller
              name="checkOutDate"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  value={value}
                  minDate={watch('checkInDate')}
                  onChange={(newValue) => {
                    /* istanbul ignore next */
                    onChange(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Checkout Date"
                      size="small"
                      onKeyDown={(e) => {
                        /* istanbul ignore next */
                        e.preventDefault();
                      }}
                      {...(errors.checkOutDate && {
                        error: true,
                        helperText: errors.checkOutDate.message,
                      })}
                    />
                  )}
                />
              )}
            />

            <Button
              variant="contained"
              onClick={handleSubmit(createBooking, console.log)}
            >
              Book room
            </Button>
          </Box>
        </Modal>
      </LocalizationProvider>
    </>
  );
};

export default BookingPage;
