
import React from 'react';
import ReactDOM from 'react-dom';

import Notes from './components/Notes';

require('./frontpage.css');

ReactDOM.render(
  <Notes />,
  document.getElementById('app')
);

