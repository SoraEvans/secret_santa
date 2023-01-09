import React from 'react';
import DB from '../../constants/db'
import { UsersList, UserItem, BoxUsersWrapper } from './style';

const BoxUsers = () => {
  const userItem = DB.users.map((user) => <UserItem key={user.id}>{user.name}</UserItem>)
  return (

    <BoxUsersWrapper>
      <h2>Участники</h2>
      <UsersList >
        {userItem}
      </UsersList>
    </BoxUsersWrapper>

  )
}

export default BoxUsers;