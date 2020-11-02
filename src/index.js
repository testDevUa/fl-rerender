import state from './redux/state';
import { postTextUpdate, postAdd, subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} postTextUpdate={postTextUpdate} postAdd={postAdd} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree();

subscribe(rerenderEntireTree);