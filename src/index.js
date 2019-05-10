import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

const App = () => {
    return (
      <div className='app'>
        Hello, World!
      </div>
    );
};
  
ReactDOM.render(<App />, document.getElementById('root'));