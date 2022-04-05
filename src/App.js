import logo from './logo.svg';
import './App.css';
import ContactForm from './Components/ContactForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <ContactForm />   
    </div>
  );
}

export default App;
