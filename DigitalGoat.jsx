import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {
  HashRouter, BrowserRouter as Router, Route, Routes, Link, Switch, 
} from 'react-router-dom';

import States from './components/states/States';



ReactDOM.render((
  <States />
                 ),
  document.getElementById('reactapp'),
);
