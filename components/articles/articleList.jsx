import './Articles.css';
import RatingBar from "./ratingBar.jsx";
import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Tooltip2 from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Grid';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EastIcon from '@mui/icons-material/East';
import Fade from '@mui/material/Fade';
import {
  HashRouter, Route, Routes, Link, NavLink,
} from 'react-router-dom';


import CloseIcon from '@mui/icons-material/Close';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import {Chart} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-doughnut-innertext";
import 'chartjs-plugin-style';
//import DoughnutText from './DoughnutText.jsx';

import Spotify from '../articles/streamingServices/spotify/Spotify';



ChartJS.register(ArcElement, Tooltip, Legend);

const useStyles = makeStyles({
  content: {
    justifyContent: "center"
  }
});



class ArticleList extends React.Component {

  
constructor(props){
    super(props);
  
    this.state ={
        index: 1,
        search: '',
        category: '',
        sortScore: false,
        sortTitle: false,
        sortTTP: false,
        sortCost: false,
        sortReach: false,
        sortDifficulty: false,
        sortProfit: false,
        transition: false,
    };
  this.listUnsorted = window.articleModels.articleListModel();
  
  
  this.handleChangeBound = event => this.handleChange(event);
  this.handleSorting = this.handleSorting.bind(this);
  this.handleClickScore = this.handleClickScore.bind(this);
  this.handleClickTTP = this.handleClickTTP.bind(this);
  this.handleClickCost = this.handleClickCost.bind(this);
  this.handleClickProfit = this.handleClickProfit.bind(this);
  this.handleClickReach = this.handleClickReach.bind(this);
  this.handleClickDifficulty = this.handleClickDifficulty.bind(this);
  this.checkInView = this.checkInView.bind(this);
}
  
handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false});
  };



  
handleChange(event) {
  this.setState({search: event.target.value});
}

handleSorting(array) {

  const original = array.slice();
  let sortedArray = array.slice();
  const unsortedArray = this.listUnsorted;
  
  if(this.state.sortScore === true)
  {
       sortedArray = this.sortByScore(original)
  }
  if(this.state.sortTitle === true)
  {
       sortedArray = this.sortByTitle(original)
  }
  if(this.state.sortTTP === true)
  {
      sortedArray = this.sortByTTP(original)
  }
  if(this.state.sortCost === true)
  {
       sortedArray = this.sortByCost(original)
  }
  if(this.state.sortReach === true)
  {
       sortedArray = this.sortByReach(original)
  }
  if(this.state.sortDifficulty === true)
  {
       sortedArray = this.sortByDifficulty(original)
  }
  if(this.state.sortProfit === true)
  {
       sortedArray = this.sortByProfit(original)
  }
  else{
     sortedArray = original;
  }
  
  return sortedArray 
}
    
handleClickScore =(event) => {
    //this.props.changeIndex(this.state.index)
    //let nameOfButton = event.target.id;
    this.setState({sortScore: !this.state.sortScore})
    
}

handleClickTTP =(event) => {
    //this.props.changeIndex(this.state.index)
    this.setState({sortTTP: !this.state.sortTTP})
}
handleClickCost =(event) => {
    //this.props.changeIndex(this.state.index)
    this.setState({sortCost: !this.state.sortCost})
}
handleClickProfit =(event) => {
    //this.props.changeIndex(this.state.index)
    this.setState({sortProfit: !this.state.sortProfit})
}
handleClickDifficulty =(event) => {
    //this.props.changeIndex(this.state.index)
    this.setState({sortDifficulty: !this.state.sortDifficulty})
}
handleClickReach =(event) => {
    //this.props.changeIndex(this.state.index)
    this.setState({sortReach: !this.state.sortReach})
}

componentDidMount(){
          window.scrollTo({ top: 0, behavior: "smooth" });
          document.title = ("Music Making Cents- " + this.props.title);
          document.getElementsByTagName('meta')["description"].content = "How to make money with music: A comprehensive list of all of our articles and blog posts.";
         
};

checkInView(id){
  var myElement = document.getElementById(id);
  var bounding = myElement.getBoundingClientRect();
      
  if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
      console.log('Element is in the viewport!');
      return true
  } 
      
  else {
    console.log('Element is NOT in the viewport!');
      
  }
}

