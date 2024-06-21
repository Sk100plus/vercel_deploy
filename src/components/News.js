import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
export class News extends Component {

// Setting of default proptypes
// static defaultProps={
// country:'in',
// pageSize:20,
// category:'general'
// }
// businessentertainmentgeneralhealthsciencesportstechnology


static propsTypes={
 country:PropTypes.string,
 pageSize:PropTypes.number,
 category:PropTypes.string
  }
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      totalResults:0,
      page:1,
    }
    document.title=`${this.capitlizeText(this.props.category)}-News`;
  };
 capitlizeText=(word) =>
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}
  articles=[
    {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": "The Indian Express",
      "title": "South Africa vs United States LIVE Score, T20 World Cup 2024: Kagiso Rabada snaps three wickets as SA beat USA by 18 runs - The Indian Express",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMipwFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvc3BvcnRzL2NyaWNrZXQvc291dGgtYWZyaWNhLXZzLXVuaXRlZC1zdGF0ZXMtbGl2ZS1zY29yZS10MjAtd29ybGQtY3VwLTIwMjQtbWF0Y2gtNDEtdG9kYXktc2EtdnMtdXNhLWxhdGVzdC1zY29yZWNhcmQtdXBkYXRlcy05NDAxMzczL9IBAA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-19T18:17:35Z",
      "content": null
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": "Hindustan Times",
      "title": "NEET row: Education Ministry seeks report from Bihar police over paper lead claims - Hindustan Times",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMikAFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vaW5kaWEtbmV3cy9uZWV0LXJvdy1lZHVjYXRpb24tbWluaXN0cnktc2Vla3MtcmVwb3J0LWZyb20tYmloYXItcG9saWNlLW92ZXItcGFwZXItbGVhZC1jbGFpbXMtMTAxNzE4ODE3NDQxNDM4Lmh0bWzSAZQBaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2luZGlhLW5ld3MvbmVldC1yb3ctZWR1Y2F0aW9uLW1pbmlzdHJ5LXNlZWtzLXJlcG9ydC1mcm9tLWJpaGFyLXBvbGljZS1vdmVyLXBhcGVyLWxlYWQtY2xhaW1zLTEwMTcxODgxNzQ0MTQzOC1hbXAuaHRtbA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-19T17:44:53Z",
      "content": null
  },
  {
      "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
      },
      "author": "TOI Sports Desk",
      "title": "Rahul Dravid drops a big hint ahead of the Afghanistan game in T20 World Cup, says... - The Times of India",
      "description": "Rahul Dravid, the head coach of the Indian team, hinted at the possibility of selecting either Kuldeep Yadav or Yuzvendra Chahal in the starting lineu",
      "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/rahul-dravid-drops-a-big-hint-ahead-of-the-afghanistan-game-in-t20-world-cup-says-/articleshow/111120376.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-111120344,width-1070,height-580,imgsize-32528,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-06-19T17:41:00Z",
      "content": null
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": "The Hindu",
      "title": "Education Ministry orders cancellation of UGC-NET - The Hindu",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9lZHVjYXRpb24vZWR1Y2F0aW9uLW1pbmlzdHJ5LW9yZGVycy1jYW5jZWxsYXRpb24tb2YtdWdjLW5ldC9hcnRpY2xlNjgzMDkzMjMuZWNl0gFtaHR0cHM6Ly93d3cudGhlaGluZHUuY29tL2VkdWNhdGlvbi9lZHVjYXRpb24tbWluaXN0cnktb3JkZXJzLWNhbmNlbGxhdGlvbi1vZi11Z2MtbmV0L2FydGljbGU2ODMwOTMyMy5lY2UvYW1wLw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-19T17:28:00Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": "NDTV Sports Desk",
      "title": "Germany vs Hungary LIVE, UEFA Euro 2024: Jamal Musiala Scores, Germany 1-0 Hungary - NDTV Sports",
      "description": "Germany vs Hungary Highlights, Euro 2024: Jamal Musiala and Ilkay Gundogan got their names on the scoresheet as Germany beat Hungary 2-0 in their Group A match at Stuttgart Arena.",
      "url": "https://sports.ndtv.com/uefa-euro-2024/germany-vs-hungary-live-score-group-a-football-match-live-scorecard-5925408",
      "urlToImage": "https://c.ndtvimg.com/2024-06/tpa9jni_ilkay-gundogan-afp_625x300_19_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2024-06-19T17:06:50Z",
      "content": "Germany vs Hungary Highlights, Euro 2024: Jamal Musiala and Ilkay Gundogan got their names on the scoresheet as Germany beat Hungary 2-0 in their Group A match at Stuttgart Arena. Musiala put Germany… [+583 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "Zia Haq",
      "title": "Govt raises MSPs for kharif season, focus on pulses, oilseeds - Hindustan Times",
      "description": "Farmers are currently preparing to plant a range of crops, such as rice, soybean, pulses, cotton and sugarcane, which depend on the June-September monsoon system | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/govt-raises-msps-for-kharif-season-focus-on-pulses-oilseeds-101718814726150.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/19/1600x900/Farmers-harvesting-the-wheat-crop-in-Jaspal-Bangar_1718814678307.jpg",
      "publishedAt": "2024-06-19T16:32:05Z",
      "content": "NEW DELHI: The Union Cabinet, chaired by Prime Minister Narendra Modi days into the start of his third term, on Wednesday approved raising minimum support prices (MSPs) for an array of kharif, or sum… [+3834 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": null,
      "title": "Deepika Padukone Reveals The \"Highlight\" Of Kalki 2898 - AD Shooting: \"What Prabhas Was Feeding Everyone...\" - NDTV Movies",
      "description": "Deepika, Prabhas, Amitabh Bachchan and Kamal Haasan were present at the event",
      "url": "https://www.ndtv.com/entertainment/deepika-padukone-reveals-the-highlight-of-kalki-2898-ad-shooting-what-prabhas-was-feeding-everyone-5925753",
      "urlToImage": "https://c.ndtvimg.com/2024-06/darm3iao_hh_625x300_19_June_24.jpeg",
      "publishedAt": "2024-06-19T16:17:31Z",
      "content": "Deepika Padukone and Prabhas pictured at the event\r\nNew Delhi: Mom-to-be Deepika Padukone lit up the Kalki 2898 - AD event and how. Deepika Padukone, who plays a pregnant woman in the film, was in a … [+2006 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "Anurag Bohra",
      "title": "Sonam Khan confirms whether she's participating in Bigg Boss OTT 3: ‘My own boss’ - Hindustan Times",
      "description": "Sonam Khan made her acting debut with Yash Chopra's Vijay opposite Rishi Kapoor. Recently, there were reports about her participating in Bigg Boss OTT 3. | Web Series",
      "url": "https://www.hindustantimes.com/entertainment/web-series/sonam-khan-confirms-whether-shes-participating-in-bigg-boss-ott-3-my-own-boss-101718808781499.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/19/1600x900/sonam_anil_1718812426530_1718812448632.jpg",
      "publishedAt": "2024-06-19T16:01:18Z",
      "content": "Sonam Khan has responded to ongoing speculations about her participation in Bigg Boss OTT 3. The celebrity reality show, which marks the debut of Anil Kapoor as the new host in the new instalment of … [+1988 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": "Greatandhra",
      "title": "Jagan's favourite IAS officers shown the door!.. - Greatandhra",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LmdyZWF0YW5kaHJhLmNvbS9wb2xpdGljcy9hbmRocmEtbmV3cy9qYWdhbnMtZmF2b3VyaXRlLWlhcy1vZmZpY2Vycy1zaG93bi10aGUtZG9vci0xMzg2NzHSAVxodHRwczovL21vYmkuZ3JlYXRhbmRocmEuY29tL2FydGljbGUvamFnYW5zLWZhdm91cml0ZS1pYXMtb2ZmaWNlcnMtc2hvd24tdGhlLWRvb3IvMTM4NjcxL2FtcA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-19T15:18:38Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "India Today"
      },
      "author": "India Today World Desk",
      "title": "Five shocking points from Hinduja family trial - India Today",
      "description": "Four members of the Hinduja family the UK039s richest are on trial in Switzerland over human trafficking charges It is claimed they spent more on their pet dog than on an Indian help039s salary Here are five shocking details from the trial",
      "url": "https://www.indiatoday.in/world/story/uk-britain-wealthiest-family-hinduja-billionaire-human-trafficking-staff-shocking-facts-2555411-2024-06-19",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/swiss-billionaire-family-has-been-accused-of-making-their-indian-helps-work-for-long-hours-without-d-193525831-16x9_0.jpg?VersionId=ST35utK12_eAOreX9dLVemwmE4fjc5o5",
      "publishedAt": "2024-06-19T14:48:18Z",
      "content": "Four members of the Hinduja family, Britain's wealthiest, are being tried for human trafficking in Switzerland over charges that they grossly underpaid an Indian domestic help at their Lake Geneva vi… [+3419 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "Cabinet approves development of Rs 76k crore all-weather port in Maharashtra's Vadhavan - Moneycontrol",
      "description": "Upon completion, the Rs 76,220 Vadhavan port will be one of the top 10 ports in the world.",
      "url": "https://www.moneycontrol.com/news/business/cabinet-approves-development-of-rs-76k-crore-all-weather-port-in-maharashtras-vadhavan-12752245.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240619143311_BeFunky-collage-88.jpg",
      "publishedAt": "2024-06-19T14:36:17Z",
      "content": "The Union Cabinet on June 19 approved the development of an all-weather deep-water port at Vadhavan near Dahanu in Maharashtra.\r\n\"In Maharashtra's Dahanu of Palghar district, a project of Rs 76,200 c… [+2131 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "India TV News"
      },
      "author": "Kristina Das",
      "title": "World Kidney Cancer Day 2024: Know about long-term effects of alcohol on development of kidney cancer - India TV News",
      "description": "Through various efforts, World Kidney Cancer Day 2024 aims to reduce the global burden of this disease and provide support for individuals affected by kidney cancer. Thus, we need to know about the adverse effects of alcohol on the development of kidney cance…",
      "url": "https://www.indiatvnews.com/health/world-kidney-cancer-day-2024-know-about-long-term-effects-of-alcohol-on-development-of-kidney-cancer-2024-06-19-937757",
      "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/06/world-kidney-cancer-day-2024-2-1718804755.jpg",
      "publishedAt": "2024-06-19T14:30:01Z",
      "content": "World Kidney Cancer Day 2024 is a global event that is observed annually on June 20 to raise awareness about kidney cancer and to support those who are battling this disease. So, to commemorate World… [+3306 chars]"
  },
  {
      "source": {
          "id": "the-hindu",
          "name": "The Hindu"
      },
      "author": "The Hindu",
      "title": "At least 9 die after consuming spurious liquor in Tamil Nadu's Kallakurichi - The Hindu",
      "description": null,
      "url": "https://www.thehindu.com/news/national/tamil-nadu/many-die-at-karunapuram-in-kallakurichi-after-consuming-suspected-spurious-liquor/article68307724.ece",
      "urlToImage": null,
      "publishedAt": "2024-06-19T14:13:00Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "India Today"
      },
      "author": "INDIATODAY",
      "title": "iPhone 15, iPhone 13, iPhone 14 Plus selling with massive discount offers - India Today",
      "description": "The iPhone 13, iPhone 15 and iPhone 14 Plus are currently selling with big discount offers on select online channels. The price of these models has dropped by a massive margin. Here are the details.",
      "url": "https://www.indiatoday.in/visualstories/technology/iphone-15-iphone-13-iphone-14-plus-selling-with-massive-discount-offers-145117-19-06-2024",
      "urlToImage": "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2024/06/cropped-image-2489.png?size=*:900",
      "publishedAt": "2024-06-19T14:01:01Z",
      "content": "The current retail price of this iPhone is Rs 59,900, which means that customers are getting a discount of Rs 6,901."
  },
  {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": null,
      "title": "20 Dead In Delhi Heatwave, Centre Orders Hospitals To Prioritise Treatment - NDTV",
      "description": "Five people have died over the last two days and at least 12 are on life support at Delhi's Ram Manohar Lohia Hospital as the national capital burns due to a searing heatwave.",
      "url": "https://www.ndtv.com/delhi-news/delhi-heatwave-5-dead-12-on-life-support-as-delhi-reels-under-heatwave-that-has-no-end-5922977",
      "urlToImage": "https://c.ndtvimg.com/2024-06/5rng0mfo_delhi-heat_625x300_19_June_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
      "publishedAt": "2024-06-19T13:06:00Z",
      "content": "Delhi residents have been reeling under a heatwave for nearly a month now\r\nNew Delhi: As cases of heatstroke spike in several parts of north India due to an unrelenting heatwave, the Union Health Min… [+4131 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "IMD sets date for monsoon onset in Delhi-NCR as residents reel under heatwave - Hindustan Times",
      "description": "Amid severe heatwave conditions, IMD predicted that monsoons are likely to hit Delhi-NCR on June 30. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/imd-sets-date-for-monsoon-onset-in-delhi-ncr-as-residents-reel-under-heatwave-101718795391439.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/19/1600x900/delhirain1_1713880119887_1718795966194.jpg",
      "publishedAt": "2024-06-19T12:55:24Z",
      "content": "As the national capital and its surrounding states continue to reel under severe heatwave conditions, the India Meteorological Department (IMD) said in its forecast on Wednesday that monsoon is likel… [+2012 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": null,
      "title": "68 Indians Among 645 Hajj Pilgrims Who Died In Mecca, Says Saudi Diplomat - NDTV",
      "description": "A diplomat in Saudi Arabia said on Wednesday that 68 Indian nationals died during the hajj pilgrimage this year marked by searing heath, bringing the overall tally to more than 600.",
      "url": "https://www.ndtv.com/india-news/68-indians-among-645-hajj-pilgrims-who-died-in-mecca-says-saudi-diplomat-5924276",
      "urlToImage": "https://c.ndtvimg.com/2024-06/icknq0ro_hajj-heatwave_625x300_19_June_24.jpeg?ver-20240615.100",
      "publishedAt": "2024-06-19T12:42:13Z",
      "content": "The total reported dead so far is 645, according to an AFP tally.\r\nRiyadh, Saudi Arabia: A diplomat in Saudi Arabia said on Wednesday that 68 Indian nationals died during the hajj pilgrimage this yea… [+1827 chars]"
  },
  {
      "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
      },
      "author": "TOI World Desk",
      "title": "'AI Steve': UK businessman uses AI avatar to contest elections - The Times of India",
      "description": "UK News: A UK town could have the opportunity to elect the world's first AI lawmaker next month.",
      "url": "https://timesofindia.indiatimes.com/world/uk/ai-steve-uk-businessman-uses-ai-avatar-to-contest-elections/articleshow/111110524.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-111112678,width-1070,height-580,imgsize-1658205,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-06-19T12:30:00Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Pib.gov.in"
      },
      "author": null,
      "title": "Press Information Bureau - PIB",
      "description": "India Post Payments Bank (IPPB) has announced its partnership with Ria Money Transfer (Ria), global",
      "url": "https://pib.gov.in/PressReleasePage.aspx?PRID=2026658",
      "urlToImage": "https://164.100.158.168/images/indian-emblem.png",
      "publishedAt": "2024-06-19T12:26:00Z",
      "content": "Ministry of Communications\r\nIPPB &amp; Ria leveraging technology to provide customers with secure, efficient and convenient international inward money transfer service \r\nPosted On:\r\n 19 JUN 2024 5:56… [+6240 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "CNBC"
      },
      "author": "Reuters",
      "title": "India set for decade-high $2 billion bond inflows around JPMorgan index inclusion day - CNBC",
      "description": "Foreign inflows into Indian bonds will hit a decade-high of $2 billion around June 28, when they will be included in a JPMorgan index, bankers said.",
      "url": "https://www.cnbc.com/2024/06/19/india-set-for-decade-high-2-billion-bond-inflows-around-jpmorgan-index-inclusion-day.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107430868-1718797223389-gettyimages-1333803268-dsc_0815.jpeg?v=1718797284&w=1920&h=1080",
      "publishedAt": "2024-06-19T11:41:45Z",
      "content": "Foreign inflows into Indian bonds will hit a decade-high of $2 billion around June 28, when they will be included in a widely-tracked JPMorgan index, although the central bank will lap up most of the… [+2401 chars]"
  }
       
       
      ]
    
    
  //  WE USE STATE TO CHANGE ANYTHING AGAIN AND AGAIN WITHOUT LOADING OF PAGE 
 
  async updateNews(pageNo){
    this.props.setProgress(0);
    // a6f2b1cabfa548999b4e6fb901647656`
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f2b1cabfa548999b4e6fb901647656`;
    this.setState({    loading:true,});
    let data=await fetch(url);
  let parseData=await data.json();
  this.setState({
    articles:this.articles,
    totalResults:parseData.totalResults,
  loading:false,

  });
  this.props.setProgress(100);
  }

  async componentDidMount(){
  this.updateNews();
  }
  handlePreviousClick=async()=>{
    this.setState({page:this.state.page-1})
    this.updateNews();
    }
     handleNextClick=async()=>{
      this.updateNews();
        this.setState({page:this.state.page+1});
     
    }

  // it will run after render
  // here we fetch ai direst from site does'nt use articles part


  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:"30px 0px",marginTop:"90px"}}>Breaking News Network of The World !</h2>
        <h3 className="text-center" style={{margin:"30px 0px"}}>Top  {this.capitlizeText(this.props.category)}-Headlines</h3>
       { this.state.loading &&<Spinner/>}
    

        <div className="row">
        { !this.state.loading&&this.articles.map((ele)=>{
          return (<div className="col-md-4"  style={{placeItems:"center",display:"grid"}}  key={ele.url}>
          <NewsItem title={ele.title?ele.title.slice(0,45):""} description={ele.description?ele.description.slice(0,80):"The Treasury Department announced plans to accelerate the size of its auctions a..."}
           imageurl={ele.urlToImage?ele.urlToImage:"https://image.cnbcfm.com/api/v1/image/107269112-1689014288080-janet.jpg?v=1689014319&w=1920&h=1080"} newsurl={ele.url} author={ele.author?ele.author:"Unknown"} date={ele.publishedAt} sources={ele.source.name}/>
          </div>);
        })}
        </div>

        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
        <button  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
   </div>
    )
  }
}

export default News

// In case of inline CSS we made a javascript object and 
// wirte inside double curly braces ;

// https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f2b1cabfa548999b4e6fb901647656