import React from 'react';
import { Route, Link } from 'react-router-dom';


// import logo from './logo.svg';
// import './App.css';
// import Form from '../src/components/form.js';
// import Header from './components/header/header';
// import ThemeProvider from './context/theme';

import Login from '../src/components/login/login.js';
import Auth from '../src/components/auth/auth.js';
import Footer from '../src/components/footer/footer.js';
import ToDo from './components/todo/todo.js';
// import Content from '../src/components/content/content.js';
import LoginProvider from './context/auth.js';
import SettingsProvider from './context/settings.js';

const App = (props) => {

  const style = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    links: {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    item: {
      marginRight: '1em',
    },
  };
  return (
    <>
        
      <SettingsProvider>
        <LoginProvider>
          <nav style={style.nav}>
            <ul style={style.links}>
            <li style={style.item}>
            <Link to="/">Home</Link>
            </li>
            <li style={style.item}>
            <Auth><Link to="/content"></Link></Auth>
            </li>
            </ul>
            <Login />
          </nav>
          <hr />
          {/* <Route exact path="/"  /> */}
          {/* <Route exact path="/content" component={Content} /> */}
        </LoginProvider>
        <ToDo />
        </SettingsProvider>
        <Footer />
    </>
  );
}

export default App;
