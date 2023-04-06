import sm, { EnumChangefreq } from "sitemap";
import fs from "fs";

class siteMap extends React.Component {

render() {
    let sitemap = sm.createSitemap({
    hostname: "https://musicmakingcents.com",
    
});

    Promise.all(window.articleModels.articleListModel()).then((posts) => {
    
    posts.forEach((post, i) => {
        
            sitemap.add({
                url: `https://musicmakingcents.com/#/Articles/${post.header}/${post.subheader}/${post.title}`,
                changefreq: EnumChangefreq.WEEKLY,
                lastmod: post.updatedAt
            });
        
   
    fs.writeFileSync("./sitemap2.xml", sitemap.toString());
});
});
  
      }
}
export default siteMap;