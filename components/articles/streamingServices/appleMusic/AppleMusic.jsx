import './Description.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Grid';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EastIcon from '@mui/icons-material/East';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';



class AppleMusic extends React.Component {
constructor(props){
    super(props);

    this.state={
        model:"" //window.articleModels.specificArticleModel(this.props.match.params.title)[0]
}
}

componentDidMount(){
          window.scrollTo({ top: 0, behavior: "smooth" })
          document.getElementsByTagName('meta')["description"].content = "Is Apple Music profitable? We walk you through the numbers, and breakdown how to make money with music.";
}
render() {
  
  
    return (
    
    
    <Card id = 'Header' sx={{maxWidth: '100%', height: '20%', minHeight: 200, maxHeight: 700}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
         <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
             <CardContent sx={{alignItems: 'center', justifyContent:'center', mx:'15vmin', mt:'10vmin', mb:'15vmin'}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}}>   
                  <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial', display: { xs: 'none', md: 'flex' } }} variant="h4" align="center" alignItems="center" justifyContent="center" m='auto'> 
                       {this.state.model.title}
                  </Typography>
                   <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial', display: { xs: 'flex', md: 'none' } }} variant="h5" align="center" alignItems="center" justifyContent="center" m='auto'> 
                       {this.state.model.title}
                  </Typography>
                  <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial', fontSize: 12}} variant="body" align="center" alignItems="center" justifyContent="center" m='auto'> 
                       Written By: {this.state.model.author}
                  </Typography>
                  <p></p>
                  <div>
                      <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial',  }} variant="body" align="center" alignItems="center" justifyContent="center" m='auto'> 
                            This is different and whatnot from the other one
                      </Typography>
                  </div>      
            </CardContent>
          </div>
      </Card>
    
    );
  }
}
export default AppleMusic;
     
