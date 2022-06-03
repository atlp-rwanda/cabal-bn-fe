/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Draggable from 'react-draggable';

import {
  retrieveRequests,
  deleteRequestAction,
  approveRequestAction,
  rejectRequestAction,
} from '../redux/actions/requester.action';
import { fetchAllBookingsAction } from '../redux/actions/booking.action';

/* istanbul ignore next */
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  /* istanbul ignore next */
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  /* istanbul ignore next */
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
/* istanbul ignore next */
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const BookingTable = () => {
  const [page, setPage] = React.useState(0);
  const [requesterId, setRequesterId] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const requests = useSelector((state) => state.requestsReducer);
  const bookings = useSelector((state) => state.fetchAllBookingsReducer);
  const dispatch = useDispatch();
  const history = useNavigate();
  /* istanbul ignore next */
  useEffect(() => {
    const roleId = JSON.parse(localStorage.getItem('userCredentials'));
    if (roleId?.role_id === 3) {
      history('/login');
    }
    dispatch(fetchAllBookingsAction(1));
  }, [page, rowsPerPage, dispatch]);
  console.log(bookings);
  const rows = bookings.bookings?.rows?.map((booking) => booking);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  /* istanbul ignore next */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  /* istanbul ignore next */
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [open, setOpen] = React.useState(false);
  /* istanbul ignore next */
  const handleClickOpen = (id) => {
    setOpen(true);
    setRequesterId(id);
  };
  /* istanbul ignore next */
  const handleClose = () => {
    setOpen(false);
  };
  /* istanbul ignore next */
  const handleDelete = () => {
    dispatch(deleteRequestAction(requesterId));
    setOpen(false);
  };
  /* istanbul ignore next */
  const handleApprove = (id) => {
    const status = 'APPROVED';
    dispatch(approveRequestAction(id, status));
  };
  /* istanbul ignore next */
  const handleReject = (id) => {
    const status = 'REJECTED';
    dispatch(rejectRequestAction(id, status));
  };

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {bookings.pending === true && (
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            background: 'transparent',
            top: '100px',
            left: '500px',
            '@media (max-width:476px)': {
              display: 'flex',
              justifyContent: 'center',
              position: 'absolute',
              top: '100px',
              left: '200px',
            },
          }}
        >
          <CircularProgress />
        </Paper>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        data-testid="pending"
      >
        <Typography
          variant="h6"
          sx={{
            color: '#1A2D6D',
            padding: '15px',
            paddingLeft: '30px',
            fontSize: '20px',
          }}
        >
          Bookings
        </Typography>
      </div>

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: '#EBF2FA',
          width: '95%',
          margin: '0px 30px',
          '@media (max-width:600px)': {
            margin: '0px',
            marginLeft: '10px',
          },
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="requester Table">
          <TableHead>
            <TableRow>
              <TableCell align="center">User ID&nbsp;</TableCell>
              <TableCell align="center">Room No&nbsp;</TableCell>
              <TableCell align="center">Checkin Date&nbsp;</TableCell>
              <TableCell align="center">Checkout Date&nbsp;</TableCell>
              <TableCell align="center">Status&nbsp;</TableCell>
              <TableCell align="center">Action&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="trip-table">
            {rows &&
              rows.map((row) => (
                /* istanbul ignore next */
                <TableRow key={row.id} data-testid={`trip-table-${row.id}`}>
                  <TableCell
                    style={{ width: 160, color: '#1A2D6D' }}
                    align="center"
                    data-testid="trip-cell"
                  >
                    {row.user_id}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      color: `${row.status === 'APPROVED'
                        ? '#018786'
                        : row.status === 'REJECTED'
                          ? '#EC5C5C'
                          : '#FFC800'
                        }`,
                    }}
                    align="center"
                  >
                    {row.room_id}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, color: '#1A2D6D' }}
                    align="center"
                  >
                    {new Date(row.checkinDate).toDateString()}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, color: '#1A2D6D' }}
                    align="right"
                  >
                    {new Date(row.checkoutDate).toDateString()}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      color: '#1A2D6D',
                    }}
                    align="center"
                  >
                    {JSON.parse(localStorage.getItem('userCredentials'))
                      ?.role_id === 2 ? (
                      <div
                        style={{
                          display: 'flex',
                          width: '100%',
                          textAlign: 'center',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                        }}
                      >
                        <Button
                          variant="contained"
                          disableElevation
                          disabled={
                            !!(
                              row.status === 'APPROVED' ||
                              row.status === 'REJECTED'
                            )
                          }
                          sx={{
                            backgroundColor:
                              row.status === 'APPROVED' ||
                                row.status === 'REJECTED'
                                ? '#EC5C5C'
                                : '#0ABDA0',
                            color: '#fff',
                            width: '50px',
                            fontSize: '10px',
                            '&:hover': {
                              backgroundColor: '#0ABDA0',
                              color: '#fff',
                            },
                          }}
                          onClick={() => handleApprove(row.id)}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="ccontained"
                          disabled={
                            !!(
                              row.status === 'APPROVED' ||
                              row.status === 'REJECTED'
                            )
                          }
                          sx={{
                            backgroundColor:
                              row.status === 'REJECTED' ||
                                row.status === 'APPROVED'
                                ? '#EC5C5C'
                                : '#E13535',
                            color: '#fff',
                            width: '50px',
                            fontSize: '10px',
                            '&:hover': {
                              backgroundColor: '#EC5C5C',
                              color: '#fff',
                            },
                          }}
                          onClick={() => handleReject(row.id)}
                        >
                          Reject
                        </Button>
                      </div>
                    ) : JSON.parse(localStorage.getItem('userCredentials'))
                      ?.role_id === 2 ? (
                      <div
                        className="idIs4"
                        style={{
                          display: 'flex',
                          width: '80%',
                          textAlign: 'center',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          paddingLeft: 21,
                        }}
                      >
                        <p style={{ cursor: 'pointer' }}>
                          <EditIcon sx={{ color: '#1A2D6D' }} />
                        </p>
                        <p style={{ cursor: 'pointer' }}>
                          <DeleteIcon
                            sx={{ color: '#EC5C5C' }}
                            onClick={() => handleClickOpen(row.id)}
                          />
                        </p>
                      </div>
                    ) : null}
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 50 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter data-testid="table-footer">
            <TableRow>
              <TablePagination
                align="right"
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={6}
                count={bookings.booking?.bookings?.count}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'limit',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Confirm
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this booking?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BookingTable;
