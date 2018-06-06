import React from 'react';

const Avatar = () => (
  <div className="imgcontainer">
    <img src={require('../img/img_avatar.png')} alt="Avatar" className="avatar" /> {/* eslint-disable-line global-require */}
  </div>
);

export default Avatar;
