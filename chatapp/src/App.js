import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div className="App">
      {/* Chat application is coming */}
      <ChatEngine
      height='100vh'
      projectID='35b47058-5fd3-4333-88f9-a308aeb4502d'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=><ChatFeed {...(chatAppProps)}/>}

      />

    </div>
  );
}

export default App;
