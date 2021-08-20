import React, {useState,Fragment}  from 'react';
import "./App.css";
import mockdata from "./data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {

  const [contacts, setContacts] = useState(mockdata);
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    phonenumber:"",
    address:"",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name" );
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

  const editedContact = {
      firstName: editContactId,
      lastName: editFormData.lastName,
      email: editFormData.email,
      role: editFormData.role,
      phonenumber: editFormData.phonenumber,
      address: editFormData.address,
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.firstName === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };


  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.firstName);

    const formValues = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      role: contact.role,
      phonenumber: contact['phonenumber'],
      address: contact.address
    };

    setEditFormData(formValues);
}

const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.firstName === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  }; 
  

return (
<div className = "app-container">
<form onSubmit={handleEditFormSubmit}>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map((contact) =>(
            <Fragment>
              {editContactId === contact.firstName ? (
            <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}/>): 
                  (<ReadOnlyRow contact = {contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}/>
                  )}
            </Fragment>
            ))
        }
        </tbody>
    </table>
  </form>   
</div>
  )
};
export default App;