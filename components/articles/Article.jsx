import './Articles.css';
import RatingBar from "./ratingBar.jsx";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';

import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import {Chart} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-doughnut-innertext";
import 'chartjs-plugin-style';
//import DoughnutText from './DoughnutText.jsx';

import Spotify from '../articles/streamingServices/spotify/Spotify';
import AppleMusic from '../articles/streamingServices/appleMusic/AppleMusic';
import ArticleList from '../articles/articleList';
import SimilarArticles from '../states/SimilarArticles'


ChartJS.register(ArcElement, Tooltip, Legend);


class Article extends React.Component {
    constructor(props){
    super(props);

    this.state={
        index: 1,
        model: window.articleModels.specificArticleModel(this.props.match.params.title)[0],
        name: this.props.match.params.subheader,
        fragment: <Spotify/>,
}
     this.changeIndex = this.changeIndex.bind(this);
     this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
}

rerenderParentCallback(model) {
   this.setState({model: model}),
   window.scrollTo({ top: 0, behavior: "smooth" })
  }

changeIndex (newIndex){
  this.setState({index: newIndex})
 }

componentDidMount(){
          window.scrollTo({ top: 0, behavior: "smooth" })
}


 
render() {
    
    if (this.state.name === 'Spotfiy') {
                        this.state.fragment = <Spotify/>
                       }
    if (this.state.name === 'Apple-Music') {
                        this.state.fragment = <AppleMusic/>
                       }
  
    return (
    
    <Box>
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
                        {this.state.fragment}
                      </Typography>
                  </div>      
            </CardContent>
          </div>
      </Card>
      <SimilarArticles subHeader={this.state.model.subHeader} mainHeader={this.state.model.header} callback={this.rerenderParentCallback}/>
     </Box>
    
    );
  }
}
export default Article;
//{window.articleModels.articleListModel().map((item,idx) => ( 
//<Typography sx={{ fontFamily: 'Georgia', weight:'bold'}} style={{color: "black"}} variant="h5" alignItems="left" align = "left">{item.name}</Typography>
//<RatingBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
//<Typography style={{color:"black"}} sx={{ fontFamily: 'Georgia'}} variant="h3" align="right" alignItems="right" justifyContent="right" display='flex' m='auto'> 
 //               {item.title}
 //             </Typography>