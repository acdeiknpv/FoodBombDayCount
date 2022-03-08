import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ProjectForm from './components/projectForm/projectForm';
import History from './components/history/history';
import Modal from './components/modal/modal';

function App() {
  return (
    <div>

      <Modal />

      <div className='projectForm'>
        <ProjectForm />
      </div>

      <div className='history'>
        <History />
      </div>

    </div>
  )
}

export default App;
