import { Fragment, useState } from 'react';

import Sidebar from './Sidebar';
import Header from './Header';

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
