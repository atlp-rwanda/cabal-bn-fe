import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../redux/actions/accommodation.action';

export default function PositionedMenu({
  commentId,
  accommodationId,
  handleEditComment,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEdit = () => {
    setAnchorEl(commentId);
  };
  const handleDelete = () => {
    dispatch(deleteComment(accommodationId, commentId));
    setAnchorEl(null);
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleEdit}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleEditComment}>
          {' '}
          <ModeEditIcon sx={{ paddingRight: '10px' }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteIcon sx={{ color: 'red', paddingRight: '10px' }} />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
