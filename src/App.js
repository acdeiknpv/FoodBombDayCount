import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ProjectForm from './components/projectForm/projectForm';
import History from './components/history/history';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { history: [] };
  }

  handleHistory(startDate, endDate, dayDiff) {
    this.setState({ history: [...this.state.history, {start: startDate, end: endDate, dayDifference: dayDiff}] })
  }

  render() {
    let handleHistory = this.handleHistory;

    return (
      <div>

        <div className='projectForm'>
          <ProjectForm handleHistory={handleHistory.bind(this)} />
        </div>

        <div className='history'>
          <History history={this.state.history} />
        </div>
      </div>
    )
  }

}

export default App;
