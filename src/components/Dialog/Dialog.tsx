import { PropsWithChildren, ReactNode } from 'react';
import propTypes from 'prop-types';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogContent from '@mui/material/DialogContent';

export interface DialogProps {
  open: boolean;
}

const Dialog = ({ open, children }: PropsWithChildren<DialogProps>) => {
  const modalRootElement = document.getElementById('modal-root');

  return (
    <MuiDialog container={modalRootElement} open={open}>
      <MuiDialogContent>{children}</MuiDialogContent>
    </MuiDialog>
  );
};

Dialog.propTypes = {
  open: propTypes.bool.isRequired,
  children: propTypes.node,
};

export default Dialog;
