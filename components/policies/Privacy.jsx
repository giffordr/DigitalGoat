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


class Privacy extends React.Component {
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
  <div style={{ padding: "0in 0in 0in 0in" }}>
    <p
                className="MsoNormal"
                style={{ marginBottom: "15.0pt", border: "none", padding: "0in", alignItems:"center", justifyContent:"center" }}
              >
                <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                  <span style={{fontWeight:"bold", fontSize:"18px"}}>Privacy Policy</span> for <span style={{fontWeight:"bold", fontSize:"18px"}}>MusicMakingCents </span>
                </span>
              <br />
                <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
                  Last updated: 12/16/2022
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
        Thank you for visiting MusicMakingCents (the "Blog"). This privacy
        policy ("Policy") explains how we collect, use, and share information
        about you when you use our Blog and its related services, including any
        mobile applications and other online services that link to this Policy
        (collectively, the "Services").
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
        By using our Services, you agree to the collection, use, and sharing of
        your information as described in this Policy. If you do not agree with
        our policies and practices, do not use our Services.
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
        This Policy applies to all visitors and others who access the
        Services ("Users").
      </span>
    </p>
  </div>
        <Divider />
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
        <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
          Information We Collect
        </span>
      </li>
    </ol>
  </div>
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
      <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
        We may collect information about you in a variety of ways when you use
        our Services. The types of information we may collect include:
      </span>
    </p>
  </div>
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
          Personal information: This is information that identifies you as an
          individual, such as your name, email address, and phone number. We may
          collect personal information when you create an account, subscribe to
          our newsletter, or otherwise interact with our Services.
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
          Usage information: We may collect information about your use of our
          Services, such as the pages you visit, the links you click, and the
          searches you conduct.
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
          Device information: We may collect information about the devices you
          use to access our Services, including the type of device, operating
          system, and browser you use.
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
          Location information: We may collect information about your location
          when you use our Services, including through the use of GPS, IP
          address, or other location-related technologies.
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
          Information from third parties: We may receive information about you
          from third parties, such as social media platforms or other websites
          that use our Services.
        </span>
      </li>
    </ul>
    
  </div>
        <p>
        <Divider /></p>
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
      <p
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
        <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
          How We Use Your Information
        </span>
      </li>
    </ol>
        </p>
      <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
        We may use the information we collect about you for a variety of
        purposes, including to:
      </span>
    </p>
  </div>
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
          Provide, maintain, and improve our Services;
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
          Communicate with you, including by sending you newsletters, updates,
          and other marketing materials;
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
          Customize your experience and provide personalized recommendations;
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
          Analyze and understand how you use our Services;
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
          Detect, prevent, and address technical issues;
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
          Comply with legal obligations, such as responding to subpoenas or
          court orders; and
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
          Pursue other legitimate interests, as permitted by law.
        </span>
      </li>
    </ul>
    
