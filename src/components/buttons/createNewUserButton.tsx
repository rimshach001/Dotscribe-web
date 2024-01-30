import React, { useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
// { onClick }: { onClick: () => void }
export const CreateNewUserButton = ({
  users,
  newName,
  newEmail,
  newRole,
  newField,
  newEmployeed,
  newStatus,
  setUsers,
  setNewName,
  setNewEmail,
  setNewRole,
  setNewField,
  setNewEmployeed,
  setNewStatus,
}: {
  users: Array<{
    id: number;
    name: string;
    email: string;
    role: string;
    field: string;
    status: string;
    employed: string;
  }>;
  newName: string;
  newEmail: string;
  newRole: string;
  newField: string;
  newEmployeed: string;
  newStatus: boolean;
  setUsers: React.Dispatch<
    React.SetStateAction<
      Array<{
        id: number;
        name: string;
        email: string;
        role: string;
        field: string;
        status: string;
        employed: string;
      }>
    >
  >;
  setNewName: React.Dispatch<React.SetStateAction<string>>;
  setNewEmail: React.Dispatch<React.SetStateAction<string>>;
  setNewRole: React.Dispatch<React.SetStateAction<string>>;
  setNewField: React.Dispatch<React.SetStateAction<string>>;
  setNewEmployeed: React.Dispatch<React.SetStateAction<string>>;
  setNewStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const op = useRef(null);
  const [roles] = useState([
    { label: 'Admin', value: 'Admin' },
    { label: 'User', value: 'User' },
    { label: 'Manager', value: 'Manager' },
  ]);
  const cancelAddUser = () => {
    setNewName('');
    setNewEmail('');
    setNewRole('');
    setNewField('');
    setNewEmployeed('');
    setNewStatus(false);
    op.current.hide();
  };

  const saveNewUser = () => {
    const newUser = {
      id: users.length + 1,
      name: newName,
      email: newEmail,
      role: newRole,
      field: newField,
      status: newStatus ? 'Active' : 'Inactive',
      employed: newEmployeed,
    };

    setUsers([...users, newUser]);
    cancelAddUser();
  };
  return (
    <>
      <Button
        type="button"
        icon="pi pi-plus"
        label="Add New"
        iconPos="right"
        className="font-normal bg-white-alpha-90"
        style={{ color: '#21a1a2' }}
        onClick={(e) => op.current.toggle(e)}
      />
      <OverlayPanel ref={op} style={{ width: '22%', borderRadius: '1rem' }}>
        <div>
          <div className="p-fluid m-3">
            <div className="p-field">
              <label htmlFor="name">Name*</label>
              <InputText
                id="name"
                placeholder="Type here"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="p-field mt-3">
              <label htmlFor="email">Email*</label>
              <InputText
                id="email"
                placeholder="abc@example.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className="p-field mt-3">
              <label htmlFor="role">User Role*</label>
              <Dropdown
                id="role"
                value={newRole}
                options={roles}
                onChange={(e) => setNewRole(e.value)}
                optionLabel="label"
                placeholder="Select a role"
              />
            </div>
            <div className="p-field mt-3">
              <label>Status*</label>
              <div className="p-inputgroup">
                <InputSwitch
                  checked={newStatus}
                  onChange={(e) => setNewStatus(e.value)}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid mt-3">
              <div className="col-6 flex justify-content-end ">
                <Button
                  label="Cancel"
                  className="bg-white-alpha-90"
                  style={{ color: '#21a1a2', width: '70%' }}
                  onClick={cancelAddUser}
                />
              </div>
              <div className="col-6">
                <Button
                  label="Save"
                  className=""
                  style={{ width: '70%' }}
                  onClick={saveNewUser}
                />
              </div>
            </div>
          </div>
        </div>
      </OverlayPanel>
    </>
  );
};
