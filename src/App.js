import React from 'react';
import Contact from './components/Contact';
import './style.css';

function App() {
  // write your HTML code here
const persons = [
  {name:"Emmanuel", email:"manu@email.com", phone:"552312354"}, 
  {name:"Johana", email:"johana@email.com", phone:"92034902"}, 
  {name:"Lucas", email:"lucas@email.com", phone:"234983499"}, 
  {name : "Marie", email : "marie@email.com", phone : "238942384"},
  {name : "Pedro" , email : "pedro@email.com" , phone : "934584875"}
];

const contacts = [];

for (let i = 0; i < persons.length; i++) {
  contacts.push(<Contact person = {persons[i]}/>)
}

  return (
    <div>
      <h1 className="text-center">My contacts list 📱</h1>

      <div>
        <div id="container">
          {contacts}
        </div>
      </div>
    </div>
  );
}

export default App;
