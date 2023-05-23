// import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './styles.scss';

function CircularIndeterminate() {
  return (
    <Box className="circulare" sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

CircularIndeterminate.propTypes = {

};

export default CircularIndeterminate;
