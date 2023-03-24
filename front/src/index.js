import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import {store} from "./app/store"
import { Provider } from 'react-redux';
import { ProSidebarProvider } from 'react-pro-sidebar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ProSidebarProvider>

   <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
    </Provider>
   </ProSidebarProvider>
  </React.StrictMode>
);
