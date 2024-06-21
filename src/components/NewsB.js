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
//  apiKey:PropTypes.string,
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
            "name": "Cardekho.com"
        },
        "author": "CarDekho",
        "title": "Indian Citroen C3 Aircross vs European C3 Aircross: 5 Key Differences Explained - CarDekho",
        "description": null,
        "url": "https://www.cardekho.com/india-car-news/indian-citroen-c3-aircross-vs-european-c3-aircross-5-key-differences-explained-32696.htm",
        "urlToImage": null,
        "publishedAt": "2024-06-20T09:35:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "A Ksheerasagar",
        "title": "Fertiliser stocks FACT, RCF, GSFC and others jump up to 20% on MSP hike | Stock Market News - Mint",
        "description": "Agri-related companies, including fertiliser stocks, surged in Thursday's trade on optimism over MSP hike. Shares of FACT hit 20% upper circuit limit. Other stocks like RCF, National Fertilizers, and Chambal Fertilisers gained 3-19%.",
        "url": "https://www.livemint.com/market/stock-market-news/fertiliser-stocks-fact-rcf-gsfc-national-fertilizers-madras-fertilizers-and-others-jump-up-to-20-on-msp-hike-11718864911199.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/20/1600x900/2-0-156982339-Fertilizer-0_1681140043861_1718864919510.jpg",
        "publishedAt": "2024-06-20T08:04:42Z",
        "content": "Agri-related companies, including fertiliser stocks, witnessed a sharp uptick in share value in Thursday's intraday trade, driven by market optimism over the MSP hike. Shares of FACT (The Fertilisers… [+4229 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "The Financial Express",
        "title": "Indus Towers rings in gains after Bharti Airtel, SBI Mutual fund buy over 1% stake each - The Financial Express",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMihgFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9tYXJrZXQvaW5kdXMtdG93ZXJzLXJpbmdzLWluLWdhaW5zLWFmdGVyLWJoYXJ0aS1haXJ0ZWwtc2JpLW11dHVhbC1mdW5kLWJ1eS1vdmVyLTEtc3Rha2UtZWFjaC0zNTI5NzY5L9IBiwFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9tYXJrZXQvaW5kdXMtdG93ZXJzLXJpbmdzLWluLWdhaW5zLWFmdGVyLWJoYXJ0aS1haXJ0ZWwtc2JpLW11dHVhbC1mdW5kLWJ1eS1vdmVyLTEtc3Rha2UtZWFjaC0zNTI5NzY5L2xpdGUv?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-20T07:30:20Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Etnownews.com"
        },
        "author": "Anish Mondal",
        "title": "Rs 95 IPO GMP Today: Check company name, price band and other details - ET Now",
        "description": "DEE Development Engineers IPO GMP Price Today: According to the details available, the DEE Development Engineers IPO is likely to be finalized on June 24 (Monday).",
        "url": "https://www.etnownews.com/markets/rs-95-ipo-gmp-today-check-company-name-price-band-and-other-details-dee-development-engineers-article-111130526",
        "urlToImage": "https://etstatic.tnn.in/thumb/msid-111130526,width-1280,height-720,resizemode-75/111130526.jpg",
        "publishedAt": "2024-06-20T06:10:15Z",
        "content": "DEE Development Engineers Limited's IPO face Value is Rs 10 and the market timings are from 10 am to 5 pm. (Image: iStock/ET NOW NEWS)"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Moneycontrol News",
        "title": "Shaktikanta Das:Growth of unsecured loans has moderated after RBI's timely action - Moneycontrol",
        "description": "Reserve Bank governor Shaktikanta Das on June 20 said timely action on unsecured loans has moderated the growth of such loans.He was speaking at the second global conference on financial resilience organised by the College of Supervisors in Mumbai.",
        "url": "https://www.moneycontrol.com/news/business/markets/growth-of-unsecured-loans-has-moderated-after-rbis-timely-action-shaktikanta-das-12752543.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/04/shaktikanta-das-rbi-governor-2.jpg",
        "publishedAt": "2024-06-20T05:52:55Z",
        "content": "Reserve Bank governor Shaktikanta Das on June 20 said timely action on unsecured loans has moderated the growth of such loans.\r\n\"We thought it is better to act in advance and slow down the credit gro… [+2131 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBCTV18"
        },
        "author": "Shloka Badkar",
        "title": "InterGlobe Aviation, Indian Hotels and more — Here is a list of stocks in the new Nifty India Tourism index - CNBCTV18",
        "description": "The index will track the largest 30 stocks from the eligible basic industries, picked based on six-month average free-float market capitalisation. BLS International, Chalet Services, Devyani International, Easy Trip Planners, GMR Airports, Indian Hotels, IRTC…",
        "url": "https://www.cnbctv18.com/market/nifty-india-tourism-index-thematic-new-bls-international-indigo-indian-hotels-irctc-vip-and-more-full-list-19430982.htm",
        "urlToImage": "https://images.cnbctv18.com/uploads/2022/04/travel.jpg?im=FitAndFill,width=500,height=300",
        "publishedAt": "2024-06-20T05:45:41Z",
        "content": "The National Stock Exchange has launched the Nifty India Tourism index, a new thematic index. It will track the performance of Nifty 500 firms that are represent the travel and tourism industry.The i… [+2902 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CoinDesk"
        },
        "author": "Amitoj Singh",
        "title": "Binance Fined $2.2M by India’s Financial Intelligence Unit - CoinDesk",
        "description": "Binance became the first offshore crypto-related entity, along with KuCoin, to be approved by India’s Financial Intelligence Unit (FIU) in May, conditional to paying a penalty.",
        "url": "https://www.coindesk.com/policy/2024/06/20/binance-fined-22-million-by-indias-financial-intelligence-unit/",
        "urlToImage": "https://www.coindesk.com/resizer/j2gL6st91QjtfDyqFpKkYJMT_sg=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/TI45YDT45RHE3CKGYGJT2I6YRQ.JPG",
        "publishedAt": "2024-06-20T05:11:00Z",
        "content": "<ul><li>Indias Financial Intelligence Unit imposes $2.2 million fine in Binance.\r\n</li><li>The anti-money laundering unit approved Binance in May, conditional to penalty payment.\r\n</li></ul>\r\nBinance… [+1597 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Ankit Gohel",
        "title": "Nifty 50 target raised to 25,683; HDFC Bank, SBI, Dabur among 19 high-conviction stock picks by InCred Equities | Stock Market News - Mint",
        "description": "Defence, realty, automobile, capital goods and metal are the key sectors driving the outperformance since April 2024. On the other hand, IT and pharma are the laggards.",
        "url": "https://www.livemint.com/market/stock-market-news/nifty-50-target-raised-to-25-683-hdfc-bank-sbi-dabur-among-19-high-conviction-stock-picks-by-incred-equities-11718859518189.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/20/1600x900/g64b32c341fa95f9b03c8170395a303b5eb0ca98c03317851b_1711595907687_1718859997092.jpg",
        "publishedAt": "2024-06-20T05:08:18Z",
        "content": "Indian stock market recouped its losses after the Lok Sabha Elections-led volatility and the benchmark indices, Sensex and Nifty 50, started scaling new highs. Defence, realty, automobile, capital go… [+3932 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Benzinga"
        },
        "author": "Utkarsh Roshan",
        "title": "Tata Tech Shares Extend Losses To 6th Day As Brokerage Initiates Coverage With 'Sell' - Benzinga India",
        "description": "Goldman Sachs initiated coverage on the Tata Group company with a 'Sell' rating and set a target price of ₹900, indicating a potential downside of 12% from its last closing price of ₹1,027.",
        "url": "https://in.benzinga.com/content/39404566/tata-tech-shares-extend-losses-to-6th-day-as-brokerage-initiates-coverage-with-sell",
        "urlToImage": "https://cdn.benzinga.com/files/images/story/2024/06/20/StockMarket-analysts.png?width=1200&height=800&fit=crop",
        "publishedAt": "2024-06-20T05:00:26Z",
        "content": "Tata Techs share price dipped sharply at open on Thursday after a major brokerage firm initiated coverage on the stock.\r\nWhat Happened: Goldman Sachs initiated coverage on the Tata Group company with… [+1489 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "NDTV",
        "title": "Instagram Users Claim They Found Dead Rat Inside Chocolate Syrup Bottle, Hershey's Apologises - NDTV",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3d3dy5uZHR2LmNvbS9mb29kL3ZpcmFsLXZpZGVvLWluc3RhZ3JhbS11c2Vycy1jbGFpbS10aGV5LWZvdW5kLWRlYWQtcmF0LWluc2lkZS1jaG9jb2xhdGUtc3lydXAtYm90dGxlLWhlcnNoZXlzLWFwb2xvZ2lzZXMtNTkyMTkzNNIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-20T04:49:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Dhanya Nagasundaram",
        "title": "Top Stock Recommendations: Osho Krishan of Angel One suggests buying Sundaram Finance, and Persistent Systems today | Stock Market News - Mint",
        "description": "Top Stock Recommendations: Osho Krishan, Sr. Analyst, Technical & Derivatives of Angel One, recommends buying Sundaram Finance Ltd, and Persistent Systems Ltd.",
        "url": "https://www.livemint.com/market/stock-market-news/top-stock-recommendations-osho-krishan-of-angel-one-suggests-buying-sundaram-finance-and-persistent-systems-today-11718855828678.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/20/1600x900/Mr_Osho_Krishan_1708533988044_1718855864262.jpeg",
        "publishedAt": "2024-06-20T04:30:17Z",
        "content": "Stock Market News: The domestic benchmark equity indices, the Sensex and the Nifty 50 started Thursday's session in green but however traded flat-to-negative amid mixed global cues.The Sensex began 9… [+5123 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBCTV18"
        },
        "author": "Hormaz Fatakia",
        "title": "Suzlon Energy shares trade above ₹50 for this reason; Should you be a buyer? - CNBCTV18",
        "description": "Suzlon shares are up 33% so far in 2024. This will be the fifth straight year of positive returns. The stock has delivered positive annual returns since 2020.",
        "url": "https://www.cnbctv18.com/market/suzlon-energy-share-price-block-deal-179-crore-buyer-seller-dividend-timeline-analysts-say-19430940.htm",
        "urlToImage": "https://images.cnbctv18.com/uploads/2021/03/windenergy2.jpg?im=FitAndFill,width=500,height=300",
        "publishedAt": "2024-06-20T04:27:36Z",
        "content": "Shares of Suzlon Energy Ltd., the wind turbine manufacturer, gained as much as 5% to trade back above the mark of 50 per share after a block deal that took place in the stock.As many as 3.7 crore sha… [+2085 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "GaadiWaadi.com"
        },
        "author": "Surendhar M",
        "title": "New-Gen Skoda Kodiaq Spotted For The First Time In India, Launch Soon? - GaadiWaadi.com",
        "description": "The new-gen Skoda Kodiaq receives numerous updates both inside and out compared to the outgoing model; could retain existing petrol engine",
        "url": "https://gaadiwaadi.com/new-gen-skoda-kodiaq-spotted-for-the-first-time-in-india-launch-soon/",
        "urlToImage": "https://gaadiwaadi.com/wp-content/uploads/2024/06/2024-Skoda-Kodiaq-Spied-India-2.jpg",
        "publishedAt": "2024-06-20T04:22:16Z",
        "content": "The second generation Skoda Kodiaq has been caught on camera for the first time fuelling speculations about its imminent launch. Spied without camouflage and red test plates, the prototype has been f… [+1898 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Nitin Agrawal",
        "title": "This auto ancillary is set to capture new-age growth opportunities - Moneycontrol",
        "description": "Robust demand across segments and leadership position augur well for Gabriel",
        "url": "https://www.moneycontrol.com/news/business/moneycontrol-research/this-auto-ancillary-is-set-to-capture-new-age-growth-opportunities-12752457.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/04/Interior-sunroof.jpg",
        "publishedAt": "2024-06-20T04:15:46Z",
        "content": "Unlock this article at 1 Highlights- \r\n Quarterly performance largely backed by improved realisations- \r\n Medium-term triggers China plus and protectionist measures for tyre industry- \r\n Valuations n… [+721 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Benzinga"
        },
        "author": "Arpit Nayak",
        "title": "Why PNB Housing Finance's Shares Are Down 4% At Open - Benzinga India",
        "description": "The total deal size is expected to be around ₹830 crore, suggesting over one crore shares would be offloaded by major investors.",
        "url": "https://in.benzinga.com/content/39404372/why-pnb-housing-finances-shares-are-down-4-at-open",
        "urlToImage": "https://cdn.benzinga.com/files/images/story/2024/06/20/Housing-RealEstate-Mortgageup-StocksDown.jpeg?width=1200&height=800&fit=crop",
        "publishedAt": "2024-06-20T04:12:43Z",
        "content": "Shares of PNB Housing Finance were tanking on Thursday amid reports of a block sale in the companys stock.\r\nWhat Happened: 1.36 crore shares, or 5.2% equity, of PNB Housing Finance, were traded throu… [+1083 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Benzinga"
        },
        "author": "Ananthu C U",
        "title": "Macquarie Bullish On Private Sector Banks, HDFC Bank Among Top Picks - Benzinga India",
        "description": "Macquarie is bullish on private sector banks, bearish on PSU banks & NBFCs. HDFC Bank is among its top picks",
        "url": "https://in.benzinga.com/content/39404352/macquarie-bullish-on-private-sector-banks-hdfc-bank-among-top-picks",
        "urlToImage": "https://cdn.benzinga.com/files/images/story/2024/06/20/HDFC-Bank.jpeg?width=1200&height=800&fit=crop",
        "publishedAt": "2024-06-20T04:08:18Z",
        "content": "Global brokerage firm Macquarie on its note on the banking and financial sector said that it is bullish on private sector banks and bearish on public sector (PSU) banks. \r\nWhat Happened: The research… [+1632 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBCTV18"
        },
        "author": "https://www.cnbctv18.com",
        "title": "Tech analysts see upside in ICICI Bank, Axis Bank, IndiaMART, Chambal Fertilisers and Infosys - CNBCTV18",
        "description": "On Thursday, market tech analysts Apurva Sheth, Mitessh Thakkar, Shilpa Rout, and F&O analyst Chandan Taparia recommended these stocks for the short term.",
        "url": "https://www.cnbctv18.com/photos/market/icici-bank-indiamart-kotak-mahindra-infosys-chambal-fertilisers-stocks-to-buy-19430899.htm",
        "urlToImage": "https://images.cnbctv18.com/uploads/2019/12/Buy_1.jpg?im=FitAndFill,width=500,height=300",
        "publishedAt": "2024-06-20T04:07:10Z",
        "content": "Technical analysts Apurva Sheth, Head of Research, SAMCO Securities, Mitessh Thakkar of earningwaves.com and Shilpa Rout of Prabhudas Lilladher, along with Chandan Taparia, Derivative and Technical A… [+1871 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Benzinga"
        },
        "author": "Utkarsh Roshan",
        "title": "Tata Motors Shares In Green After 2 Days As Brokerages See Upto 20% Upside - Benzinga India",
        "description": "Tata Motors' share price jumped back in the green on Thursday halting its two straight session losing streak.",
        "url": "https://in.benzinga.com/content/39404325/tata-motors-shares-in-green-after-2-days-as-brokerages-see-upto-20-upside",
        "urlToImage": "https://cdn.benzinga.com/files/images/story/2024/06/20/Jaguar-Land-Rover.jpeg?width=1200&height=800&fit=crop",
        "publishedAt": "2024-06-20T04:06:40Z",
        "content": "Tata Motors share price jumped back in the green on Thursday halting its two straight session losing streak.\r\nWhat Happened: The companys luxury car subsidiary Jaguar Land Rover (JLR) held its invest… [+2086 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Ranjani Raghavan, Neha Joshi",
        "title": "Sebi directs Religare's board, Saluja to seek approvals for Burman open offer | Company Business News - Mint",
        "description": "The markets regulator has signalled its unhappiness over the Religare board's attempt to stall the Burman family’s open offer for the company. It has directed the Religare board to seek RBI approval within a week",
        "url": "https://www.livemint.com/companies/news/sebi-directs-religares-board-saluja-to-seek-approvals-for-burman-open-offer-11718851949476.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/20/1600x900/Rashmi_saluja_1701923688346_1718854145308.jpeg",
        "publishedAt": "2024-06-20T03:35:08Z",
        "content": "Indias markets regulator has pulled up Religare Enterprises Ltds chairperson Rashmi Saluja and its board of directors for failing to comply with the securities law after the Burman family launched an… [+5090 chars]"
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
