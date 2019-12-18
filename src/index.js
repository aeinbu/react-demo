import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'

ReactDOM.render(<>
        <App/>
        <div className="spacer one-line"></div>
        <App/>
</>, document.getElementById('root'))
