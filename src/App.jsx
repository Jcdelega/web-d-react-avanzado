import { ChatProvider } from './context/ChatContext'
import Friday from './components/Friday'

const App = () => {
  return (
    <ChatProvider>
      <Friday />
    </ChatProvider>
  )
}
export default App
