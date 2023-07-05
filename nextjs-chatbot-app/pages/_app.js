```javascript
import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import { ChatProvider } from '../utils/session'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChatProvider>
        <Component {...pageProps} />
      </ChatProvider>
    </Provider>
  )
}

export default MyApp
```