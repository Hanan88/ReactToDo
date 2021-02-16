import React from 'react';
import reactDom from 'react-dom';

//Components
import App from './App';

//Lebraries

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import"../node_modules/bootstrap-icons/font/bootstrap-icons.css";




reactDom.render(<App />, document.querySelector("#root"))