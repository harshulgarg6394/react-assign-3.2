import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCard.css'; // Optional: Add CSS for styling

const ProfileCard = ({ name, age, location, bio }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default ProfileCard;