  </div>
        <p><Divider /></p>
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
       <p
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
        <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
          Sharing Your Information
        </span>
      </li>
    </ol>
         </p>
      <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
        We may share your information with third parties in the following ways:
      </span>
    </p>
  </div>
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
          With service providers: We may share your information with third-party
          service providers that perform services on our behalf, such as
          hosting, analytics, and marketing. These service providers are
          required to maintain the confidentiality of your information and are
          not permitted to use your information for any purpose other than
          providing the Services on our behalf.
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
          With business partners: We may share your information with business
          partners for the purpose of jointly offering products or services.
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
          As required by law: We may disclose your information as required by
          law, such as to comply with a subpoena or other legal process.
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
          With your consent: We may share your information with third parties if
          you have given us your consent to do so.
        </span>
      </li>
    </ul>
     
    
  </div>
        <p><Divider /></p>
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
      <p
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
        <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
          Your Choices and Rights
        </span>
      </li>
    </ol>
        </p>
      <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
        You have certain choices and rights regarding the information we collect
        and how we use it. These include:
      </span>
    </p>
  </div>
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
          Opting out of marketing communications: You can opt out of receiving
          marketing communications from us by following the unsubscribe
          instructions in any marketing email that we send you, or by contacting
          us at info@musicmakingcents.com.
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
          Accessing, correcting, or deleting your information: You have the
          right to request access to the personal information that we have
          collected about you, as well as the right to request that we correct
          or delete any incorrect or incomplete personal information. You can
          make these requests by contacting us at info@musicmakingcents.com.
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
          Objecting to the processing of your information: You have the right to
          object to the processing of your personal information if you believe
          that it is not justified on legitimate grounds. You can make this
          request by contacting us at info@musicmakingcents.com.
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
          Withdrawing your consent: If you have given us your consent to process
          your personal information, you have the right to withdraw that consent
          at any time. You can withdraw your consent by contacting us at info@musicmakingcents.com.
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
          Complaining to a supervisory authority: If you have any concerns about
          our use of your personal information, you have the right to file a
          complaint with the relevant supervisory authority.
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
          California Consumer Privacy Act (CCPA): If you are a California
          resident, you have the right to request that we disclose to you the
          personal information that we have collected about you in the past 12
          months, as well as the right to request that we delete any personal
          information that we have collected about you. You can make these
          requests by contacting us at info@musicmakingcents.com. Please note that
          the CCPA allows us to retain certain personal information for business
          and legal purposes, such as for fraud prevention or to comply with a
          legal obligation.
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
          General Data Protection Regulation (GDPR): If you are a resident of
          the European Union, you have the following rights under the GDPR:
        </span>
      </li>
      <p
    style={{
      
      padding: "0in 0in 0in 5.0pt",
      marginLeft: ".25in",
      marginRight: "0in"
    }}
  >
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
          The right to be informed about the collection and use of your personal
          information;
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
          The right to access and request copies of your personal information;
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
          The right to rectify any incorrect or incomplete personal information;
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
          The right to erase your personal information (also known as the "right
          to be forgotten");
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
          The right to restrict the processing of your personal information;
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
          The right to object to the processing of your personal information;
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
          The right to data portability, which allows you to request that we
          transfer your personal information to another organization; and
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
          The right to withdraw your consent at any time.
        </span>
      </li>
        </p>
    </ul>
  </div>
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
      <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
        You can exercise these rights by contacting us at info@musicmakingcents.com. Please note that the GDPR allows us to retain certain personal
        information for business and legal purposes, such as for fraud
        prevention or to comply with a legal obligation.
      </span>
    </p>
  </div>
        <p><Divider /></p>
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
        <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
          Cookies and Other Tracking Technologies
        </span>
      </li>
    </ol>
  </div>
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
      <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
        We use cookies and other tracking technologies to improve your
        experience and to better understand how you use our Services.
      </span>
    </p>
  </div>
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
          Cookies: A cookie is a small file that is stored on your device when
          you visit a website. We use cookies to track your interactions with
          our Services and to personalize your experience. You can disable
          cookies by adjusting your browser settings, but doing so may affect
          your ability to use our Services.
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
          Web beacons: A web beacon is a small piece of code that is embedded on
          a web page or in an email. We may use web beacons to track your
          interactions with our Services and to understand how you interact with
          our emails.
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
          Google Analytics: We use Google Analytics to analyze how users use our
          Services. Google Analytics collects information such as the pages you
          visit, the links you click, and the searches you conduct. We use this
          information to understand how our Services are being used and to
          improve them. You can learn more about Google Analytics and how to opt
          out by visiting the Google Analytics website.
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
          Google AdSense: We use Google AdSense to display advertisements on our
          Services. Google AdSense may use cookies and web beacons to track your
          interactions with our Services and to understand how you interact with
          the advertisements. You can learn more about Google AdSense and how to
          opt out by visiting the Google AdSense website.
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
          Other tracking technologies: We may use other tracking technologies,
          such as pixels and tags, to track your interactions with our Services
          and to understand how you interact with our emails.
        </span>
      </li>
    </ul>
    
  </div>
        <p><Divider /></p>
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
       <p
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
        <span style={{ fontFamily: '"Segoe UI",sans-serif' }}>
          Children's Privacy
        </span>
      </li>
    </ol>
         </p>
      <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
        Our Services are not intended for children under the age of 13. If you
        are under 13, do not use our Services or provide any personal
        information about yourself to us. If we learn that we have collected
        personal information from a child under 13, we will delete that
        information as quickly as possible. If you believe that we might have
        any personal information from a child under 13, please contact us at
        info@musicmakingcents.com.
      </span>
    </p>
  </div>
        <p><Divider /></p>
  <div
    style={{
      
      padding: "0in 0in 0in 5.0pt",
      marginLeft: ".25in",
      marginRight: "0in"
    }}
  >
    <ol style={{ marginTop: "0in" }} start={7} type={1}>
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
          Changes to Our Privacy Policy
        </span>
      </li>
    </ol>
  </div>
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
      <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
        We may update our Privacy Policy from time to time to reflect changes to
        our policies and practices. We encourage you to review our Privacy
        Policy whenever you access our Services to stay informed about our
        information practices and your choices.
      </span>
    </p>
  </div>
        <p><Divider /></p>
  <div
    style={{
      
      padding: "0in 0in 0in 5.0pt",
      marginLeft: ".25in",
      marginRight: "0in"
    }}
  >
    <ol style={{ marginTop: "0in" }} start={8} type={1}>
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
  <div style={{  padding: "0in 0in 0in 0in" }}>
    <p
      className="MsoNormal"
      style={{ marginTop: "15.0pt", border: "none", padding: "0in" }}
    >
      <span style={{ fontFamily: '"Segoe UI",sans-serif', color: "black" }}>
        If you have any questions or concerns about our Privacy Policy or the
        information we collect and use, please contact us at
        info@musicmakingcents.com.
      </span>
    </p>
  </div>
</div>
        </Box>
        </Box>

      </div>
    
    );
  }
}
export default Privacy;
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
