import './States.css';
//import logo from 'IMG_0004.png';
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import {
  Link, NavLink
} from 'react-router-dom';

//import { Router, Route, browserHistory, IndexRoute } from 'react-router'
//import { createBrowserHistory, history } from 'history'


import {
  HashRouter, BrowserRouter as Router, Route, Routes, Switch, Redirect, 
} from 'react-router-dom';
//import {
//  Switch
//} from 'react-router-dom';

// Import all components


import Contact from '../contact/Contact';
import About from '../about/About';
import Description from '../description/Description';
import ElevateAppBar from '../states/ElevateAppBar';
import ArticleList from '../articles/articleList';
import Article from '../articles/Article';
import Privacy from '../policies/Privacy';
import Cookies from '../policies/Cookies';

import CloseIcon from '@mui/icons-material/Close';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import {Chart} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-doughnut-innertext";
import 'chartjs-plugin-style';



ChartJS.register(ArcElement, Tooltip, Legend);

class States extends React.Component {
constructor(props){
  super(props);
  this.state={
    articleIndex: 1,
    
  }
  this.changeIndex = this.changeIndex.bind(this);
}
  
  changeIndex = (newIndex) =>{
    this.setState({articleIndex: newIndex})
  }
  handleButtonClick(buttonName, event) {
    this.setState({ buttonWasClicked: buttonName });
  }
    // Create state
  state = {
    buttonWasClicked: '',
  };


  render() {
    window.prerender = (path) => new Promise(resolve => {
        history.push(path);
        /* make sure that the client-side rendering is complete, then */
        resolve(document.documentElement.outerHTML);
      });
   
  
  return (
    <div className="App"> 
      <HashRouter >
        
          <ElevateAppBar/>

           <div className="App-color">
          
              <Switch>
                <Route path="/home" render={props => (
                  <Description {...props} title="Home" />
                  )}/> 
                <Route exact path="/About" render={props => (
                    <About {...props} title="About" />
                    )}/> 
               
                <Route path="/Contact" render={props => (
                  <Contact {...props} title="Contact" />
                  )}/> 
                <Route exact path="/Articles" render={props => <ArticleList changeIndex={this.changeIndex} {...props} title="Articles"/> } />
                <Route path="/Articles/:header/:subheader/:title" render={props => <Article articleIndex={this.state.articleIndex} changeIndex={this.changeIndex} {...props} /> } /> 
                
                <Route exact path="/" render={props => (
                  <Description {...props} title="Home" />
                    )}/>
                <Route path="/Privacy" render={props => (
                  <Privacy {...props} title="Privacy Policy" />
                  )}/>
                <Route path="/Cookies" render={props => (
                  <Cookies {...props} title="Cookie Policy" />
                  )}/>
                
              </Switch>
        </div>
          
      <footer className="App-footer">
        
        <Box sx={{width:'100%'}} align-items="left" align="left" m='3vmax'>
          
            
            <Stack justifyContent="space-between" direction="row" display="flex" p='2vmax'> 
              
              <Stack display="flex" direction="column">
                <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial' }} variant="h5" align="left"> 
                   Digital Goat
                </Typography> 
                
                <p>
                    <Stack align-items="left" justifyContent="space-between" direction="row" display="flex"> 
                     <Stack display="flex" direction="row" spacing={1} align="left">
                       <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial', fontSize: 11}} variant="body" align="left" component={Link} to={"/Privacy"} > 
                         Privacy Policy |
                        </Typography>
                       <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial', fontSize: 11}} variant="body" align="left"> 
                         Copywrite |
                        </Typography>
                       <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial', fontSize: 11}} variant="body" align="left" component={Link} to={"/Cookies"}> 
                         Cookies
                        </Typography>
                     </Stack>
                    </Stack> 
                </p>
                
              </Stack>
                
              <Card sx={{minWidth: 90, maxWidth: 115, display: { xs: 'none', md: 'flex' }}} style={{border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
                  <CardMedia
                    component="img"
                    image="../MMC_Logo.webp"
                    alt="MMC Logo"
                  />
              </Card>
              <Card sx={{minWidth: 70, maxWidth: 100, display: { xs: 'flex', md: 'none' }}} style={{border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
                  <CardMedia
                    component="img"
                    image="../MMC_Logo.webp"
                    alt="MMC Logo"
                  />
              </Card>
                
            </Stack>
                
              
              
            
                
              
        
        </Box>
          
        
      </footer> 
      
      </HashRouter>
    </div>
  );
  
}

}
export default States;
 //onClick={e => this.handleButtonClick(e.first_name + " " + e.last_name, e)}>{e.first_name + " " + e.last_name}
/*<Stack>
            
           <Stack direction="row" spacing={2}>
            <LocationOnIcon/>
             <Typography variant="body" align="center"> 
               1689 Amberwood Dr, Apt 106, South Pasadena, CA 91030
            </Typography>
           </Stack>
            <Stack direction="row" spacing={2}>
              <PhoneIcon/>
              <Typography variant="body" align="center"> 
                 (626) 658-7933
              </Typography>
            </Stack>
              <Stack direction="row" spacing={2}>
                <EmailIcon/>
                <Typography variant="body" align="center"> 
                   taylorsullivanbows@gmail.com
                </Typography>
              </Stack>
             <Stack direction="row" spacing={2}>
                <InstagramIcon/>
                <Typography variant="body" align="center"> 
                   @taylorsullivanbows
                </Typography>
              </Stack>
                
             
            
          </Stack>*/