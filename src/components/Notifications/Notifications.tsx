import { useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useSelector } from 'store/hooks';
import { selectNotification } from 'store/notificationsSlice';

const Notifications = () => {
  const notification = useSelector(selectNotification);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (notification) {
      setOpen(true);
    }
  }, [notification]);

  const handleClose = () => setOpen(false);

  if (!notification) {
    return null;
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity="success" variant="filled" elevation={6}>
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default Notifications;
