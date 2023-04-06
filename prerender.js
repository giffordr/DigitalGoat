'use strict';

const prerender = require('pre-render');
 
prerender('./build', [
  '/',
  '/about',
  '/contact',
  '/articles',
]);


