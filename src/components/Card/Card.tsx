import { PropsWithChildren } from 'react';
import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import Spinner from 'components/Spinner';
import Title from 'components/Title';
import styles from './Card.module.scss';

export interface CardProps {
  title?: string;
  loading?: boolean;
  className?: string;
}

const Card = ({ title, loading, children, className }: PropsWithChildren<CardProps>) => (
  <Paper className={`${styles.card} ${className ?? ''}`}>
    {title && <Title>{title}</Title>}
    <Container className={`${styles.cardContent} ${loading ? styles.loading : ''}`}>
      <Spinner size="large" spinning={!!loading} />
      {!loading && children}
    </Container>
  </Paper>
);

export default Card;
