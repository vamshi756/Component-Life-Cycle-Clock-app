import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    showClock: false,
  }

  onTogleClock = () => {
    this.setState(prevState => ({
      showClock: !prevState.showClock,
    }))
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onTogleClock}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock ? <Clock /> : null}
      </div>
    )
  }
}

export default App
