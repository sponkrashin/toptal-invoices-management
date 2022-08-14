import { Fragment, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function HeaderWithSidebarContainer() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Header open={open} onToggleDrawer={toggleDrawer} />
      <Sidebar open={open} />
    </Fragment>
  );
}
