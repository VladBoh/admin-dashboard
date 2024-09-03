import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Table } from "antd";
import { routes } from '../../config/routes';

export const UsersTable = ({ users }) => {

    const dataSource = users.map((user) => ({
        key: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        link: <Link
            className='size-10 border border-slate-800 rounded-sm flex items-center hover:bg-slate-200 transition-colors justify-center p-2'
            to={routes.users + '/' + user.id}>
        <ArrowRight className='size-4' />
    </Link>
    }));


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
    }
  ];

  return (
    <div className="w-1/2 mx-auto border-2 border-slate-800 rounded-md p-4 mt-10">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};
