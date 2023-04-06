import './AppBar.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';


const pages = ['Services', 'About', 'Contact'];
const pages2 = ['Home', 'Services', 'About', 'Contact'];



function ElevationScroll(props) {
  
  
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: trigger ? {backdropFilter:"blur(10px)"} : {backdropFilter:"none"}
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function ElevateAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <React.Fragment>
      <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar style={{ background: 'transparent'}}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                
                
                <Box sx={{flexGrow: 1, justifyContent: 'left', display: { xs: 'none', md: 'flex' } }} display="flex" alignItems="left" justifyContent="left" mx = 'auto'>
                  <Link to="/" sx={{color: '#969696'}}>
                    
                      <Typography style={{color:"#969696"}} sx={{fontFamily: 'Arial', fontWeight: 'bold' }} variant="h4"> 
                       Digital Goat
                      </Typography>
                        
                    
                    </Link>
                </Box>
                
                <Box sx={{ flexGrow: 0.73, display: { xs: 'none', md: 'flex' } }} display="flex" alignItems="right" justifyContent="right" >
                  {pages.map((page) => (

                  <Link to={"/"+page} sx= {{color: '#969696', fontFamily:'Arial'}}>
                    <Button
                      key={page}
                      sx={{ my: 2, color: "#969696", display: 'block',fontFamily: 'Arial', textTransform: 'none' }}
                      
                    >
                      {page}
                    </Button>
                    </Link>
                  ))}
                </Box>
                
                
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} display="flex" alignItems="right" justifyContent="right" >
              
                  
                  <IconButton  onClick={handleOpenNavMenu}>
                    <MenuIcon />
                  </IconButton>
                    
                  <Menu
                    sx={{ mt: '45px',fontFamily: 'Georgia' }}
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    {pages2.map((page) => (
                    
                    <Link to={"/"+page} sx= {{color: '#444242', fontFamily:'Georgia'}}>
                      <MenuItem key={page} >
                        <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Georgia' }} textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                    ))}
                  </Menu>
                  
                </Box>
              </Toolbar>  
            </Container>     
          </AppBar>
        </ElevationScroll>
    
    
      
        
         
    </React.Fragment>
  );
}
//sx={{backdropFilter:"blur(10px)"}}