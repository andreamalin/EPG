import React from 'react'
import ReactDOM from 'react-dom'
import Schedule from './components/schedule/Schedule'

const App = () => (
  <>
    <div className="banner">
      Today,
      {' '}
      <h1 className="date">
        {(new Date()).toLocaleDateString()}
      </h1>
    </div>
    <Schedule />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
