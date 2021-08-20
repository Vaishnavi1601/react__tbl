import React from 'react'

const EditableRow = ({
  editFormData,handleEditFormChange,handleCancelClick}) => {
    return (
      <tr>
        <td>
          <input 
          type="text"
          required="required"
          placeholder="FirstName"
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
          ></input>
          </td>

          <td>
          <input 
          type="text"
          required="required"
          placeholder="LasttName"
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
          ></input>
          </td>

          <td><input 
          type="email"
          required="required"
          placeholder="Email"
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
          ></input></td>

          <td><input 
          type="text"
          required="required"
          placeholder="Role"
          name="role"
          value={editFormData.role}
          onChange={handleEditFormChange}
          ></input></td>

          <td><input 
          type="text"
          required="required"
          placeholder="PhoneNumber"
          name="phonenumber"
          value={editFormData.phonenumber}
          onChange={handleEditFormChange}
          ></input></td>

          <td><input 
          type="text"
          required="required"
          placeholder="Address"
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
          ></input>
        </td>

        <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
     
      </td>
      </tr>
    )
}

export default EditableRow
