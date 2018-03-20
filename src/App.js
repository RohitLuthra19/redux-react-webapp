import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import LoginComponent from './components/Login.component';

const theme = createMuiTheme();

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <LoginComponent />
    </MuiThemeProvider>
  );
}