sortByScore(array){
  let sortedAr = array.sort((a,b) => b.score.toString().localeCompare(a.score, 'en', {numeric: true}));
  return sortedAr;
}
sortByTitle(array){
  let sortedAr = array.sort((a,b) => a.title.toString().localeCompare(b.title, 'en', {numeric: true}));
  return sortedAr;
}
sortByTTP(array){
  let sortedAr = array.sort((a,b) => b.TTP.toString().localeCompare(a.TTP, 'en', {numeric: true}));
  return sortedAr;
}
sortByCost(array){
  let sortedAr = array.sort((a,b) => b.cost.toString().localeCompare(a.cost, 'en', {numeric: true}));
  return sortedAr;
}
sortByReach(array){
  let sortedAr = array.sort((a,b) => b.reach.toString().localeCompare(a.reach, 'en', {numeric: true}));
  return sortedAr;
}
sortByDifficulty(array){
  let sortedAr = array.sort((a,b) => b.difficulty.toString().localeCompare(a.difficulty, 'en', {numeric: true}));
  return sortedAr;
}
sortByProfit(array){
  let sortedAr = array.sort((a,b) => b.profit.toString().localeCompare(a.profit, 'en', {numeric: true}));
  return sortedAr;
}


   
render() {

const theme  = createTheme({
  palette: {
    primary: {
      main: 'rgba(75, 192, 192, 1)',
      
    },
    
  },
});
  
  
  return (
      
    
<Box sx={{maxWidth:1100}} alignItems="center" justifyContent="center" m="auto" pt="75px" >
  <Accordion style={{ background: 'transparent'}} elevation={0}>
    
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
          '& .MuiAccordionSummary-content': {
          justifyContent: 'center'}
          }}
          >
          
           <TextField id="standard-basic" sx={{width: "60%"}} label="Search Articles" variant="standard" value={this.state.search} onChange={this.handleChangeBound}/>
          
        </AccordionSummary>
    
        <AccordionDetails >
          
          <Stack justifyContent="center" m="20" direction="row">
            <Typography variant="body" fontFamily="Arial" sx={{mr:2}}> Filter: </Typography>
            <ThemeProvider theme={theme}>
             <FormGroup row>
               <FormControlLabel control={<Switch size="small" onChange={this.handleClickScore} color="primary"/>} label="Score" />
               <FormControlLabel control={<Switch size="small" onChange={this.handleClickTTP} />} label="TTP" />
               <FormControlLabel control={<Switch size="small" onChange={this.handleClickCost} />} label="Cost" />
               <FormControlLabel control={<Switch size="small" onChange={this.handleClickReach} />} label="Reach" />
               <FormControlLabel control={<Switch size="small" onChange={this.handleClickDifficulty} />} label="Difficulty" />
               <FormControlLabel control={<Switch size="small" onChange={this.handleClickProfit} />} label="Profit" />
             </FormGroup>
            </ThemeProvider>
          </Stack>
          
        </AccordionDetails>
  </Accordion>
    
  {window.articleModels.articleListModel().find(element => element.title.toLowerCase().includes(this.state.search.toLowerCase())) ?
  
  <div style={{ width:"100%", margin: "0 auto", alignItems:"center"}} >
      
    {this.handleSorting(window.articleModels.articleListModel()).filter(element => element.title.toLowerCase().includes(this.state.search.toLowerCase())).map((item,idx) => (   
      //{window.articleModels.articleListModel().map((item,idx) => (
        
      
    <span>
      <Grid container spacing={0} direction="column" justifyContent="center" p="5px" sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Fade in={this.checkInView}>     
        <Card sx={{ minWidth: 350, width:"100%", maxHeight: 400, "&:hover": { transform: 'scale(1.01)', transition: 'transform .4s'} }} id={item.id}>
          <CardActionArea component={NavLink} to={"/Articles/"+item.header+"/"+item.subHeader+"/"+item.title} onClick={() => this.props.changeIndex(idx)}>
            <CardContent >

                   <Grid container spacing={3} style={{ display: "flex"}}>
                       
                       <Grid xs={4} item style={{  alignItems: "center" }}>
                            
                              <Doughnut data = {item.datastuff} options= {item.options}/>
                         
                             
                        </Grid>
                       
                        
                        <Grid xs={3} container item direction="column" sx={{maxWidth: 140}} >  
                            {item.data.map((item, idx) => (
                                 
                                <Grid item>
                                  <Tooltip2 title={<React.Fragment>
                                        <Typography variant="body" fontFamily="Arial" display="block" fontWeight="bold" color="inherit">{item.tooltipTitle}</Typography>
                                        <Typography variant="body" fontFamily="Arial"> {item.tooltipStart}</Typography>
                                        <Typography variant="body" fontFamily="Arial" color="rgba(75, 192, 192, 1)"> {item.tooltipGreen}</Typography>
                                        <Typography variant="body" fontFamily="Arial"> {item.tooltipMiddle}</Typography>
                                        <Typography variant="body" fontFamily="Arial" color="rgba(255, 99, 132, 0.6)"> {item.tooltipRed}</Typography>
                                        <Typography variant="body" fontFamily="Arial"> {item.tooltipEnd}</Typography>
                                      </React.Fragment>}>
                                    <Typography sx={{ fontFamily: 'Arial'}} style={{color: "black"}} variant="body">{item.name}</Typography>
                                  </Tooltip2>
                                      
                                      
                                  
                                  <RatingBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                                 </Grid>
                                   
                              ))}
                        </Grid>
                        
                    
                    <Grid xs={5} container item direction="row" justifyContent="space-between" alignItems="flex-end" >
                            
                          <Grid item xs={12}>
                                <Typography style={{color:"black"}} sx={{ fontFamily: 'Arial', fontWeight:'bold'}} variant="h4"> 
                                    {item.title}
                                </Typography>
                              
                          </Grid>
                              
                          <Grid item >
                              <Box  display="flex" justifyContent="flex-end" >
                                  <EastIcon fontSize="large" />
                              </Box>
                          </Grid>
                              
                        </Grid>
                       
                   </Grid>

               </CardContent> 
              
           </CardActionArea>
          </Card>
        </Fade>

     </Grid>
   
    
    
    
    <Grid container spacing={0} direction="column" justifyContent="center" p="5px" sx={{ display: { xs: 'flex', md: 'none' } }}>
          
        <Card sx={{ minWidth: 350, width:"100%", maxHeight: 450, "&:hover": { transform: 'scale(1.01)', transition: 'transform .4s'} }} >
          <CardActionArea component={NavLink} to={"/Articles/"+item.header+"/"+item.subHeader+"/"+item.title} onClick={() => this.props.changeIndex(idx)}>
          <CardContent >
 
                   <Grid container spacing={3} style={{ display: "flex"}}>
                       
                       <Grid xs={6} item style={{  alignItems: "center" }}>
                            
                              <Doughnut data = {item.datastuff} options= {item.options}/>
                             
                        </Grid>
                       
                        
                        <Grid xs={6} container item direction="column" sx={{maxWidth: 400}} >  
                            {item.data.map((item, idx) => (<Grid item>
                                <Tooltip2 title={<React.Fragment>
                                        <Typography variant="body" fontFamily="Arial" display="block" fontWeight="bold" color="inherit">{item.tooltipTitle}</Typography>
                                        <Typography variant="body" fontFamily="Arial"> {item.tooltipStart}</Typography>
                                        <Typography variant="body" fontFamily="Arial" color="rgba(75, 192, 192, 1)"> {item.tooltipGreen}</Typography>
                                        <Typography variant="body" fontFamily="Arial"> {item.tooltipMiddle}</Typography>
                                        <Typography variant="body" fontFamily="Arial" color="rgba(255, 99, 132, 0.6)"> {item.tooltipRed}</Typography>
                                        <Typography variant="body" fontFamily="Arial"> {item.tooltipEnd}</Typography>
                                      </React.Fragment>}>
                                    <Typography sx={{ fontFamily: 'Arial'}} style={{color: "black"}} variant="body">{item.name}</Typography>
                                  </Tooltip2>
                                <RatingBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                               </Grid>))}
                        </Grid>
                        
                    
                        <Grid xs={12} container item direction="row" justifyContent="space-between" alignItems="flex-end">
                          <Grid xs={10} item>
                            <Typography style={{color:"black"}} sx={{ fontFamily: 'Arial', fontWeight:'bold'}} variant="h4"> 
                              {item.title}
                            </Typography>
                          </Grid>
                          <Grid xs={2} item >
                              <Box display="flex" justifyContent="flex-end" >
                                  <EastIcon fontSize="large" />
                              </Box>
                          </Grid>
                        </Grid>
                       
                   </Grid>
              </CardContent>
            </CardActionArea> 
          </Card>
        </Grid>
    </span>
   
      ))}
    
  </div> : <div> Sorry! We haven't posted an article on that topic yet. We'd love to hear your suggestions on what to cover next! Leave a suggestion here. </div> }
       
</Box>
    
    );
  }
}
export default ArticleList;
//<Typography sx={{ fontFamily: 'Georgia', weight:'bold'}} style={{color: "black"}} variant="h5" alignItems="left" align = "left">{item.name}</Typography>
//<RatingBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
//<Typography style={{color:"black"}} sx={{ fontFamily: 'Georgia'}} variant="h3" align="right" alignItems="right" justifyContent="right" display='flex' m='auto'> 
 //               {item.title}
 //             </Typography>
