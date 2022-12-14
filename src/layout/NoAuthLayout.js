import React from 'react';
import PropTypes from 'prop-types';
import NavigationPanel from '../components/NavigationPanel';

const NoAuthLayout = ({ children }) => (
  <>
    <NavigationPanel />
    {children}
  </>
);

export default NoAuthLayout;

NoAuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
