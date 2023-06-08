import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import homePage from './pages/HomePage';
import chatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={homePage} exact />
      <Route path="/chats" component={chatPage} />
    </div>
  );
}

export default App;
