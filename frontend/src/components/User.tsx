import React from 'react';

interface IUser {
  id: number;
  name: string;
  email?: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong> {user.name} ({user.id}) <br/>
      <strong>E-mail: </strong> {user.email || "Nao possui e-mail!"} <br/><br/>
    </div>
  );
}

export default User;