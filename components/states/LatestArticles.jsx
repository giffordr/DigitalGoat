import './States.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';

import {
  HashRouter, BrowserRouter, Route, Routes, Link, Switch, NavLink,
} from 'react-router-dom';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-doughnut-innertext";
import 'chartjs-plugin-style';

ChartJS.register(ArcElement, Tooltip, Legend);



class LatestArticles extends React.Component {
constructor(props){
  super(props);
  this.state={
    articleIndex: 1,
    sortedModel: window.articleModels.articleListModel(),
  }
  this.changeIndex = this.changeIndex.bind(this);
   this.sortByDate = this.sortByDate.bind(this);
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

componentDidMount(){
    this.sortByDate(window.articleModels.articleListModel())
  }

sortByDate(array){
  let sortedAr = array.sort((a,b) => new Date(b.dateCreated) - new Date(a.dateCreated));
  this.setState({sortedModel: sortedAr})

}

  render() {
  
  return (
    <Box sx={{maxWidth:1200}} alignItems="center" justifyContent="center" m="auto" pt="75px">
      
      <Typography style={{color:"#444242"}} variant='h5' fontFamily="Arial" fontWeight="bold"> Latest Articles </Typography>
      <Divider/>
      <p></p>
      
      <Grid container sx={{ flexGrow: 1, maxWidth: 1100 }} rowSpacing={1} display="flex" alignItems="center" justifyContent="center" m="auto">
        
        <Grid item display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{maxWidth:350, minWidth: 340}}>
              <CardActionArea component={NavLink} to={"/Articles/"+this.state.sortedModel[0].header+"/"+this.state.sortedModel[0].subHeader+"/"+this.state.sortedModel[0].title}>
                
                <CardContent>
                  <Grid container spacing={1} style={{ display: "flex"}}>
                    <Grid xs={12} item>
                      <Doughnut data = {this.state.sortedModel[0].datastuff} options= {this.state.sortedModel[0].options}/>
                    </Grid>
                    <Grid xs={12} item>
                      <Typography variant="h5" fontFamily="Arial">{this.state.sortedModel[0].title}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                  
              </CardActionArea>
            </Card>
        </Grid>
        
        <Grid item display="flex" alignItems="center" justifyContent="center" m="auto">
          <Card sx={{maxWidth:350, minWidth: 340}}>
            <CardActionArea component={NavLink} to={"/Articles/"+this.state.sortedModel[1].header+"/"+this.state.sortedModel[1].subHeader+"/"+this.state.sortedModel[1].title}>
              
                <CardContent>
                  <Grid container spacing={1} style={{ display: "flex"}}>
                    <Grid xs={12} item>
                      <Doughnut data = {this.state.sortedModel[1].datastuff} options= {this.state.sortedModel[1].options}/>
                    </Grid>
                    <Grid xs={12} item>
                      <Typography variant="h5" fontFamily="Arial">{this.state.sortedModel[1].title}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                
              </CardActionArea>
          </Card>   
        </Grid>
        
        <Grid item display="flex" alignItems="center" justifyContent="center" m="auto">
          <Card sx={{maxWidth:350, minWidth: 340}}>
            <CardActionArea component={NavLink} to={"/Articles/"+this.state.sortedModel[1].header+"/"+this.state.sortedModel[1].subHeader+"/"+this.state.sortedModel[1].title}>
             
                <CardContent>
                  <Grid container spacing={1} style={{ display: "flex"}}>
                    <Grid xs={12} item>
                      <Doughnut data = {this.state.sortedModel[2].datastuff} options= {this.state.sortedModel[2].options}/>
                    </Grid>
                    <Grid xs={12} item>
                      <Typography variant="h5" fontFamily="Arial">{this.state.sortedModel[2].title}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
               
              </CardActionArea>
          </Card>
        </Grid>
        
      </Grid>
     
    </Box>
          
        
  );
  
}
}
export default LatestArticles;

// 1) Sort by data function above is called

// 2) Grab 3 most recent articles into Latest state model
      
// 3) Flex grid those three articles with card styling doughnut and title