import { SyntheticEvent } from 'react';

export function preventDefault(event: SyntheticEvent<HTMLElement>) {
  event.preventDefault();
  event.stopPropagation();
}
