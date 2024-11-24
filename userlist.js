import React from 'react';
import ProfileCard from './ProfileCard';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return <p>No profiles to display. Add some!</p>;
  }

  return (
    <div className="user-list">
      {users.map((user, index) => (
        <ProfileCard
          key={index}
          name={user.name}
          age={user.age}
          location={user.location}
          bio={user.bio}
        />
      ))}
    </div>
  );
};

export default UserList;
