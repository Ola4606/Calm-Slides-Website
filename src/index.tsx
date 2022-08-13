import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SessionMain from './components/session/SessionMain';
import PageNotFound from './components/PageNotFound';
import SessionEnded from './components/session/SessionEnded';
import ScrollToTop from './components/general/scrollToTop';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/session" element={<SessionMain />} />
      <Route path="/sessionEnded" element={<SessionEnded />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
