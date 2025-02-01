import { CssBaseline, ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { ThemeProvider, useThemeContext } from './commonContexts/ThemeContext';
import Header from './components/Header';
import PostList from './components/PostsList/PostsList';

const App = () => {
  const { theme } = useThemeContext();

  const currentTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <MuiThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Header />
      <PostList />
    </MuiThemeProvider>
  );
};

const AppWrapper = () => (
  <ThemeProvider>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </ThemeProvider>
);

export default AppWrapper;
