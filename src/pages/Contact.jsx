import { useState } from 'react';
import '../assets/css/Contact-form.css'

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleMessageInputChange = (e) => {

    const { message } = e.target.value;

    return setMessage(message);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName} your message has been received`);
    setFirstName('');
    setLastName('');
    setMessage('');
  };

  return (
    <div className="container text-center">
        <h1>
          Please complete form
        </h1>
      <div className='form'>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={message}
            name="message"
            onChange={handleMessageInputChange}
            type="text"
            placeholder="Message"
          />
          {/* <label htmlFor='message'>
        <textarea
        value={message}
        name="message"
        id="message"
        onChange={handleMessageInputChange}
        />
        </label> */}
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
