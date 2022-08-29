import { CircularProgress } from '@mui/material';

export interface SpinnerProps {
  size?: 'small' | 'large';
  spinning?: boolean;
}

const Spinner = ({ size, spinning }: SpinnerProps) => {
  const sizeInPx = size === 'large' ? 30 : 20;
  return spinning !== false ? <CircularProgress size={sizeInPx} /> : null;
};

export default Spinner;
