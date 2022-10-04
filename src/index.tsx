import React from 'react'
import { render } from 'react-dom'
import Modal from 'react-modal'

import App from './App'

const appElementId = 'root'

const renderApp = () => {
  render(<App />, document.getElementById(appElementId))
}

Modal.setAppElement(`#${appElementId}`)

renderApp()
