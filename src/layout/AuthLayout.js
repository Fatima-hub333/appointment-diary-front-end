import React from 'react';
import PropTypes from 'prop-types';
import NavigationPanel from '../components/NavigationPanel';

const AuthLayout = ({ children }) => {
  return (
    <>
      <NavigationPanel />
      {children}
    </>
  );
}

export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
