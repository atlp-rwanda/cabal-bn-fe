/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchComments,
  createFeedback,
} from '../../redux/actions/accommodation.action';
import InputField from '../input';
import Buttons from '../button';

const AccommodationComments = ({ accommodationState }) => {
  const [createComment, setCreateComment] = useState('');
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);

  const { data } = useSelector((state) => state.accommodationComments.comments);
  console.log(data);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const accommodationId = accommodationState.accommodations?.data?.id;
  useEffect(() => {
    dispatch(fetchComments(accommodationId, 1, 10));
  }, [accommodationId]);
  const handleComments = (e) => {
    setCreateComment(e.target.value);
  };
  const handleSubmit = () => {
    setCreateComment('');
    dispatch(createFeedback(accommodationId, createComment));
  };
  return (
    <Box sx={{ width: { lg: '100%', md: '80%', sm: '80%', xs: '100%' } }}>
      <Paper
        onClick={handleChange}
        onChange={handleChange}
        sx={{
          width: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '50px',
          padding: '10px',
          marginTop: '20px',
        }}
      >
        <Typography component="h5">Comments</Typography>
        {!checked ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </Paper>
      <Grid container justifyContent="center" style={{ width: '100%' }}>
        <Collapse
          in={!checked}
          sx={{
            width: { lg: '80%', md: '90%' },
          }}
        >
          <Box
            sx={{
              width: { lg: '55%', md: '100%', sm: '100%', xs: '100%' },
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            }}
          >
            <InputField
              name="comments"
              multiline
              label=" Comment"
              value={createComment}
              onChange={handleComments}
              placeholder="enter your comment"
              sx={{ width: '100%' }}
            />
            <Buttons
              variant="contained"
              sx={{
                width: 150,
                height: 50,
                backgroundColor: '#00095E',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: '500',
                fontSize: '16px',
                color: 'white',
                marginTop: { xs: '30px', sm: '15px', md: '10px' },
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#00095E',
                },
              }}
              value="Comment"
              disabled={createComment === '' ? 'disabled' : null}
              onClick={handleSubmit}
            />
          </Box>
          <Grid container sx={{ padding: 2 }}>
            {data &&
              data.results?.map((comment) => (
                <Grid container sx={{ padding: 3 }} key={comment.id}>
                  <Grid container>
                    <Typography sx={{ paddingRight: '20px' }}>
                      {comment.user_id}
                    </Typography>
                    <Typography sx={{ fontSize: '15px', color: 'gray' }}>
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </Typography>
                  </Grid>
                  <Typography component="div">{comment.comment}</Typography>
                </Grid>
              ))}
          </Grid>
        </Collapse>
      </Grid>
    </Box>
  );
};
export default AccommodationComments;
