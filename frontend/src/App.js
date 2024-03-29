import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import HomePage from './pages/HomePage.js';
import ChatPage from './pages/ChatPage.js';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
