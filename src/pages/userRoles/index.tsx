import React, { useState } from 'react';
import { Page } from '@app/types/layout';
import Layout from '@app/App';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { CreateNewUserButton } from '@app/components/buttons/createNewUserButton';
import { Dropdown } from 'primereact/dropdown';
import InfoBar from '@app/components/headingBar';

const UserRoles: Page = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      field: 'IT',
      status: 'Active',
      employed: '23/04/11',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      field: 'Design',
      status: 'Inactive',
      employed: '02/12/11',
    },
  ]);

  const [editIndex, setEditIndex] = useState(-1);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedRole, setEditedRole] = useState('');
  const [editedField, setEditedField] = useState('');
  const [editedStatus, setEditedStatus] = useState('');
  const [editedEmployeed, setEditedEmployeed] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newField, setNewField] = useState('');
  const [newEmployeed, setNewEmployeed] = useState('');
  const [newStatus, setNewStatus] = useState(false);
  const editRow = (index) => {
    setEditIndex(index);
    setEditedName(users[index].name);
    setEditedEmail(users[index].email);
    setEditedRole(users[index].role);
    setEditedField(users[index].field);
    setEditedStatus(users[index].status);
    setEditedEmployeed(users[index].employed);
  };
  const deleteRow = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };
  const onRowEditSave = (index) => {
    setEditIndex(-1);
    const updatedUsers = [...users];
    updatedUsers[index].name = editedName;
    updatedUsers[index].email = editedEmail;
    updatedUsers[index].role = editedRole;
    updatedUsers[index].field = editedField;
    updatedUsers[index].status = editedStatus;
    updatedUsers[index].employed = editedEmployeed;
    setUsers(updatedUsers);
  };

  const onRowEditCancel = () => {
    setEditIndex(-1);
  };

  return (
    <Layout>
      <div className="main">
        <InfoBar
          img={`/src/assets/images/CommunityImg.png`}
          heading={'Users'}
          subHeading={'User Access Roles'}
        />
        <div className="card mt-3">
          <div className="grid">
            <div className="col-6">
              <p>User Roles</p>
            </div>
            <div className="col-6 flex justify-content-end pr-6">
              <CreateNewUserButton
                users={users}
                setUsers={setUsers}
                newName={newName}
                newEmail={newEmail}
                newRole={newRole}
                newField={newField}
                newEmployeed={newEmployeed}
                newStatus={newStatus}
                setNewName={setNewName}
                setNewEmail={setNewEmail}
                setNewRole={setNewRole}
                setNewField={setNewField}
                setNewEmployeed={setNewEmployeed}
                setNewStatus={setNewStatus}
              />
            </div>
          </div>
          <DataTable value={users}>
            <Column
              header="Name"
              className="font-normal"
              headerStyle={{ color: '#A0AEC0', backgroundColor: 'white' }}
              body={(rowData, columnMeta) =>
                editIndex === columnMeta.rowIndex ? (
                  <>
                    <div>
                      <InputText
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                      />
                    </div>
                    <div className="mt-1">
                      <InputText
                        value={editedEmail}
                        onChange={(e) => setEditedEmail(e.target.value)}
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    {rowData.name}
                    <br />
                    {rowData.email}
                  </div>
                )
              }
            />
            <Column
              header="Function"
              className="font-normal"
              headerStyle={{ color: '#A0AEC0', backgroundColor: 'white' }}
              body={(rowData, columnMeta) =>
                editIndex === columnMeta.rowIndex ? (
                  <>
                    <div>
                      <InputText
                        value={editedRole}
                        onChange={(e) => setEditedRole(e.target.value)}
                      />
                    </div>
                    <div className="mt-1">
                      <InputText
                        value={editedField}
                        onChange={(e) => setEditedField(e.target.value)}
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    {rowData.role}
                    <br />
                    {rowData.field}
                  </div>
                )
              }
            />
            <Column
              field="status"
              header="Status"
              className="font-normal"
              headerStyle={{ color: '#A0AEC0', backgroundColor: 'white' }}
              body={(rowData, columnMeta) =>
                editIndex === columnMeta.rowIndex ? (
                  <div>
                    <Dropdown
                      value={editedStatus}
                      options={[
                        { label: 'Active', value: 'Active' },
                        { label: 'Inactive', value: 'Inactive' },
                      ]}
                      onChange={(e) => setEditedStatus(e.value)}
                      placeholder="Select status"
                    />
                  </div>
                ) : (
                  <span
                    style={{
                      backgroundColor:
                        rowData.status === 'Active' ? '#48BB78' : '#E2E8F0',
                      padding: '5px',
                      color: 'white',
                    }}
                    className="border-round-md "
                  >
                    {rowData.status}
                  </span>
                )
              }
            />
            <Column
              field="employed"
              className="font-normal"
              header="Employed"
              headerStyle={{ color: '#A0AEC0', backgroundColor: 'white' }}
              body={(rowData, columnMeta) =>
                editIndex === columnMeta.rowIndex ? (
                  <>
                    <div>
                      <InputText
                        value={editedEmployeed}
                        onChange={(e) => setEditedEmployeed(e.target.value)}
                      />
                    </div>
                  </>
                ) : (
                  <div>{rowData.employed}</div>
                )
              }
            />
            <Column
              header=""
              headerStyle={{ color: '#A0AEC0', backgroundColor: 'white' }}
              body={(rowData, columnMeta) =>
                editIndex === columnMeta.rowIndex ? (
                  <div>
                    <div
                      className="pi pi-check"
                      onClick={() => onRowEditSave(columnMeta.rowIndex)}
                    />
                    <div
                      className="pi pi-times pl-3"
                      onClick={onRowEditCancel}
                    />
                  </div>
                ) : (
                  <div>
                    <i
                      className="pi pi-pencil"
                      onClick={() => editRow(columnMeta.rowIndex)}
                    />
                    <i
                      className="pi pi-trash ml-3"
                      onClick={() => deleteRow(columnMeta.rowIndex)}
                    />
                  </div>
                )
              }
            />
          </DataTable>
        </div>
      </div>
    </Layout>
  );
};

UserRoles.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default UserRoles;
