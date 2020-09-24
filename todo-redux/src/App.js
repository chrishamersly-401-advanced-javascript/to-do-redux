import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Form from '../src/components/form.js';
import Header from '../src/components/header/header.js';
import Footer from '../src/components/footer/footer.js';
import ToDo from './components/todo/todo';
import ThemeProvider from './context/theme';
import SettingsProvider from './context/site';

function App() {
  return (
    <>
    <ThemeProvider>
      <SettingsProvider>
        <Header />
        <ToDo />
        <Footer />
        </SettingsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
