import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
export default function NavigationButton() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        backgroundColor: 'lightBG.main',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'primary.main',
          },
          '& .MuiTab-root': {
            color: 'secondary.main',
            ':hover': { scale: '0.95' },
            '&.Mui-selected': {
              color: 'primary.main',
            },
          },
        }}
      >
        <Tab onClick={() => navigate('/products/men')} label="MEN" />
        <Tab onClick={() => navigate('/products/women')} label="WOMEN" />
        <Tab onClick={() => navigate('/products/sneakers')} label="SNEAKERS" />
      </Tabs>
    </Box>
  );
}
