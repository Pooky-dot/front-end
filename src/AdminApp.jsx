// src/admin/AdminApp.jsx
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { dataProvider } from '@/data/dataProvider';
import AdminDashboard from '@/admin/AdminDashboard';
import { ProjectList } from './admin/ProjectList';
import { ProjectShow } from './admin/ProjectShow';
import UserList from '@/admin/UserList';
import UserEdit from '@/admin/UserEdit';


const AdminApp = () => (
  <Admin dataProvider={dataProvider} dashboard={AdminDashboard} basename="/admin">
    <Resource name="adminProject" list={ProjectList} show={ProjectShow} />
    <Resource name="user" list={UserList} edit={UserEdit}  />
  </Admin>
);

export default AdminApp;
