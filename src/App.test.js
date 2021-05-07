import React from 'react';
import ReactDOM from  'react-dom';

import SamuraiAppJs from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
   ReactDOM.render(<SamuraiAppJs />, div);
   ReactDOM.unmountComponentAtNode(div);
});
