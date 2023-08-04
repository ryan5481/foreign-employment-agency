import React from 'react';

const EmailLink = ({ email }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <a href={`mailto:${email}`} onClick={handleEmailClick}>
      info@skywaynepal.com
    </a>
  );
};

export default EmailLink;
