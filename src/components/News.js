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
    console.log("Hello");
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
            "id": null,
            "name": "Business Standard"
        },
        "author": "Harsh Shivam",
        "title": "Realme GT 6 smartphone, Buds Air 6 Pro wireless earbuds launched: Details - Business Standard",
        "description": "Realme GT 6 launched in India: The Realme GT 6 smartphone is now available for pre-orders on Realme's official website, e-commerce platform Flipkart, and at select offline stores",
        "url": "https://www.business-standard.com/technology/gadgets/realme-gt-6-smartphone-buds-air-6-pro-wireless-earbuds-launched-details-124062000568_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/20/thumb/fitandfill/400X400/1718872399-5034.jpeg",
        "publishedAt": "2024-06-20T09:58:29Z",
        "content": "The Realme GT 6 smartphone is now available for pre-orders on Realme's official website, e-commerce platform Flipkart, and at select offline stores\r\nRealme GT6\r\nHarsh ShivamNew Delhi\r\nRealme has laun… [+3568 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TOI Tech Desk",
        "title": "Vivo Y58 smartphone launched in India with 50MP camera and 6,000mAh battery: Price, offers and more - The Times of India",
        "description": "MOBILES & TABLETS News: Vivo has launched the Y58 smartphone in India with a 50 MP AI portrait camera and a 6,000 mAh battery, priced at Rs 19,499.",
        "url": "https://timesofindia.indiatimes.com/technology/mobiles-tabs/vivo-y58-smartphone-launched-in-india-with-50mp-camera-and-6000mah-battery-price-offers-and-more/articleshow/111137075.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-111137074,width-1070,height-580,imgsize-36576,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2024-06-20T09:38:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "At Least 1,000, Including 68 Indians, Die In Scorching Heat During Hajj: Report - NDTV",
        "description": "The death count from this year's hajj has exceeded 1,000, an AFP tally said on Thursday, more than half of them unregistered worshippers who performed the pilgrimage in extreme heat in Saudi Arabia.",
        "url": "https://www.ndtv.com/world-news/at-least-1-000-die-in-scorching-heat-during-hajj-report-5930416",
        "urlToImage": "https://c.ndtvimg.com/2024-06/bjh7dpks_hajj-heat_625x300_20_June_24.jpeg?ver-20240615.100",
        "publishedAt": "2024-06-20T09:36:50Z",
        "content": "All told around 10 countries have reported 1,081 deaths during the annual pilgrimage. (File)\r\nRiyadh: The death count from this year's hajj has exceeded 1,000, an AFP tally said on Thursday, more tha… [+2628 chars]"
    },
    {
        "source": {
            "id": "the-hindu",
            "name": "The Hindu"
        },
        "author": "The Hindu",
        "title": "UGC-NET exam cancelled to safeguard students' interest, says Education Ministry official - The Hindu",
        "description": null,
        "url": "https://www.thehindu.com/education/ugc-net-exam-cancelled-to-safeguard-students-interest-says-education-ministry-official/article68311388.ece",
        "urlToImage": null,
        "publishedAt": "2024-06-20T09:26:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "NDTV",
        "title": "Inside Burger King Shooting Accused Himanshu Bhau's Criminal Network - NDTV",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMihgFodHRwczovL3d3dy5uZHR2LmNvbS9pbmRpYS1uZXdzL2RlbGhpLWJ1cmdlci1raW5nLXNob290aW5nLWluc2lkZS1idXJnZXIta2luZy1zaG9vdGluZy1hY2N1c2VkLWhpbWFuc2h1LWJoYXVzLWNyaW1pbmFsLW5ldHdvcmstNTkzMDM0MtIBjAFodHRwczovL3d3dy5uZHR2LmNvbS9pbmRpYS1uZXdzL2RlbGhpLWJ1cmdlci1raW5nLXNob290aW5nLWluc2lkZS1idXJnZXIta2luZy1zaG9vdGluZy1hY2N1c2VkLWhpbWFuc2h1LWJoYXVzLWNyaW1pbmFsLW5ldHdvcmstNTkzMDM0Mi9hbXAvMQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-20T09:25:12Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Devansh Sharma",
        "title": "Mirzapur season 3 trailer: Guddu Bhaiya leads this bloody race to the throne, Tripathi strikes back. Watch - Hindustan Times",
        "description": "Mirzapur season 3 trailer: Prime Video India's long-awaited show, starring Pankaj Tripathi, Ali Fazal, and Rasika Dugal, will premiere on July 5. | Web Series",
        "url": "https://www.hindustantimes.com/entertainment/web-series/mirzapur-season-3-trailer-guddu-bhaiya-ali-fazal-pankaj-tripathi-rasika-dugal-vijay-varma-watch-101718873332255.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/20/1600x900/mizapur_1718874200044_1718874207583.jpg",
        "publishedAt": "2024-06-20T09:22:41Z",
        "content": "Mirzapur season 3 trailer: As expected, the third instalment of the crime thriller series is full of gore, sex, and gang politics. It doesn't introduce any major character, but depicts the possibilit… [+2113 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "David Johnson, ex-India cricketer, passes away after falling from balcony; police suspect suicide - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/sports/cricket/david-johnson-former-india-cricketer-passes-away-bengaluru-age-52-9403957/",
        "urlToImage": null,
        "publishedAt": "2024-06-20T09:07:51Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "Aneesha Mathur",
        "title": "Watch: Malaysian Airlines flight returns to Hyderabad after mid-air snag - India Today",
        "description": "A Hyderabad-Kuala Lumpur Malaysian Airlines flight returned to Hyderabad after sparks were seen from the plane039s engine mid-air The flight took off from Hyderabad airport at 1245 am on Thursday",
        "url": "https://www.indiatoday.in/india/story/malaysian-airlines-flight-hyderabad-kuala-lumpur-pilot-technical-snag-mid-air-2555667-2024-06-20",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/malaysian-airlines-flight-202151702-16x9_0.jpg?VersionId=VDtfCzkax71Ac3OHHvQVZoAht4R_e70D",
        "publishedAt": "2024-06-20T09:06:37Z",
        "content": "A Kuala Lumpur-bound Malaysia Airlines flight that took off from Rajiv Gandhi International Airport in Hyderabad on Thursday returned after the pilot noticed a snag in the engine mid-air.\r\nA video sh… [+3010 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TOI Lifestyle Desk",
        "title": "Vitamin C: Here's how to add more Vitamin C to your diet - The Times of India",
        "description": "From fruity delights to unexpected veggie heroes, we've got the scoop on how to amp up your Vitamin C game. So, grab your favourite smoothie cup, and let’s embark on a juicy adventure to a healthier you!",
        "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/diet/vitamin-c-heres-how-to-add-more-vitamin-c-to-your-diet/photostory/111133910.cms",
        "urlToImage": "https://static.toiimg.com/photo/111134099.cms",
        "publishedAt": "2024-06-20T08:30:00Z",
        "content": "The recommended daily intake of vitamin C varies depending on age, gender, and lifestyle. For most adults, the recommended daily allowance (RDA) is about 75 mg for women and 90 mg for men. However, c… [+475 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Reuters",
        "title": "India shuns China's calls to resume passenger flights after 4 years, officials say - Moneycontrol",
        "description": "India-China relations have been tense since the biggest military confrontation in decades on their disputed Himalayan border killed 20 Indian and at least four Chinese soldiers in June 2020. Thousands of troops remain mobilised on each side.",
        "url": "https://www.moneycontrol.com/news/india/india-shuns-chinas-calls-to-resume-passenger-flights-after-4-years-officials-say-12752781.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/01/airline_aeroplane_flight_720-770x433.png",
        "publishedAt": "2024-06-20T08:16:47Z",
        "content": "China is pressing India to restart direct passenger flights after a four-year halt, but New Delhi is resisting as a border dispute continues to weigh on ties between the world's two most populous cou… [+3698 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TOI News Desk",
        "title": "NEET paper leak case: RJD leader Tejashwi's aide booked room for arrested students, alleges Bihar deputy - The Times of India",
        "description": "India News: Deputy CM Vijay Sinha accused Tejashwi Yadav of NEET paper leak involvement, detailing calls made by Tejashwi's secretary to book accommodations in Pa",
        "url": "https://timesofindia.indiatimes.com/india/neet-paper-leak-case-rjd-leader-tejashwis-pa-booked-room-for-arrested-students-alleges-bihar-deputy-cm-vijay-sinha/articleshow/111133559.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-111133927,width-1070,height-580,imgsize-771055,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2024-06-20T07:49:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Khushi Pal",
        "title": "10 ethereal pics of space captured by NASA - Hindustan Times",
        "description": "Here is a look at ten sparkling images of space shared by NASA.",
        "url": "https://www.hindustantimes.com/web-stories/in-focus/10-ethereal-pics-of-space-captured-by-nasa-101718867075818.html",
        "urlToImage": null,
        "publishedAt": "2024-06-20T07:40:05Z",
        "content": "By Khushi PalPublished Jun 20, 2024\r\nHindustan TimesIn FocusPhoto Credits: NASA"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": "NDTV Sports Desk",
        "title": "India vs Afghanistan Hourly Weather Update: Rain To Impact T20 World Cup 2024 Super 8 Match? - NDTV Sports",
        "description": "Rain could play its role as India take on Afghanistan in a T20 World Cup 2024 Super 8 match in Barbados.",
        "url": "https://sports.ndtv.com/t20-world-cup-2024/india-vs-afghanistan-hourly-weather-update-rain-set-to-impact-t20-world-cup-2024-match-in-barbados-5928364",
        "urlToImage": "https://c.ndtvimg.com/2024-06/nt0i4oa_rain-t20-world-cup-afp_625x300_20_June_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2024-06-20T07:36:35Z",
        "content": "As India prepare to take on the unpredictable Afghanistan in the T20 World Cup 2024 Super 8s, it isn't just the spin threat that the opponent team possesses that they need to be wary of. The ongoing … [+2009 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Navya Kharbanda",
        "title": "Nawazuddin Siddiqui slams actors for having big demands on sets: Some actors have five vanity vans, yeh paagalpan hai - Hindustan Times",
        "description": "Actor Nawazuddin Siddiqui, who will be seen in Rautu Ka Raaz on Zee5, talks about big-budget films failing and the excess entourage of actors.",
        "url": "https://www.hindustantimes.com/htcity/cinema/nawazuddin-siddiqui-some-actors-have-five-vanity-vans-yeh-paagalpan-hai-101718867479620.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/20/1600x900/Nawazuddin-Siddiqui-shares-his-views-on-rising-pro_1718867555990.jpg",
        "publishedAt": "2024-06-20T07:11:19Z",
        "content": "With Bollywood going through a slump with even the big-budget films failing to get the cash registers ringing at the box office, the whole debate around the rising production cost and excess entourag… [+2447 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deccan Herald"
        },
        "author": "PTI",
        "title": "Rs 20,000 crore bank fraud: ED raids premises of Amtek Group - Deccan Herald",
        "description": null,
        "url": "https://www.deccanherald.com/india/rs-20000-crore-bank-fraud-ed-raids-premises-of-amtek-group-3073680",
        "urlToImage": "https://images.deccanherald.com/deccanherald%2F2024-05%2F140bc57a-e298-4d11-8965-dc46933320e5%2Fed_pti_1161514_1668183246_1163886_1668869135_1165925_1669457059_1167357_1669876133_1173186_167145263.jpg?rect=0%2C4%2C700%2C368&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
        "publishedAt": "2024-06-20T07:04:22Z",
        "content": "The Supreme Court too had sought an ED probe, the sources said.\r\nThis, as per the ED, led to a loss of about Rs 10,000-Rs 15,000 crore to the exchequer, the sources said.\r\nThe ED believes that loan f… [+682 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Standard"
        },
        "author": "Vasudha Mukherjee",
        "title": "Sunita Williams stuck in space: After launch, Starliner's return delayed - Business Standard",
        "description": "Everything you need to know about Sunita Williams' space mission, Boeing Starliner setbacks and delays",
        "url": "https://www.business-standard.com/world-news/sunita-williams-stuck-in-space-after-launch-starliner-s-return-delayed-124062000346_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/20/thumb/featurecrop/400X400/1718866190-3966.jpg",
        "publishedAt": "2024-06-20T06:57:43Z",
        "content": "First Starliner launch date: May 6The Crew Flight Test faced numerous delays before its successful launch. Initially scheduled for May 6, the mission was postponed just two hours before liftoff due t… [+78 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Zoom"
        },
        "author": "Divya",
        "title": "Massive 1100-Foot Asteroid Apophis Hit Earth In 2029? NASA Explains - Times Now",
        "description": "A massive 1100-foot asteroid is said to make an alarmingly close approach towards Earth in 2029. Will it strike the Earth? Know what NASA has revealed.",
        "url": "https://www.timesnownews.com/technology-science/massive-1100-foot-asteroid-apophis-hit-earth-in-2029-nasa-explains-article-111132353",
        "urlToImage": "https://static.tnn.in/thumb/msid-111132365,thumbsize-106690,width-1280,height-720,resizemode-75/111132365.jpg",
        "publishedAt": "2024-06-20T06:57:16Z",
        "content": "Master Blaster Scores Big: Sachin Tendulkar's Stake In This Stock Hits All-Time High, Investment Soars To..."
    },
    {
        "source": {
            "id": null,
            "name": "Livelaw.in"
        },
        "author": "Nupur Thapliyal",
        "title": "Liquor Policy: Delhi Court Reserves Order On Chief Minister Arvind Kejriwal's Bail Plea - Live Law - Indian Legal News",
        "description": "A Delhi Court on Thursday reserved order on the bail plea of Chief Minister Arvind Kejriwal in the money laundering case connected to the alleged liquor policy scam.Vacation Judge Nyay Bindu of...",
        "url": "https://www.livelaw.in/top-stories/liquor-policy-delhi-court-reserves-order-on-chief-minister-arvind-kejriwals-bail-plea-260906",
        "urlToImage": "https://www.livelaw.in/h-upload/2024/03/22/529865-arvind-kejriwal-and-rouse-avenue-district-court.webp",
        "publishedAt": "2024-06-20T06:55:33Z",
        "content": "A Delhi Court on Thursday reserved order on the bail plea of Chief Minister Arvind Kejriwal in the money laundering case connected to the alleged liquor policy scam.\r\nVacation Judge Nyay Bindu of Rou… [+6481 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TOI Entertainment Desk",
        "title": "Priyanka Chopra's former New York restaurant shuts down after 3 years of service - The Times of India",
        "description": "Priyanka Chopra's restaurant venture, Sona, in New York City closes after over three years of service. Explore the closure of the restaurant and Priyanka's cultural contributions through storytelling and haute cuisine of India.",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/priyanka-chopras-former-new-york-restaurant-shuts-down-after-3-years-of-service/articleshow/111131021.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-111132227,width-1070,height-580,imgsize-52544,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2024-06-20T06:53:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT News Desk",
        "title": "Setback to Nitish Kumar as Patna HC scraps Bihar govt's quota hike to 65% in jobs, education - Hindustan Times",
        "description": "The notification, issued in November 2023, sought to amend existing reservation laws, which would have brought the total reservation in the state to 75%.",
        "url": "https://www.hindustantimes.com/cities/patna-news/setback-to-nitish-as-patna-hc-sets-aside-bihar-govts-quota-hike-to-65-in-jobs-education-101718862957009.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/20/1600x900/nitish_kumar_bihar_govt_quota_hike_1718866109198_1718866109532.jpg",
        "publishedAt": "2024-06-20T06:12:01Z",
        "content": "The Patna high court on Thursday set aside the Bihar government's notification increasing quota for backward classes, scheduled castes and scheduled tribes from 50% to 65% in government jobs and high… [+2038 chars]"
    }
       
       
      ]
    
    
  //  WE USE STATE TO CHANGE ANYTHING AGAIN AND AGAIN WITHOUT LOADING OF PAGE 
 
  async updateNews(pageNo){
    this.props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6f2b1cabfa548999b4e6fb901647656&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({    loading:true,});
    let data=await fetch(url);
  let parseData=await data.json()
  console.log(parseData);
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
        this.setState({page:this.state.page+1});
        this.updateNews();
    }

  // it will run after render
  // here we fetch ai direst from site does'nt use articles part


  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:"30px 0px",marginTop:"90px"}}>Breaking News Network of INDIA !</h2>
        <h3 className="text-center" style={{margin:"30px 0px"}}>Top  {this.capitlizeText(this.props.category)}-Headlines</h3>
       { this.state.loading &&<Spinner/>}
    

        <div className="row">
        { !this.state.loading&&this.state.articles.map((ele)=>{
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
