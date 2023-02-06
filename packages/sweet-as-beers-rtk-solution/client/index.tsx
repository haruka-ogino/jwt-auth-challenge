import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import { store } from './store'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('app')
  )
})