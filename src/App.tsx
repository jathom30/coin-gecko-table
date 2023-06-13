import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CryptoTable } from './CryptoTable'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <CryptoTable />
      </div>
    </QueryClientProvider>
  )
}

export default App
