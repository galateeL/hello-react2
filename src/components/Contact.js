import React from 'react';

const Contact = (props) => {
  return (
    <div className="friend-item">
      <h3>{props.person.name}</h3>
      <h4>{props.person.email}</h4>
      <h4>{props.person.phone}</h4>
      <button>Delete</button>
    </div>
  );
};

export default Contact;