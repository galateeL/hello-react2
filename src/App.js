import React from 'react';
import Contact from './components/Contact';
import './style.css';

function App() {
  // write your HTML code here
const emmanuel = {name:"Emmanuel", email:"manu@email.com", phone:"02 50 45 65 48"};
  return (
    <div>
      <h1 className="text-center">My contacts list 📱</h1>

      <div>
        <div id="container">
          <Contact person = {emmanuel}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
