import { AppBar, Toolbar, Typography, Switch, FormControlLabel } from '@mui/material';
import React from 'react';

import { useThemeContext } from '../commonContexts/ThemeContext';

const styles = {
  appBar: {
    position: 'fixed',
    top: 0,
    backgroundColor: '#1976d2', // Material UI's default primary blue
    zIndex: theme => theme.zIndex.drawer + 1,
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  switch: {
    '& .MuiSwitch-thumb': {
      backgroundColor: '#fff',
    },
    '& .MuiSwitch-track': {
      backgroundColor: 'rgba(255, 255, 255, 0.38) !important',
    },
  },
  switchLabel: {
    color: '#fff',
  },
};

const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Typography variant="h6">Placeholder Feed</Typography>
        <FormControlLabel
          control={<Switch checked={theme === 'dark'} onChange={toggleTheme} sx={styles.switch} />}
          label="Dark/Light"
          sx={styles.switchLabel}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
