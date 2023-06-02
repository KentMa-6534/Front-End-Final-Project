import React from "react";
import { useEffect, useState } from "react";
function Form() {
  const API_URL = "https://6479034b362560649a2eca35.mockapi.io/contacts";
  const [contacts, setContacts] = useState([{}]);

  //State Variables for POSTing and PUTing functions

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const [updatedFirstName, setUpdatedFirstName] = useState("");
  const [updatedLastName, setUpdatedLastName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedMessage, setUpdatedMessage] = useState("");

  function getContacts() {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => setContacts(data));
  }

  useEffect(() => {
    getContacts();
  }, []);

  function deleteContact(id) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => getContacts());
  }

  function updateContact(e, contactObject) {
    e.preventDefault();

    let updatedContactObject = {
      ...contactObject,
      firstName: updatedFirstName,
      lastName: updatedLastName,
      email: updatedEmail,
      message: updatedMessage,
    };

    fetch(`${API_URL}/${contactObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContactObject),
    }).then(() => getContacts());
  }

  function postNewContact(e) {
    e.preventDefault();

    console.log(newFirstName, newLastName, newEmail, newMessage);

    let data = {
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      message: newMessage,
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => getContacts());
  }
  return (
    <div className="">
      <div id="form-container" className="container bg-light mb-3">
        <br></br>
        <div className="form-group">
          <h2>Send a Message!</h2>
          <div className="row">
            <div className="col-md py-3">
              <label for="firstName">First Name</label>
              <input
                onChange={(e) => setNewFirstName(e.target.value)}
                className="form-control border border-dark"
                placeholder="Enter your first name..."
              ></input>
            </div>
            <div className="col-md py-3">
              <label for="firstName">Last Name</label>
              <input
                onChange={(e) => setNewLastName(e.target.value)}
                className="form-control border border-dark"
                placeholder="Enter your last name..."
              ></input>
            </div>
            <div className="row">
              <div className="col-md py-3">
                <label for="firstName">Email Address</label>
                <input
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="form-control border border-dark"
                  placeholder="Enter your email address..."
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md py-3">
                <label for="message">Message</label>
                <textarea
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="form-control border border-dark"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div>
              <button
                onClick={(e) => postNewContact(e)}
                className="btn btn-light border border-dark col-md form-control"
                id="addContact"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="form-container" className="bg-light container-md py-3">
          {contacts && contacts.length > 0 ? (
            <div>
              <h2>Contacts:</h2>
              <table id="contactList" className="table bg-light table-striped">
                <thead>
                  <th>First Name:</th>
                  <th>Last Name:</th>
                  <th>Email Address:</th>
                  <th>Message:</th>
                  <th>Actions:</th>
                </thead>
                {contacts.map((contact, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{contact.firstName}</td>
                      <td>{contact.lastName}</td>
                      <td>{contact.email}</td>
                      <td>{contact.message}</td>
                      <td>
                        {" "}
                        <form className="py-3">
                          <label>Update First Name</label>
                          <input
                            onChange={(e) =>
                              setUpdatedFirstName(e.target.value)
                            }
                            className="form-control border border-dark"
                            placeholder="Enter First Name..."
                          ></input>
                          <label>Update Last Name</label>
                          <input
                            onChange={(e) => setUpdatedLastName(e.target.value)}
                            className="form-control border border-dark"
                            placeholder="Enter Last Name..."
                          ></input>
                          <label>Update Email Address</label>
                          <input
                            onChange={(e) => setUpdatedEmail(e.target.value)}
                            className="form-control border border-dark"
                            placeholder="Enter Email Address..."
                          ></input>
                          <label>Update Message</label>
                          <textarea
                            onChange={(e) => setUpdatedMessage(e.target.value)}
                            className="form-control border border-dark"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Enter your message..."
                          ></textarea>
                        </form>
                      </td>
                      <td>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <button
                          onClick={(e) => updateContact(e, contact)}
                          className="btn bg-primary text-white col-md"
                        >
                          Update
                        </button>
                        &nbsp;
                        <button
                          onClick={() => deleteContact(contact.id)}
                          className="btn bg-danger text-white col-md"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          ) : (
            <h2>No data available.</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
