import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

const App = () => {
    return (
      <div className='app'>
        <p>Hello, World!</p>
        <img src='/dist/images/javascript.png' />
      </div>
    );
};
  
ReactDOM.render(<App />, document.getElementById('root'));