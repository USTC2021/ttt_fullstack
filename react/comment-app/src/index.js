import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentApp from './CommentApp';

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="title">React小书</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <CommentApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
