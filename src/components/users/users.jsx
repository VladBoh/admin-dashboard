import React from 'react'

import { useGetData } from '../../hooks/use-get-data'

import { UsersTable } from './users-table'
import { AddUserForm } from './add-user/add-user-form'

export const Users = () => {
    const { data: users } = useGetData({ endpoint: '/users' })

    return (
        <>
            <UsersTable users={users} />
            <AddUserForm/>
        </>
    )
}
