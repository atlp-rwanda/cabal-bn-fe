import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField } from '@mui/material';
import store from "../redux/store";
import { getUsers } from '../redux/actions/user_role_settings.action';
import { useSelector } from 'react-redux';
import { getComments } from '../redux/actions/trip_comments.action';
import { postComment } from '../redux/actions/trip_comments.action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width:'700px'
  },
  // '& .MuiDialogActions-root': {
  //   padding: theme.spacing(1),
  // },
  '& .MuiDialogTitle-root':{
     textAlign:'center',
     color:"#00095E"
  }
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};



BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};




export default function DetailsDialog({label,id,user,locations,manager,tripDate,returnDate,role}) {
  const [open, setOpen] = React.useState(false);
  const [commen, setCommen] =React.useState('');
  const [loading, setLoading] =React.useState(false);
  const {comments}=useSelector((state)=>state.tripCommentReducer)
  const {detailed}=useSelector((state)=>state.getUserReducer)

  React.useEffect(()=>{
    store.dispatch(getUsers())
  },[])

  const handleClickOpen = async () => {
   setLoading(true)
    await  store.dispatch(getComments(id))
   setLoading(false)
    setOpen(true);
    console.log(-tripDate.getTime()+returnDate.getTime())
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const post= async (comment)=>{
    await store.dispatch(postComment(id,comment))
  }
console.log(detailed)
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {label}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
       <DialogTitle>Trip details
       <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
       </DialogTitle>
       <ToastContainer />
        <DialogContent dividers>
          {role===4?(null):(
            <>
            <Stack>
            <Typography gutterBottom color="#00095E" fontSize="20px">
              owner
            </Typography>
            <Typography gutterBottom color="#7EA0FF">
             {detailed.map(det=>(
               det.id===user?(
                 `${det.first_name} ${det.last_name}`
               ):(null)
             ))}
            </Typography>
            </Stack>
            <Stack>
            <Typography gutterBottom color="#00095E" fontSize="20px" mt={3}>
              manager
            </Typography>
            <Typography gutterBottom color="#7EA0FF">
              {detailed.map(det=>(
                det.id===manager?(
                  `${det.first_name} ${det.last_name}`
                ):(null)
              ))}
            </Typography>
            </Stack>
            </>
          )}
          <Stack>
          <Typography gutterBottom color="#00095E" fontSize="20px" mt={3}>
            destinations
          </Typography>
          {locations.map(dest=>(
            <Typography color="#7EA0FF">{`${dest.Accommodation.name}: ${dest.days} days`}</Typography>
          ))}
          </Stack>
          
          <Typography color="#00095E" mt={10} fontSize="20px">
            {`Comments ${comments.length}`}
          </Typography>
          <Grid direction="row" gap={5} justifyItems="space-between" container>
            <Grid item xs={8}>
            <TextField label="comment" variant="filled" size='small' fullWidth onChange={e=>setCommen(e.target.value)} />
            </Grid>
            <Grid item alignSelf="flex-end">
            <Button variant="contained" sx={{
            backgroundColor: "#00095E",
            height:'30px',
            '&:hover':{
              backgroundColor: "#00095E",
            }
          }} onClick={()=>post(commen)}>POST</Button>
            </Grid>
          
          </Grid>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      
        {comments&&comments.length>0?(
          comments.map(comme=>(
<ListItem alignItems="flex-start" divider>
<ListItemAvatar>
          <Avatar alt="Remy Sharp" src={comme.user.profile_picture} />
        </ListItemAvatar>
          <ListItemText
          
          primary={
            <Typography color="#00095E">{comme.user.first_name}</Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#00095E"
              >
                {comme.user.last_name}
              </Typography>
              <span style={{color:"#7EA0FF"}}>{` — ${comme.comment}`}</span>
            </React.Fragment>
          }
        />
        </ListItem>
          ))
          
        ):(
          <Typography variant='h8'>This trip request has no comments yet!</Typography>
        )}
      
      
    </List>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} sx={{
            backgroundColor: '#F9A826',
            height:'50px',
            color:'#00095E',
          }}>
            CLOSE
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}
