import React from 'react';
import ReactDOM from 'react-dom';
import AdditionComponent from './AdditionComponent';
import CardComponent from './CardComponent';
import Main from './Main';
import Form from './Form';

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

ReactDOM.render(<Main />, document.getElementById('root'));