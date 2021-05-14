import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';


function App() {
  return (
    <div className="App">
      {/* Chat application is coming */}
      <ChatEngine
      height='100vh'
      projectID='35b47058-5fd3-4333-88f9-a308aeb4502d'
      userName='RajeevaBP'
      userSecret='123456'
      renderChatFeed={(chatAppProps)=><ChatFeed {...(chatAppProps)}/>}

      />

    </div>
  );
}

export default App;
