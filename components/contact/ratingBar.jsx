import React from "react";

const RatingBar = (props) => {
        
  const { bgcolor, completed } = props;
  
  const percentage = (`${completed}`/20)*100;
        
        
   const containerStyles = {
    height: 18,
    width: '40%',
    backgroundColor: bgcolor,
    borderRadius: 50,
    margin: 5
  }

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: "rgba(255, 255, 255, .2)",
    backdropFilter: "blur(5px)",
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    textAlign: "center",
  }

  return (
    <div style={containerStyles}>
            
      <div  style={fillerStyles}>
        <span style={labelStyles}>{`${completed}`}</span>
      </div>
          
    </div>
  );
};

export default RatingBar;
//width: `${percentage}%`,
//<span style={labelStyles}>{`${completed}`}</span>