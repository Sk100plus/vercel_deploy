import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
export class NewsB extends Component {

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
          "name": "OilPrice.com"
      },
      "author": "Irina Slav",
      "title": "Demand Pessimism on Oil Market Dissipates - OilPrice.com",
      "description": "The pessimism that has gripped the global oil market for weeks as traders suspect weakening demand growth this week began to dissipate, replaced by signs of emerging optimism",
      "url": "https://oilprice.com/Energy/Oil-Prices/Demand-Pessimism-on-Oil-Market-Dissipates.html",
      "urlToImage": "https://d32r1sh890xpii.cloudfront.net/article/718x300/2024-06-19_rlvkigu3ja.jpg",
      "publishedAt": "2024-06-19T15:00:00Z",
      "content": "Brent crude was trading down…\r\nThe key disappointment for the…\r\nOil prices remained stable despite…\r\nBy Irina Slav - Jun 19, 2024, 10:00 AM CDT\r\nThe pessimism that has gripped the global oil market f… [+3909 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Livemint"
      },
      "author": "Vaamanaa Sethi",
      "title": "Stocks to buy: NOCIL to Axis Bank - ICICI Direct suggests 5 shares with up to 8% upside | Stock Market News - Mint",
      "description": "Brokerage firm ICICI Direct Research has suggested five stocks to buy this week - Nocil, National Fertiliser, L&T Finance Holdings, Central Bank of India and Axis Bank.",
      "url": "https://www.livemint.com/market/stock-market-news/stocks-to-buy-nocil-to-axis-bank-icici-direct-suggests-5-shares-with-up-to-8-upside-11718803224803.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/19/1600x900/INDIA-STOCKS-ELECTION-0_1718801662716_1718806935379.JPG",
      "publishedAt": "2024-06-19T14:30:16Z",
      "content": "Indian stock market: The Indian stock market benchmark index Nifty 50 ended its five-session winning streak on Wednesday, June 19, due to profit-taking at higher levels.The Nifty 50 reached a new pea… [+3025 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Hyundai Alcazar facelift SUV spotted: Here's everything we expect - Mint",
      "description": "Hyundai Motor India is now reportedly preparing the redesigned Alcazar, expected by year-end. Featuring distinctive styling cues, upgraded interiors with captain seats, and mirroring the Creta's engine options, it could elevate Hyundai's SUV lineup with enhan…",
      "url": "https://www.livemint.com/auto-news/hyundai-alcazar-facelift-suv-spotted-heres-everything-we-expect-11718805720901.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/19/1600x900/ccbcbb_1718806697113_1718806704013.png",
      "publishedAt": "2024-06-19T14:24:46Z",
      "content": "Hyundai Motor India Limited has initiated 2024 with a resounding launch, unveiling the latest iteration of its highly anticipated Creta model to an enthusiastic reception. The Korean automaker has no… [+2579 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Dsij.in"
      },
      "author": "Kiran Shroff",
      "title": "Multibagger EV-charger manufacturing company enters strategic partnership with Hubject; Aims to fuel further growth in India's booming EV market - Dalal Street Investment Journal",
      "description": "The shares of the company have an ROE of 17 per cent and an ROCE of 25 per cent.",
      "url": "https://www.dsij.in/dsijarticledetail/multibagger-ev-charger-manufacturing-company-enters-strategic-partnership-with-hubject-aims-to-fuel-further-growth-in-indias-booming-ev-market-39067",
      "urlToImage": "https://www.dsij.in/Portals/0/EasyDNNnews/39067/536.jpg",
      "publishedAt": "2024-06-19T12:34:31Z",
      "content": "The stock gave multibagger returns of over 100 per cent from its 52-week low of Rs 170.25 per share.\r\nThe Indian electric vehicle (EV) market is experiencing explosive growth, with sales nearly doubl… [+4093 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Motoroctane.com"
      },
      "author": "Swaraj Acharekar",
      "title": "Premium Renault Duster Spotted Testing In India - MotorOctane",
      "description": "The launch of the Renault Duster is one of the most anticipated ones and now a premium version of it has been spotted testing",
      "url": "https://motoroctane.com/news/274807-premium-renault-duster-spotted-testing-in-india",
      "urlToImage": "https://motoroctane.com/wp-content/uploads/2024/06/spotted-in-India.jpg",
      "publishedAt": "2024-06-19T12:26:47Z",
      "content": "The Europeans have blown hot &amp; cold in the Indian car market. Currently, they have been relegated behind Korean, Japanese and Indian brands. One such brand is Renault, which is trying to gain los… [+1809 chars]"
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
          "name": "Dsij.in"
      },
      "author": "Kiran Shroff",
      "title": "Abu Dhabi Investment Authority bought 5,60875 shares of this multibagger defence stock with a Rs 600 crore order book; Scrip hit 52-week high! - Dalal Street Investment Journal",
      "description": "The stock is up by 61 per cent in just 1 week and gave multibagger returns of over 140 per cent from its 52-week low of Rs 600.20 per share.",
      "url": "https://www.dsij.in/dsijarticledetail/abu-dhabi-investment-authority-bought-560875-shares-of-this-multibagger-defence-stock-with-a-rs-600-crore-order-book-scrip-hit-52-week-high-39065",
      "urlToImage": "https://www.dsij.in/Portals/0/EasyDNNnews/39065/585.jpg",
      "publishedAt": "2024-06-19T11:46:51Z",
      "content": "The stock is up by 61 per cent in just 1 week and gave multibagger returns of over 140 per cent from its 52-week low of Rs 600.20 per share.\r\nToday, shares of Paras Defence and Space Technologies Ltd… [+2468 chars]"
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
  },
  {
      "source": {
          "id": null,
          "name": "Carwale.com"
      },
      "author": "Desirazu Venkat",
      "title": "India-bound 2025 BMW X3 revealed: First look - CarWale",
      "description": "This is the 4th generation car and will come to India in 2025",
      "url": "https://www.carwale.com/news/india-bound-2025-bmw-x3-revealed-first-look/",
      "urlToImage": "https://imgd.aeplcdn.com/642x336/n/cw/ec/179859/bmw-x3-left-front-three-quarter2.jpeg?isig=0&art=1&q=80",
      "publishedAt": "2024-06-19T11:31:13Z",
      "content": "What is it?\r\nWhat you see in the photos is the fourth-generation BMW X3 that will come to India in 2025. Theres a sense of familiarity in the overall shape and it comes with BMWs latest design langua… [+3159 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": "Moneycontrol",
      "title": "Nifty, O Nifty! Tu kab Sensex banegi? Look where Nifty will end up going by their relationship thus far - Moneycontrol",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMipgFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL25ld3MvYnVzaW5lc3MvZWFybmluZ3MvbmlmdHktby1uaWZ0eS10dS1rYWItc2Vuc2V4LWJhbmVnaS1sb29rLXdoZXJlLW5pZnR5LXdpbGwtZW5kLXVwLWdvaW5nLWJ5LXRoZWlyLXJlbGF0aW9uc2hpcC10aHVzLWZhci0xMjc1MjAxNS5odG1s0gGqAWh0dHBzOi8vd3d3Lm1vbmV5Y29udHJvbC5jb20vbmV3cy9idXNpbmVzcy9lYXJuaW5ncy9uaWZ0eS1vLW5pZnR5LXR1LWthYi1zZW5zZXgtYmFuZWdpLWxvb2std2hlcmUtbmlmdHktd2lsbC1lbmQtdXAtZ29pbmctYnktdGhlaXItcmVsYXRpb25zaGlwLXRodXMtZmFyLTEyNzUyMDE1Lmh0bWwvYW1w?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-19T10:37:53Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Top Gainers and Losers today on 19 June, 2024: HDFC Bank, Axis Bank, Titan Company, Larsen & Toubro among most active stocks; Check full list here | Stock Market News - Mint",
      "description": "Top Gainers and Losers Today : The Sensex gained 36.45 points, or 0.05, to settle at 77301.14, while the Nifty lost 41.9 points, or -0.18, to close at 23557.9.",
      "url": "https://www.livemint.com/market/stock-market-news/top-gainers-and-losers-today-on-19-june-2024-hdfc-bank-axis-bank-titan-company-larsen-toubro-among-most-active-stocks-check-full-list-here-11718793199200.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2023/09/20/1600x900/Top_Gainer_Loser_1695188517120_1695188522963.webp",
      "publishedAt": "2024-06-19T10:33:18Z",
      "content": "Top Gainers and Losers Today : The Nifty closed at 23557.9, down by 0.18% today. Throughout the day, the Nifty reached a high of 23664.0 and a low of 23412.9. The Sensex traded between 77851.63 and 7… [+3807 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Moneycontrol"
      },
      "author": "Moneycontrol",
      "title": "Fertiliser sector poised for bull rally, showing signs of leadership in high beta sectors - Moneycontrol",
      "description": null,
      "url": "https://www.moneycontrol.com/news/business/markets/fertilizer-sector-poised-for-bull-rally-showing-signs-of-leadership-in-high-beta-sectors-12751880.html",
      "urlToImage": null,
      "publishedAt": "2024-06-19T10:28:44Z",
      "content": null
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": "CNBCTV18",
      "title": "HDFC Bank may take Bank Nifty to 60,000 within a year, says one analyst - CNBCTV18",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LmNuYmN0djE4LmNvbS9tYXJrZXQvc3RvY2tzL2hkZmMtYmFuay1zaGFyZS1wcmljZS1iYW5rLW5pZnR5LXRvLTYwMDAwLXdpdGhpbi1hLXllYXItMTk0Mjk2ODUuaHRt0gFvaHR0cHM6Ly93d3cuY25iY3R2MTguY29tL21hcmtldC9zdG9ja3MvaGRmYy1iYW5rLXNoYXJlLXByaWNlLWJhbmstbmlmdHktdG8tNjAwMDAtd2l0aGluLWEteWVhci0xOTQyOTY4NS5odG0vYW1w?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-19T10:05:07Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Entrackr"
      },
      "author": "Entrackr",
      "title": "Fintech startup POP raises $2.4 Mn led by India Quotient - Entrackr",
      "description": null,
      "url": "https://entrackr.com/2024/06/fintech-startup-pop-raises-2-4-mn-led-by-india-quotient/",
      "urlToImage": null,
      "publishedAt": "2024-06-19T09:43:00Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "From 1-room office to stock market grand debut, Ixigo co-founders share journey in 2 pics - Moneycontrol",
      "description": "Ixigo's humble beginnings are immortalised in a pair of photographs shared by Aloke Bajpai. The first image depicts Bajpai and Kumar in their early days at Ixigo and the second post their IPO.",
      "url": "https://www.moneycontrol.com/news/trends/from-1-room-office-to-stock-market-grand-debut-ixigo-co-founders-share-journey-in-2-pics-12751939.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240619090936_MixCollage-19-Jun-2024-02-38-PM-9977.jpg",
      "publishedAt": "2024-06-19T09:12:01Z",
      "content": "Ixigo, the brainchild of Aloke Bajpai and Rajnish Kumar, made its debut on the stock market this Tuesday. The co-founders of the travel company shared their journey from a modest one-room office to a… [+2012 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "CNBCTV18"
      },
      "author": "Shloka Badkar",
      "title": "Coal India to get private operators on board to tap coal from 23 abandoned underground mines - CNBCTV18",
      "description": "Coal India Share Price | The successful bidder would be the one offering the maximum revenue to the company. \"The minimum revenue to be shared is 4%. The contract period is for a maximum of 25 years,\" the company said.",
      "url": "https://www.cnbctv18.com/market/coal-india-share-price-private-operators-abandoned-underground-mines-stock-reaction-19430487.htm",
      "urlToImage": "https://images.cnbctv18.com/uploads/2024/05/coal-1-2024-05-5ba8c3ab60f7afb77564f4554986dede.jpg?im=FitAndFill,width=500,height=300",
      "publishedAt": "2024-06-19T08:31:19Z",
      "content": "Coal India on Wednesday, June 19, said that it will tap coal from 23 of its abandoned underground mines via private operators on a revenue sharing model.The company said coal will be tapped from late… [+2010 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Zee Business"
      },
      "author": "PTI",
      "title": "Jakson Green wins NTPC order for setting up project to produce 4G ethanol from flue gas - Zee Business",
      "description": "The proposed plant at Lara in Chhattisgarh will produce 10 tonnes per day (TPD) of 4G ethanol from flue gases emitted from power plants, a company statement said.",
      "url": "https://www.zeebiz.com/companies/news-jakson-green-wins-ntpc-order-for-setting-up-project-to-produce-4g-ethanol-from-flue-gas-296844",
      "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2024/06/19/300257-handshake-67963861280.jpg",
      "publishedAt": "2024-06-19T08:18:42Z",
      "content": "New energy transition platform Jakson Green on Wednesday said it has bagged an order from state-owned NTPC for setting up a plant to produce 4G ethanol from flue gas.\r\nThe proposed plant at Lara in C… [+1744 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "CNBCTV18"
      },
      "author": "Anshul",
      "title": "SBI approves raising up to ₹20,000 crore for FY25 via long term bonds - CNBCTV18",
      "description": "State Bank of India, the country's largest public sector bank, on Wednesday (June 19) said that its board has approved a plan to raise up to ₹20,000 crore through long-term bonds during the financial year 2024-25.This decision follows a report from Reuters in…",
      "url": "https://www.cnbctv18.com/market/sbi-approves-raising-up-to-rs-20000-crore-fy25-long-term-bonds-investment-19430476.htm",
      "urlToImage": "https://images.cnbctv18.com/uploads/2022/08/sbi-atm.jpg?im=FitAndFill,width=500,height=300",
      "publishedAt": "2024-06-19T08:05:20Z",
      "content": "State Bank of India, the country's largest public sector bank, on Wednesday (June 19) said that its board has approved a plan to raise up to 20,000 crore through long-term bonds during the financial … [+991 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Carwale.com"
      },
      "author": "Aditya Nadkarni",
      "title": "New Mercedes-Benz E-Class spotted in India; to be launched soon? - CarWale",
      "description": "The sixth-gen E-Class was revealed in April 2023.",
      "url": "https://www.carwale.com/news/new-mercedes-benz-e-class-spotted-in-india-to-be-launched-soon/",
      "urlToImage": "https://imgd.aeplcdn.com/642x336/n/cw/ec/179747/mercedes-benz-new-e-class-right-rear-three-quarter0.jpeg?isig=0&art=1&q=80",
      "publishedAt": "2024-06-19T07:31:30Z",
      "content": "<ul><li>The sixth-gen E-Class was revealed in April 2023</li><li>Will be introduced in the LWB form later this year</li></ul>Mercedes-Benz pulled the covers of the sixth-generation E-Class in April l… [+1109 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Indianstartupnews.com"
      },
      "author": "Vivek Vishwakarma",
      "title": "GVFL's seed-stage focused Prarambh Fund achieves first close at Rs 100 Crore - Indian Startup News",
      "description": "Ahmedabad-based venture capital firm GVFL has announced the first close of its new Seed Stage fund, Prarambh Fund. The first close has been reached at Rs 100 crore.",
      "url": "https://indianstartupnews.com/news/gvfl-seed-stage-focused-prarambh-fund-achieves-first-close-at-rs-100-crore-4768796",
      "urlToImage": "https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/indianstartupnews/media/media_files/SDUnRmhZuF479ghj5sRL.png",
      "publishedAt": "2024-06-19T07:28:11Z",
      "content": "Ahmedabad-based venture capital firm GVFL has announced the first close of its new Seed Stage fund, Prarambh Fund. The first close has been reached at Rs 100 crore.\r\nThe total fund corpus is Rs 200 c… [+2360 chars]"
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

export default NewsB

// In case of inline CSS we made a javascript object and 
// wirte inside double curly braces ;
