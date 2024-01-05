import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserInfo ({userName,handleLogout}) {

  return (
    <div>
      <Typography variant="h5">Bienvenue {userName} !</Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Se déconnecter
      </Button>
    </div>
  );
};
