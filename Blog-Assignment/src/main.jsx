import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import { NotificationProvider } from './context'
import NotificationContainer from './components/common/Notification'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <App />
        <NotificationContainer />
      </NotificationProvider>
    </Provider>
  </StrictMode>,
)
