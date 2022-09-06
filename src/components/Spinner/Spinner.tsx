import { CircularProgress, Backdrop } from '@mui/material';
import styles from './Spinner.module.scss';

export interface SpinnerProps {
  size?: 'small' | 'large';
  spinning?: boolean;
  inContainer?: boolean;
}

const Spinner = ({ size, spinning, inContainer }: SpinnerProps) => {
  if (!spinning) {
    return null;
  }

  const sizeInPx = size === 'large' ? 30 : 20;
  const spinner = <CircularProgress size={sizeInPx} />;

  return inContainer ? (
    <Backdrop className={styles.container} open>
      {spinner}
    </Backdrop>
  ) : (
    spinner
  );
};

export default Spinner;
