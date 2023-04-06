import './About.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';


class About extends React.Component {

componentDidMount(){
           window.scrollTo({ top: 0, behavior: "smooth" })
           document.title = ("Music Making Cents- " + this.props.title);
}

 
render() {
  
  return (
 //<Box justifyContent="left" alignItems="left" sx={{width: '80%'}}>
    <Card alignItems="left" justifyContent="left" style={{ border: "none", boxShadow: "none", backgroundColor: "transparent"}}  onClick={this.handelBio}>
        <CardActionArea style={{borderRadius: '50%'}} sx={{'&:hover': {opacity: [0.8, 0.7, 0.6],},}} >
          <Avatar
            alt="Jerry Sanders"
            src="./components/about/Jerry.jpg"
            sx={{ width: 'calc(50px + 25vmin)', height: 'calc(50px + 25vmin)'}}
          />
          
        </CardActionArea>
        
          <Typography variant="body2" align="center" justifyContent="center"> Jerry Sanders</Typography>
        </Card>
    //</Box>
     
  );
  
}
}
export default About;
