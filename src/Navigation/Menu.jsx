import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Menu() {
  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(true);
  const handleFirstClick = () => {
    setOpenFirst(!openFirst);
  };
  const handleSecondClick = () => {
    setOpenSecond(!openSecond);
  };

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          10% cashback on every order
        </ListSubheader>
      }
    >
      <ListItemButton className="hover:scale-97">
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <ListItemButton className="hover:scale-97">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Cart" />
      </ListItemButton>
      <ListItemButton onClick={handleFirstClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Top Wear" />
        {openFirst ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openFirst} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} className="hover:scale-97">
            <ListItemIcon>
              <ManIcon />
            </ListItemIcon>
            <ListItemText primary="Men" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} className="hover:scale-97">
            <ListItemIcon>
              <WomanIcon />
            </ListItemIcon>
            <ListItemText primary="Women" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} className="hover:scale-97">
            <ListItemIcon>
              <ChildCareIcon />
            </ListItemIcon>
            <ListItemText primary="Kids" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleSecondClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Bottom Wear" />
        {openSecond ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSecond} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} className="hover:scale-97">
            <ListItemIcon>
              <ManIcon />
            </ListItemIcon>
            <ListItemText primary="Men" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} className="hover:scale-97">
            <ListItemIcon>
              <WomanIcon />
            </ListItemIcon>
            <ListItemText primary="Women" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} className="hover:scale-97">
            <ListItemIcon>
              <ChildCareIcon />
            </ListItemIcon>
            <ListItemText primary="Kids" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
