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
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Grid';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EastIcon from '@mui/icons-material/East';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMore from '../states/ExpandMore';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
//import Image from '../MMC_Logo.webp'
import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';

import LatestArticles from '../states/LatestArticles.jsx'


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import {Chart} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "chartjs-plugin-doughnut-innertext";
import 'chartjs-plugin-style';



const styles = {
    boxContainer: {
      
        backgroundImage: `url(../Triangle2.png)`,
        backgroundSize: "50vmin 50vmin",
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        
        
        
		
	}
        
        
        
    };



ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);


class Description extends React.Component {
constructor(props){
  super(props);
  this.state={
      
    descriptions: ["Leadership, Coaching, Mentorship, Team Building" , "Program Managment, Organization, Solutioning", "Value Stream, Lean Manufacturing, Continuous Improvement, Manufacturing Efficiency, Cycle/Takt Time Reduction", "Software Centric, Siemens NX Black Belt, Digital Twin, Software Automation",
                   "Tool Design, Jigs/Fixtures, Patterns, Molds", "Multi-access NC Programming, FAI Part Prove Out, Post-processor Development, Probing and Complex Alignments, Machine Connectivity, Machine Monitoring",
                   "Technology Transfer, xRL Maturation Evaluation, Training, Apprenticeship","Metrics, Measurments, KPIs, Dashboards",],
    description: "",  
    expand: false,
    datasetIndex: 0,
    dataIndex: 0,
    dataLabel: "none",
    transition: false,
    elementToScroll: false,
    datastuff: {
             
             type: 'doughnut',
             labels: ["Inspire","Manage","Optimize", "Support", "Create", "Machining", "Empower", "Measure"],
             datasets: [
               {
                 labels: ["Inspire","Manage","Optimize", "Support", "Create", "Machining", "Empower", "Measure"],
                 data: [12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5],
                 backgroundColor: [
                    "rgba(171,0,134, 1)",
                    "rgba(96,154,199, 1)",
                    "rgba(215,137,56, 1)",
                    "rgba(114,170,90, 1)",
                    "rgba(207,207,207, 1)",
                    "rgba(29,112,175, 1)",
                    "rgba(229,165,0, 1)",
                    "rgba(207,207,207, 1)",
                   ],
                 borderColor: [
                    "rgba(171,0,134, 1)",
                    "rgba(96,154,199, 1)",
                    "rgba(215,137,56, 1)",
                    "rgba(114,170,90, 1)",
                    "rgba(207,207,207, 1)",
                    "rgba(29,112,175, 1)",
                    "rgba(229,165,0, 1)",
                    "rgba(207,207,207, 1)",
                   ],
                 hoverBackgroundColor: [
                    "rgba(171,0,134, 0.6)",
                    "rgba(96,154,199, 0.6)",
                    "rgba(215,137,56, 0.6)",
                    "rgba(114,170,90, 0.6)",
                    "rgba(207,207,207, 0.6)",
                    "rgba(29,112,175, 0.6)",
                    "rgba(229,165,0, 0.6)",
                    "rgba(207,207,207, 0.6)",
                   ],
                 borderWidth: 0.4,
                 weight: 0.1,
                 spacing:10 ,
                 hoverOffset: 8,
                 datalabels: {
                    align: 'end',
                    backgroundColor: function(ctx) {
                      
                      return ctx.dataset.backgroundColor;
                    },
                    borderColor: '#F7F3F3',
                    borderWidth: 2,
                    borderRadius: 4,
                    color: 'white',

                    formatter: function(value, context) {
                          return context.chart.data.labels[context.dataIndex];
                        },
             
             
                   },
                 
                 
                 
               },
             ],
           },
    options: {
               cutout: "60%",
               responsive: true,
                layout: {
                  padding: 35
                   },
                maintainAspectRatio: true,
                centerText: {
                       color: "black",
                       value: "",
                       fontSize: 1,
                       fontSizeAdjust: 0 // increase font size 20% based on default font size
                     },
               
                plugins: {
                   legend: {
                       display: false,
                           },
                   tooltip: {
                     enabled: false,
                      callbacks: {
                       label: function(context) { 
                         var chartLabels = ["Inspire", "Manage", "Optimize", "Support", "Create", "Machining", "Empower", "Measure"];
                         var label = chartLabels[context.dataIndex];
                         return label;
                                                },
                                 }
                             },
                        },
                 onClick: (e, activeEls) => {
                        let datasetIndex = activeEls[0].datasetIndex;
                        let dataIndex = activeEls[0].index;
                        let datasetLabel = e.chart.data.datasets[datasetIndex].labels[dataIndex];
                        let value = e.chart.data.datasets[datasetIndex].data[dataIndex];
                        
                        //console.log("In click", datasetIndex, dataIndex, datasetLabel);
                        this.setState({expand: true, datasetIndex: datasetIndex, dataIndex: dataIndex, dataLabel: datasetLabel, description: this.state.descriptions[dataIndex], options: {centerText: {value: this.state.descriptions[dataIndex]}}});
                        //link to url with:[chartIds]
                      },
               
                          
               
                     
              },
      
    datastuff2: {
             
             labels: ["Automation", "Digitization", "Optimization"],
             datasets: [
               {
                 labels: ["Automation", "Digitization", "Optimization"],
                 data: [33,33,33],
                 backgroundColor: [
                    "rgba(29,112,175, 1)",
                    "rgba(96,154,199, 1)",
                    "rgba(229,165,0, 1)",
                    
                   ],
                 borderColor: [
                    "rgba(29,112,175, 1)",
                    "rgba(96,154,199, 1)",
                    "rgba(229,165,0, 1)",
                    
                   ],
                 hoverBackgroundColor: [
                    "rgba(29,112,175, 0.6)",
                    "rgba(96,154,199, 0.6)",
                    "rgba(229,165,0, 0.6)",
                    
                   ],
                 borderWidth: 0.4,
                 weight: 0.1,
                 spacing:0,
                 hoverOffset: 8,
                   
                 datalabels: {
                        align: 'center',
                        backgroundColor: function(ctx) {
                          
                          return ctx.dataset.backgroundColor;
                        },
                        borderColor: 'white',
                        borderWidth: 2,
                        borderRadius: 4,
                        color: 'white',

                        formatter: function(value, context) {
                              return context.chart.data.labels[context.dataIndex];
                            },
                 
                 
                       },
                   },
                 ],
               },
    
    options2: {
               cutout: "60%",
               responsive: true,
               layout: {
                  padding: 35
               },
               maintainAspectRatio: true,
               centerText: {
                       color: "black",
                       value: "",
                       fontSize: 1,
                       fontSizeAdjust: 0,  // increase font size 20% based on default font size
                     },
               
               plugins: {
                   
                   legend: {
                       display: false,
                           },
                   
                   tooltip: {
                     enabled: true,
                      callbacks: {
                       footer: function(context) { 
                         var chartLabels = ["Automation", "Digitization", "Optimization"];
                         var label = chartLabels[context.dataIndex];
                         return label;
                                                },
                                 }
                             },
                        },
                   
                   datalabels: {
                       
                        align: 'start',
                        color: 'white',
                        font: {
                          weight: 'bold'
                        },
                   },
                        
                
                onClick: (e, activeEls) => {
                        let datasetIndex = activeEls[0].datasetIndex;
                        let dataIndex = activeEls[0].index;
                        let datasetLabel = e.chart.data.datasets[datasetIndex].labels[dataIndex];
                        let value = e.chart.data.datasets[datasetIndex].data[dataIndex];
                        //console.log("In click", datasetIndex, dataIndex, datasetLabel);
                        this.setState({expand: true, datasetIndex: datasetIndex, dataIndex: dataIndex, dataLabel: datasetLabel, description: this.state.descriptions[dataIndex], options2: {centerText: {value: this.state.descriptions[dataIndex]}}});
                        
                        //link to url with:[chartIds]
                          },
               
                  
               
                     
              },
      
                           
     
      }
        this.firstElement = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
      
}


componentDidMount(){
          window.scrollTo({ top: 0, behavior: "smooth" })
          document.title = ("DigitalGoat- " + this.props.title);
          this.setState({transition: true});
          window.addEventListener('scroll', this.handleScroll);
      
}

handleScroll(e){
    var rect = this.firstElement;
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    this.setState({elementToScroll: true});
}
render() {
    
    var descriptions = {
        none:"",
        Inspire: "Leadership, Coaching, Mentorship, Team Building",
        Optimize: "Value Stream, Lean Manufacturing, Continuous Improvement, Manufacturing Efficiency, Cycle/Takt Time Reduction",
        Support: "Software Centric, Siemens NX Black Belt, Digital Twin, Software Automation",
        Create: "Tool Design, Jigs/Fixtures, Patterns, Molds",
        Machining: "Multi-access NC Programming, FAI Part Prove Out, Post-processor Development, Probing and Complex Alignments, Machine Connectivity, Machine Monitoring",
        Empower: "Technology Transfer, xRL Maturation Evaluation, Training, Apprenticeship",
        Measure: "Metrics, Measurments, KPIs, Dashboards",
        
    }; 
  
  return (
    
    <div>
    
      
      <Card sx={{maxWidth: '100%', maxHeight: 700, position: 'relative'}} style={{ border: "none", boxShadow: "none" }} square={true}>
          <CardMedia
            component="img"
            image="iStock-1370884809.jpg"
            alt="DigitalArt"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(0, 0, 0, 0)',
              color: 'white',
              padding: '10vmax',
            }}
            alignItems="center" justifyContent="center" m="auto"
          >
            <CardContent sx={{alignItems: 'center', justifyContent:'center', mx:'15vmin', mt:'10vmin', mb:'20vmin'}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}}>
              <Zoom in={this.state.transition} timeout={{enter: 1200}} easing={{enter: 'cubic-bezier(0.0, 0.0, 0, 1)'}}>
                <Typography style={{color:"white"}} sx={{ fontFamily: 'Arial', display: { xs: 'none', md: 'flex' } }} variant="h4" align="center" alignItems="center" justifyContent="center" mx='auto'> 
                     Digitally Transform Your Manufacturing Pipeline
                </Typography>
              </Zoom>
              
                 <Typography style={{color:"white"}} sx={{ fontFamily: 'Arial', display: { xs: 'flex', md: 'none' } }} variant="h5" align="center" alignItems="center" justifyContent="center" m='auto'> 
                     Digitally Transform Your Manufacturing Pipeline
                </Typography>
            </CardContent>
            
          </Box>
        </Card>
      <Card id = 'Header' sx={{maxWidth: '100%', height: '20%', minHeight: 200, maxHeight: 700}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
         <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
             <CardContent sx={{alignItems: 'center', justifyContent:'center', mx:'15vmin', mt:'10vmin', mb:'10vmin', display: { xs: 'flex', md: 'flex' }}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}}>   
                <Typography style={{color:"#969696"}} sx={{ fontFamily: 'Arial', display: { xs: 'none', md: 'flex' } }} variant="h4" align="center" alignItems="center" justifyContent="center" m='auto'> 
                     We optimize your manufacturing processes, accerlate throughput, and elevate your operations by integrating digital tools.
                </Typography>
                 <Typography style={{color:"#969696"}} sx={{ fontFamily: 'Arial', display: { xs: 'flex', md: 'none' } }} variant="h5" align="center" alignItems="center" justifyContent="center" m='auto'> 
                     We optimize your manufacturing processes, accerlate throughput, and elevate your operations by integrating digital tools.
                </Typography>
            </CardContent>
          </div>
      </Card>
        
    
      
    
       
          <Box sx={{maxWidth:1500}} alignItems="center" justifyContent="center" m='auto'>
              <Card sx={{ minWidth: 370}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}} alignItems="center" justifyContent="center" m="auto">
                 
                  <CardContent sx={{ margin: 0, padding:0 }} display="flex" alignItems="center" justifyContent="right" style={styles.boxContainer} m="auto">
                      <Grid container spacing={0} style={{display:"flex", maxWidth: "55vmin"}} direction="row" justifyContent="space-between" alignItems="center" mx="auto" mt="auto">
                          <Grid item>
                              <Typography variant="h6" style={{color:"darkGreen"}} sx={{ fontFamily: 'Arial', fontWeight:"bold" }}>
                                  STRATEGY
                              </Typography>
                          </Grid>
                          <Grid item>
                              <Typography variant="h6" style={{color:"darkGreen"}} sx={{ fontFamily: 'Arial', fontWeight:"bold" }}>
                                  TACTICS
                              </Typography>
                          </Grid>
                      </Grid>
                   {this.state.elementToScroll ?
                      <Grid container spacing={0} direction= "row" style={{ display: "flex", minHeight: 400, width:"80%"}} alignItems="center" justifyContent="center" mx="auto" my="auto" ref={this.firstElement}>    
                              <Grid item sx={{height: "100%", minWidth: "50vmin"}}  alignItems="center" justifyContent="center" mt='3vmin'> 
                                <Doughnut data = {this.state.datastuff2} options= {this.state.options2} m="auto" />
                              </Grid>
                              <Grid item sx={{height: "100%", minWidth: "50vmin"}} alignItems="center" justifyContent="center" mt='3vmin'> 
                                <Doughnut data = {this.state.datastuff} options= {this.state.options}  m='auto'/>
                              </Grid>
                      </Grid>
                          : "nothing"}
                      <Typography variant="h6" style={{color:"darkGreen"}} sx={{ fontFamily: 'Arial', fontWeight:"bold" }} align="center">
                          CONNECTED RESULTS
                        </Typography>
                  </CardContent>
                    
                
                  
                  <Collapse in={this.state.expand} timeout="auto" unmountOnExit>
                    
                      <Card style={{backgroundColor: "white"}}>
                          <Typography paragraph m="auto">
                            <span className ="Title" style={{ color: this.state.datastuff.datasets[this.state.datasetIndex].backgroundColor[this.state.dataIndex]}}>{this.state.dataLabel}:</span>
                              <Divider />
                          {this.state.description}
                          </Typography>
                      </Card>
                    
                  </Collapse>
                  
            </Card>
                
          </Box>
          
      
        
      <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center" justifyContent="center" mx="auto">      
        
      </Box>
          
     </div>   
     
    
    );
  }
}
export default Description;
      /*</div>
      <div>
        <Card sx={{maxWidth: '100%', maxHeight: 700, position: 'relative'}} style={{ border: "none", boxShadow: "none" }} square={true}>
          <CardMedia
            component="img"
            image="EEDAA25B-220C-4103-B764-44427E4CB54D_1_105_c.jpg"
            alt="Working in shop2"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(0, 0, 0, 0)',
              color: 'white',
              padding: '10vmax',
            }}
            alignItems="center" justifyContent="center" m="auto"
          >
            <Grid container justify="center" direction="column" alignItems="center" m="auto">
                <Typography variant="h4" align="center"> Have your bow repaired by someone that you trust</Typography>
                <p><Button href="/#/About" color="success" variant="contained" >About Me</Button></p>
            </Grid>
            
          </Box>
        </Card>
      </div>
      </div>*/

/*<Grid container rowSpacing={0} columnSpacing={35} display="flex" alignItems="center" justifyContent="center">
   
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Stack direction="column" spacing={1}>
              <Card sx={{maxWidth: 600, minWidth: 210}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
                <CardMedia
                  component="img"
                  image="Taylor-Sullivan-Bow-Repair.webp"
                  alt="Taylor Sullivan in Bow Repair Workshop"
                />
              </Card>
              <a href='#/About' ><Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h4">About Taylor<ArrowForwardIcon fontSize="medium"/></Typography></a>
              <Divider/>
              
              <p></p>
            </Stack>
          </Grid>

          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
               <Stack direction="column" spacing={1}>
                 <p></p>
                   <a href='#/Services' ><Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h4">Services<ArrowForwardIcon fontSize="medium"/></Typography></a>
                 <Divider/>
                   
                    <Card sx={{maxWidth: 600, minWidth: 210}} style={{border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
                      <CardMedia
                        component="img"
                        image="Taylor-Sullivan-Bow-Rehair-Workshop.webp"
                        alt="Taylor Sullivan Bow Rehair in Workshop"
                      />
                        
                    </Card>
                 </Stack>
             </Grid>
          
        </Grid>*/
