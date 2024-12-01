import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloProvider } from '@apollo/client';
import { client } from './services/apollo-client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-white min-h-screen w-full">
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </div>
  </StrictMode>,
)