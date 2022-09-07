import { PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { Link as MuiLink, Button } from '@mui/material';
import styles from './Link.module.scss';

export interface LinkProps {
  type: 'button' | 'link';
  href: string;
}

const Link = ({ href, type, children, ...props }: PropsWithChildren<LinkProps>) => {
  if (type === 'link') {
    return (
      <NextLink href={href}>
        <MuiLink className={styles.link} variant="body2" underline="none" {...props}>
          {children}
        </MuiLink>
      </NextLink>
    );
  }

  if (type === 'button') {
    return (
      <NextLink href={href}>
        <Button color="inherit">{children}</Button>
      </NextLink>
    );
  }

  throw new Error(`Type ${type} is not supported`);
};

export default Link;
