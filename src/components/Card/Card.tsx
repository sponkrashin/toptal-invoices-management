import { PropsWithChildren } from 'react';
import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import Title from 'components/Title';
import styles from './Card.module.scss';

export interface CardProps {
  title?: string;
  className?: string;
}

const Card = ({ title, children, className }: PropsWithChildren<CardProps>) => (
  <Paper className={`${styles.card} ${className ?? ''}`}>
    {title && <Title>{title}</Title>}
    <Container className={styles.cardContent}>{children}</Container>
  </Paper>
);

export default Card;
