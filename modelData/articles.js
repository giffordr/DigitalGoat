"use strict";


/* jshint node: true */
/*
 * Model data musicmakingcents blog.
 * This module returns an object called articleModels with the following functions:
 *
 * articleModels.articleListModel - A function that returns the list of users on the system. The
 * list is returned as an array of objects containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * articleModels.Model - A function that returns the info of the specified user. Called
 * with an user ID (id), the function returns n object containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 */

(function() {
   

   // Instantiate 'articles' list.
   
   var articles = [];
   
   var colors =   {
            green: "rgba(75, 192, 192, 1)",
            yellow: "rgba(255, 206, 86, 1)",
            orange: "rgba(255, 206, 86, 1)",
            red: "rgba(255, 99, 132, 1)",
          };
  
   var colorsHover =  {
            green: "rgba(75, 192, 192, 0.6)",
            yellow: "rgba(255, 206, 86, 0.6)",
            orange: "rgba(255, 206, 86, 0.6)",
            red: "rgba(255, 99, 132, 0.6)",
          };
   
   // Create function to add new article to 'articles' list
   
   var addNewArticle = (TTP, Cost, Exposure, Difficulty, Profit, Header, SubHeader, Author, DateCreated, ArticleTitle, Category, TypeOf, ID) => {
  
       let score = TTP + Cost + Exposure + Difficulty + Profit;
     
       let tempData = [
           { name: "TTP", bgcolor: "rgba(255, 99, 132, 1)", completed: TTP , tooltipTitle: "Time to Profitability (TTP)",
            tooltipStart: "This metric capture the time it takes to reach a point of making a profit. ", tooltipGreen:"Green", tooltipMiddle: " may indicate something that can be used to make money instantly. Whereas", tooltipRed:" Red", tooltipEnd:" may indicate that a significant amount of time (i.e. years) might need to be invested before becoming profitable."},
           { name: "Cost", bgcolor: "rgba(75, 192, 192, 1)", completed: Cost, tooltipTitle: "Cost", tooltipStart: "This metric captures the upfront cost needed to pursue this topic. ", tooltipGreen:"Green", tooltipMiddle: " may indicate something that anyone can afford to try it. Whereas", tooltipRed:" Red",tooltipEnd:" may indicate that small business loan might be needed for most people."},
           { name: "Reach", bgcolor: "rgba(255, 206, 86, 1)", completed: Exposure, tooltipTitle: "Reach", tooltipStart: "This metric captures how well the topic being explored may help to gain exposure as a musician. ", tooltipGreen:"Green", tooltipMiddle: " may indicate a great way to get your music out many people. Whereas", tooltipRed:" Red",tooltipEnd:" may indicate something that doesn't have the ability to spread to many people outside of word of mouth."},
           { name: "Difficulty", bgcolor: "rgba(255, 99, 132, 1)", completed: Difficulty, tooltipTitle: "Difficulty", tooltipStart: "This metric captures the amount, and difficulty level, of work needed to start, and mantain, the topic being explored as a revenue stream. ", tooltipGreen:"Green", tooltipMiddle: " may indicate something that anyone can do. Whereas", tooltipRed:" Red",tooltipEnd: " may indicate something that requires a developed skillset that would be a large learning curve for most people."},
           { name: "Profit", bgcolor: "rgba(75, 192, 192, 1)", completed: Profit, tooltipTitle: "Profit", tooltipStart: "This metric captures the potential that the topic being explored has to make a net profit. ", tooltipGreen:"Green", tooltipMiddle: " may indicate something that has potential to direclty provide a livable income for the average person. Whereas", tooltipRed:" Red",tooltipEnd: " may be something that in very unlikely to directly yeild a large net profit."},
        ];
     
       let pieAmount = [0,0,0,0];
     
       let barColor = [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
             ];
     
       let labelColor = [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
             ];
     
       let hoverColor = [];
     
       let chartLabels = ["TTP","Cost","Reach", "Difficulty", "Profit"];
       
       tempData.map((item,idx) => {
         
         if (item.completed >= 15){
           item.bgcolor = colors.green;
           pieAmount[0] = pieAmount[0]+20;
           barColor[0] =colors.green;
           labelColor[idx] =colors.green;
           hoverColor[0] = colorsHover.green;
         }; 
         
         if (item.completed >= 10  && item.completed< 15){
           item.bgcolor = colors.yellow;
           pieAmount[1] = pieAmount[1]+20;
           barColor[1] =colors.yellow;
           labelColor[idx] =colors.yellow;
           hoverColor[1] = colorsHover.yellow;
         }; 
         
         if (item.completed >= 5  && item.completed< 10){
           item.bgcolor = colors.orange;
           pieAmount[2] = pieAmount[2]+20;
           barColor[2] =colors.orange;
           labelColor[idx] =colors.orange;
           hoverColor[2] = colorsHover.orange;
         };
         
         if (item.completed >= 0  && item.completed< 5){
           item.bgcolor = colors.red;
           pieAmount[3] = pieAmount[3]+20;
           barColor[3] =colors.red;
           labelColor[idx] =colors.red;
           hoverColor[3] = colorsHover.red;
         };
       });
       
       articles.push({title: ArticleTitle, header: Header, subHeader: SubHeader, 
                      author: Author, dateCreated: DateCreated, category: Category, typeOf: TypeOf, id: ID,
                      score: score, TTP: TTP, difficulty: Difficulty,
                      reach: Exposure, cost: Cost, profit: Profit,
                      data: tempData, datastuff: {
             labels: chartLabels,
             datasets: [
               {
                 data: pieAmount,
                 backgroundColor: barColor,
                 borderColor: barColor,
                 hoverBackgroundColor: hoverColor,
                 borderWidth: 0.4,
                 weight: 0.1,
                 
               },
             ],
           },
            options: {
               cutout: "90%",
               responsive: true,
               maintainAspectRatio: false,
               centerText: {
                       color: "black",
                       value: score,
                       fontSizeAdjust: 1 // increase font size 20% based on default font size
                     },
               
               plugins: {
                   legend: {
                       display: false,
                       
                   },
                 tooltip: {
                   enabled: false,
                    callbacks: {
                     label: function(context) { 
                       var label = chartLabels[context.dataIndex];
                       return label;
                                              },
                               }
                           },
                         },
                  
               
                     
                     },
                           
     });
    
};

// Add all articles here   
   
addNewArticle(16,12,8,15,4,"Streaming-Services", "Spotify", "Making Cents Team", "10/25/19", "Spotify: Which streaming service is best?", "Music", "Article", "Thing1");
addNewArticle(2,6,12,15,18, "Streaming-Services", "Apple-Music", "Making Cents Team", "10/26/22", "Apple Music: Is it worth the trouble?", "Tech", "Article", "Thing2");
addNewArticle(19,18,17,16,18, "Streaming-Services", "Apple-Music", "Making Cents Team", "10/23/22", "Releasing and album or and EP?", "Art", "Article", "Thing3");
addNewArticle(3,3,17,10,11, "Streaming-Services", "Apple-Music", "Making Cents Team", "10/25/22", "Apple Music: Is it worth the trouble?", "Cooking", "Article", "Thing4");
addNewArticle(6,3,13,10,12, "Streaming-Services", "Apple-Music", "Making Cents Team", "10/26/22", "Aveeshka: making art make cents?", "Misc", "Article", "Thing5");
addNewArticle(6,3,13,10,12, "Streaming-Services", "Apple-Music", "Making Cents Team", "10/26/21", "Nancy: Here in SB yayyyyy!", "Design", "Article", "Thing6");
addNewArticle(10,8,12,9,11, "Streaming-Services", "Apple-Music", "Making Cents Team", "10/22/21", "Which pastries have the most earning potential?", "Baking", "Article", "Thing7");
addNewArticle(10,8,12,9,11, "Streaming-Services", "Apple-Music", "Making Cents Team", "10/18/21", "Web Design: How to make it profitable", "Design", "Article", "Thing8");
addNewArticle(10,8,12,9,11, "Streaming-Services", "Apple-Music", "Making Cents Team", "10/25/21", "Starting your own gym?", "Fitness", "Article", "Thing9");

   
   var articleListModel = function() {
      const articlesCopy = articles;
      return articlesCopy;
   };

   var userModel = function(userId) {
      for (var i = 0; i < users.length; i++) {
         if (users[i]._id === userId) {
            return users[i];
         }
      }
      return null;
   };

   var photoOfUserModel = function(userId) {
      return photos.filter(function (photo) {
         return (photo.user_id === userId);
      });
   };
   
   var specificArticleModel = function(articleTitle) {
      return articles.filter(function (article) {
         
         let newArticleTitle = article.title.replace(/[.,\/#$%\?^&\*;{}=\-_`~()]/g,"");
      
         return (newArticleTitle === articleTitle);
      });
   };


   var articleModels =  {
      articleListModel: articleListModel,
      specificArticleModel: specificArticleModel,

      
   };

   if( typeof exports !== 'undefined' ) {
      // We're being loaded by the Node.js module loader ('require') so we use its
      // conventions of returning the object in exports.
      exports.articleModels = articleModels;
   } else {
      // We're not in the Note.js module loader so we assume we're being loaded
      // by the browser into the DOM.
      window.articleModels = articleModels;
   }
   
})();
