import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function NavigationButton() {
  const navigate = useNavigate();

  // ✅ read which section is active
  const currentSection = useSelector((state) => state.counter.query);

  // ✅ convert to tab index (visual only)
  const tabIndex =
    currentSection === 'men'
      ? 0
      : currentSection === 'women'
      ? 1
      : currentSection === 'sneakers'
      ? 2
      : false; // none selected if not matched

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        backgroundColor: 'lightBG.main',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Tabs
        value={tabIndex} // ✅ controls the visual selection
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
        <Tab label="MEN" onClick={() => navigate('/products/men')} />
        <Tab label="WOMEN" onClick={() => navigate('/products/women')} />
        <Tab label="SNEAKERS" onClick={() => navigate('/products/sneakers')} />
      </Tabs>
    </Box>
  );
}
