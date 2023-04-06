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
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';

import LatestArticles from '../states/LatestArticles.jsx'


class Cookies extends React.Component {
constructor(props){
  super(props);
  this.state={
    unique: [...new Set(window.articleModels.articleListModel().map(el => (el.category)))],
    transition: false,
  }
}
  

componentDidMount(){
          window.scrollTo({ top: 0, behavior: "smooth" })
          document.title = ("Music Making Cents- " + this.props.title);
          this.setState({transition: true});
}
render() {
  
  return (
    <div className="Body">
      
    <Box sx={{maxWidth:1100}} alignItems="center" justifyContent="center" m='auto'>    
    
      
      <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center" justifyContent="center" mx="auto" mt="5vmin">      
        <div className="WordSection1">
            <div style={{padding: "0in 0in 0in 0in" }}>
              <p
                className="MsoNormal"
                style={{ marginBottom: "15.0pt", border: "none", padding: "0in", alignItems:"center", justifyContent:"center" }}
              >
                <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                  <span style={{fontWeight:"bold", fontSize:"18px"}}>Cookie Policy</span> for <span style={{fontWeight:"bold", fontSize:"18px"}}>MusicMakingCents </span>
                </span>
              <br />
                <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                  Last updated: 12/16/2022
                </span>
              </p>
              <Divider />
              
              <div style={{marginLeft:"15.0pt"}}>
                <p
                  className="MsoNormal"
                  style={{
                    marginTop: "15.0pt",
                    marginRight: "0in",
                    marginBottom: "15.0pt",
                    marginLeft: "0in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                    Our website, MusicMakingCents (the "Website"), uses cookies and other
                    tracking technologies to improve your experience and to better
                    understand how you use our Services. This cookie policy ("Policy")
                    explains what cookies are, how we use them, and how you can control
                    them.
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{
                    marginTop: "15.0pt",
                    marginRight: "0in",
                    marginBottom: "15.0pt",
                    marginLeft: "0in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                    By using our Website, you consent to the use of cookies and other
                    tracking technologies in accordance with this Policy. If you do not
                    agree with our policies and practices, do not use our Website.
                  </span>
                </p>
                </div>
            </div>
          <Divider />
          <div style={{marginLeft:"15.0pt"}}>
            <div
              style={{
                
                padding: "0in 0in 0in 5.0pt",
                marginLeft: ".25in",
                marginRight: "0in"
              }}
            >
              <ol style={{ marginTop: "0in" }} start={1} type={1}>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <p style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    What are Cookies?
                  </p>
                </li>
              </ol>
              </div>
            </div>
          <div style={{marginLeft:"15.0pt"}}>
            <div style={{ padding: "0in 0in 0in 0in" }}>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "15.0pt",
                  marginRight: "0in",
                  marginBottom: "15.0pt",
                  marginLeft: "0in",
                  border: "none",
                  padding: "0in"
                }}
              >
                <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                  A cookie is a small file that is stored on your device when you visit a
                  website. Cookies are widely used to track your interactions with
                  websites and to personalize your experience.
                </span>
              </p>
            </div>
            </div>
          <Divider />
          <div style={{marginLeft:"15.0pt"}}>
            <div
              style={{
                
                padding: "0in 0in 0in 5.0pt",
                marginLeft: ".25in",
                marginRight: "0in"
              }}
            >
              
            </div>
            </div>
          <Divider />
          <div style={{marginLeft:"15.0pt"}}>
            <div style={{  padding: "0in 0in 0in 0in" }}>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "15.0pt",
                  marginRight: "0in",
                  marginBottom: "15.0pt",
                  marginLeft: "0in",
                  border: "none",
                  padding: "0in"
                }}
              >
                <div
              style={{
                
                padding: "0in 0in 0in 5.0pt",
                marginLeft: ".25in",
                marginRight: "0in"
              }}
            >
                <ol style={{ marginTop: "0in" }} start={2} type={1}>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <p style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    How We Use Cookies
                  </p>
                </li>
              </ol>
                  </div>
                <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                  We use cookies for a variety of purposes, including to:
                </span>
              </p>
            </div>
            </div>
          
            <div style={{marginLeft:"15.0pt"}}>
            <div
              style={{
                
                padding: "0in 0in 0in 5.0pt",
                marginLeft: ".25in",
                marginRight: "0in"
              }}
            >
              <ul style={{ marginTop: "0in" }} type="disc">
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    Track your interactions with our Website and to personalize your
                    experience;
                  </span>
                </li>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    Understand how you use our Website and to improve it; and
                  </span>
                </li>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    Display advertisements on our Website.
                  </span>
                </li>
              </ul>
              
            </div>
              </div>
          <p>
          <Divider />
            </p>
          <div style={{marginLeft:"15.0pt"}}>
            <div style={{  padding: "0in 0in 0in 0in" }}>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "15.0pt",
                  marginRight: "0in",
                  marginBottom: "15.0pt",
                  marginLeft: "0in",
                  border: "none",
                  padding: "0in"
                }}
              >
                <div
              style={{
                
                padding: "0in 0in 0in 5.0pt",
                marginLeft: ".25in",
                marginRight: "0in"
              }}
            >
                <ol style={{ marginTop: "0in" }} start={3} type={1}>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
          
                  <p style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    Types of Cookies
                  </p>
                </li>
              </ol>
                  </div>
                <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                  There are several types of cookies that we may use on our Website:
                </span>
              </p>
            </div>
            </div>
          <div style={{marginLeft:"15.0pt"}}>
            <div
              style={{
               
                padding: "0in 0in 0in 5.0pt",
                marginLeft: ".25in",
                marginRight: "0in"
              }}
            >
              <ul style={{ marginTop: "0in" }} type="disc">
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    Essential cookies: These are necessary for the proper functioning of
                    our Website. They include, for example, cookies that enable you to log
                    into secure areas of our Website.
                  </span>
                </li>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    Analytical cookies: These allow us to recognize and count the number
                    of visitors to our Website, and to understand how they use it. This
                    helps us to improve the way our Website works, for example, by
                    ensuring that users are finding what they are looking for easily.
                  </span>
                </li>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    Advertising cookies: These are used to deliver advertisements that are
                    relevant to you. They may be used to track your interactions with our
                    Website and to personalize your experience.
                  </span>
                </li>
              </ul>
              
            </div>
            </div>
          <p>
          <Divider />
            </p>
          <div style={{marginLeft:"15.0pt"}}>
            
            <div style={{  padding: "0in 0in 0in 0in" }}>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "15.0pt",
                  marginRight: "0in",
                  marginBottom: "15.0pt",
                  marginLeft: "0in",
                  border: "none",
                  padding: "0in"
                }}
              >
                
                <div
              style={{
                
                padding: "0in 0in 0in 5.0pt",
                marginLeft: ".25in",
                marginRight: "0in"
              }}
            >
                
              <ol style={{ marginTop: "0in" }} start={4} type={1}>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  
                  <p style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    Controlling Cookies
                  </p>
                </li>
              </ol>
                  </div>
                <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                  You have the right to decide whether to accept or reject cookies. You
                  can exercise this right by adjusting your browser settings, but doing so
                  may affect your ability to use our Website.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "15.0pt",
                  marginRight: "0in",
                  marginBottom: "15.0pt",
                  marginLeft: "0in",
                  border: "none",
                  padding: "0in"
                }}
              >
                <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                  If you would like to learn more about cookies and how to control them,
                  you can visit the following resources:
                </span>
              </p>
            </div>
            </div>
          
          <div style={{marginLeft:"15.0pt"}}>
            <div
              style={{
                
                padding: "0in 0in 0in 5.0pt",
                marginLeft: ".25in",
                marginRight: "0in"
              }}
            >
              <ul style={{ marginTop: "0in" }} type="disc">
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    The Interactive Advertising Bureau's (IAB) Guide to Online Advertising
                    Cookies:{" "}
                  </span>
                  <span style={{ color: "windowtext" }}>
                    <a
                      href="https://www.iab.com/guidelines/iab-guide-to-online-advertising-cookies/"
                      target="_new"
                    >
                      <span
                        style={{
                          fontFamily: '"Segoe UI",sans-serif',
                          color: "blue",
                          
                          padding: "0in"
                        }}
                      >
                        https://www.iab.com/guidelines/iab-guide-to-online-advertising-cookies/
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    The European Interactive Digital Advertising Alliance (EDAA):{" "}
                  </span>
                  <span style={{ color: "windowtext" }}>
                    <a href="https://www.youronlinechoices.eu/" target="_new">
                      <span
                        style={{
                          fontFamily: '"Segoe UI",sans-serif',
                          color: "blue",
                          
                          padding: "0in"
                        }}
                      >
                        https://www.youronlinechoices.eu/
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    The Network Advertising Initiative (NAI):{" "}
                  </span>
                  <span style={{ color: "windowtext" }}>
                    <a href="https://www.networkadvertising.org/" target="_new">
                      <span
                        style={{
                          fontFamily: '"Segoe UI",sans-serif',
                          color: "blue",
                          
                          padding: "0in"
                        }}
                      >
                        https://www.networkadvertising.org/
                      </span>
                    </a>
                  </span>
                </li>
              </ul>
              
            </div>
            </div>
          <p>
          <Divider />
            </p>
          <div style={{marginLeft:"15.0pt"}}>
            <div style={{ padding: "0in 0in 0in 0in" }}>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "15.0pt",
                  marginRight: "0in",
                  marginBottom: "15.0pt",
                  marginLeft: "0in",
                  border: "none",
                  padding: "0in"
                }}
              >
                <div
              style={{
                
                padding: "0in 0in 0in 5.0pt",
                marginLeft: ".25in",
                marginRight: "0in"
              }}
            >
                <ol style={{ marginTop: "0in" }} start={5} type={1}>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <p style={{ fontFamily: '"Segoe UI",sans-serif' }}>
                    Changes to Our Cookie Policy
                  </p>
                </li>
              </ol>
                  </div>
                <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                  We may update our Cookie Policy from time to time to reflect changes to
                  our policies and practices. We encourage you to review our Cookie Policy
                  whenever you access our Website to stay informed about our use of
                  cookies and other tracking technologies.
                </span>
              </p>
            </div>
            </div>
          <div style={{marginLeft:"15.0pt"}}>
            <div
              style={{
               
                padding: "0in 0in 0in 5.0pt",
                marginLeft: ".25in",
                marginRight: "0in"
              }}
            >
              
            </div>
            </div>
          <Divider />
            <div style={{marginLeft:"15.0pt"}}>
            <div style={{  padding: "0in 0in 0in 0in" }}>
              <p
                className="MsoNormal"
                style={{ marginTop: "15.0pt", border: "none", padding: "0in" }}
              >
                <div
              style={{
                
                padding: "0in 0in 0in 5.0pt",
                marginLeft: ".25in",
                marginRight: "0in"
              }}
            >
                <ol style={{ marginTop: "0in" }} start={6} type={1}>
                <li
                  className="MsoNormal"
                  style={{
                    color: "black",
                    marginLeft: ".25in",
                    border: "none",
                    padding: "0in"
                  }}
                >
                  <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>Contact Us</span>
                </li>
              </ol>
                  </div>
                <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                  If you have any questions or concerns about our Cookie Policy or the use
                  of cookies on our Website, please contact us at
                  info@musicmakingcents.com.
                </span>
              </p>
            </div>
              </div>
            <p className="MsoNormal">
              <span style={{ color: "black" }}>&nbsp;</span>
            </p>
          </div>
          
          

      </Box>
    </Box>
      
        
      </div>
      
    
    );
  }
}
export default Cookies;
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
