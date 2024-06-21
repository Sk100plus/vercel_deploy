import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
export class NewsSci extends Component {

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
            "name": "Technology Networks"
        },
        "author": "Technology Networks",
        "title": "Researchers Film Energy Materials As They Form - Technology Networks",
        "description": "Eyes glued to a live transmission from inside a reaction vessel, LMU researchers watch chemical reactions at work. Their results will improve the manufacture of the next generation of energy materials.",
        "url": "https://www.technologynetworks.com/applied-sciences/news/researchers-film-energy-materials-as-they-form-387964",
        "urlToImage": "https://assets.technologynetworks.com/production/dynamic/images/content/387964/researchers-film-energy-materials-as-they-form-387964-640x360.jpg?cb=20240620",
        "publishedAt": "2024-06-20T08:31:43Z",
        "content": "Shooting a movie in the lab requires special equipment. Especially when the actors are molecules invisible to the naked eye reacting with each other. Imagine trying to film tiny lava flows during a v… [+5119 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Today"
        },
        "author": "BUSINESSTODAY",
        "title": "'After Titanic, time for Venus': Co-Founder of Titan Submersible Company wants to send humans in space - Business Today",
        "description": "Guillermo Söhnlein, co-founder of OceanGate, the company behind the ill-fated Titan submersible, is now focusing on human exploration of Venus.",
        "url": "https://www.businesstoday.in/visualstories/business/after-titanic-time-for-venus-co-founder-of-titan-submersible-company-wants-to-send-human-in-space-145247-20-06-2024",
        "urlToImage": "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2024/06/cropped-AdobeStock_437497157.jpeg?size=*:675",
        "publishedAt": "2024-06-20T07:55:35Z",
        "content": "Söhnlein believes Venus is a more viable option than Mars due to its closer proximity, similar orbit, lower cost, more frequent flight windows, shorter transit times, and higher safety."
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
            "name": "YouTube"
        },
        "author": null,
        "title": "Virgo Galaxy Black Hole activated | Latest News | WION - WION",
        "description": "A latest international study indicates that astronomers might have chanced upon a never-before phenomenon - the awakening of a Black Hole in a faraway Galaxy...",
        "url": "https://www.youtube.com/watch?v=8dxThcsgsLg",
        "urlToImage": "https://i.ytimg.com/vi/8dxThcsgsLg/maxresdefault.jpg",
        "publishedAt": "2024-06-20T07:05:07Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Bizzbuzz.news"
        },
        "author": "Pok Man Leung, Chris Greening",
        "title": "Billions-year-old microbes offer blueprint for hydrogen economy - Bizz Buzz",
        "description": "Hydrogen, the fuel of archaea, serves as a bridge between our planet's past, teeming with these fascinating microbes, and a potential future powered by clean energy",
        "url": "https://www.bizzbuzz.news/trendz/billions-year-old-microbes-offer-blueprint-for-hydrogen-economy-1322800",
        "urlToImage": "https://www.bizzbuzz.news/h-upload/2024/06/20/1917151-hydrigen.webp",
        "publishedAt": "2024-06-20T07:02:38Z",
        "content": "Studying archaea's diverse metabolic pathways, like methane production and hydrogen-forming fermentation, can inform strategies to mitigate greenhouse gas emissions \r\nThree-quarters of all matter in … [+4963 chars]"
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
            "name": "Allianz.com"
        },
        "author": "Allianz.com",
        "title": "Here comes the Sun: the dangers of geomagnetic storms - Allianz.com",
        "description": null,
        "url": "https://commercial.allianz.com/news-and-insights/expert-risk-articles/geomagnetic-storms.html",
        "urlToImage": null,
        "publishedAt": "2024-06-20T06:56:56Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "WION"
        },
        "author": null,
        "title": "China`s 11th century `guest star` revealed as spectacular Crab Nebula - WION",
        "description": "Over a millennium ago, in July 1054, when Chinese astronomers documented a remarkable \"guest star\" that shone as brightly as Jupiter for nearly a month, it sparked curiosity and speculations in equal proportions. But the two quickly went into oblivion as the …",
        "url": "https://www.wionews.com/science/chinas-11th-century-guest-star-revealed-as-spectacular-crab-nebula-733428",
        "urlToImage": "https://cdn.wionews.com/sites/default/files/2024/06/20/438862-gueststar.png",
        "publishedAt": "2024-06-20T06:52:50Z",
        "content": "Over a millennium ago, in July 1054, when Chinese astronomers documented a remarkable \"guest star\" that shone as brightly as Jupiter for nearly a month, it sparked curiosity and speculations in equal… [+2107 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NewsBytes"
        },
        "author": "Akash Pandey",
        "title": "NASA plans to launch toaster-sized 'star' to study the universe - NewsBytes",
        "description": "",
        "url": "https://www.newsbytesapp.com/news/science/nasa-planning-to-launch-artificial-star-into-space/story",
        "urlToImage": "https://i.cdn.newsbytesapp.com/images/27115511718855894.jpg",
        "publishedAt": "2024-06-20T04:48:11Z",
        "content": "Next Article\r\nNASA is gearing up to launch an artificial star, around the size of a toaster and equipped with eight lasers, into space. \r\n This is part of the space agency's $19.5 million Landolt mis… [+1526 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NewsBytes"
        },
        "author": "Dwaipayan Roy",
        "title": "Methane waves are shaping Saturn's largest moon, reveals MIT study - NewsBytes",
        "description": "",
        "url": "https://www.newsbytesapp.com/news/science/titan-s-surface-is-being-shaped-by-methane-waves/story",
        "urlToImage": "https://i.cdn.newsbytesapp.com/images/2005111718855930.jpg",
        "publishedAt": "2024-06-20T04:17:06Z",
        "content": "Next Article\r\nSaturn's largest moon, Titan, bears a striking resemblance to Earth due to the presence of large liquid bodies on its surface. \r\n However, unlike Earth's water-filled oceans and rivers,… [+1568 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "\"Once-In-A-Lifetime\" Cosmic Explosion Will Be Visible From Earth, Says NASA - NDTV",
        "description": "The \"Blaze Star,\" which is a binary system in the Northern Crown about 3,000 light years from Earth, is comprised of a white dwarf, an Earth-sized remnant of a dead star with a mass comparable to the sun.",
        "url": "https://www.ndtv.com/science/once-in-a-lifetime-cosmic-explosion-will-be-visible-from-earth-says-nasa-check-details-5928430",
        "urlToImage": "https://c.ndtvimg.com/2024-06/p35qqjf_interstellar-explosion-_625x300_20_June_24.jpeg?ver-20240615.100",
        "publishedAt": "2024-06-20T04:08:08Z",
        "content": "An Earth-sized remnant of a dead star, located about 3,000 light years from Earth, will explode\r\nA celestial spectacle is set to dazzle stargazers this summer, as NASA has predicted the rare occurren… [+2396 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "ET HealthWorld",
        "title": "Keeping astronauts healthy in space isn't easy − new training programs will prepare students to perform me.. - ETHealthWorld",
        "description": "Companies such as SpaceX, Blue Origin and Sierra Space have developed vehicles with reusable boosters, automated flight systems and lightweight materials to support these deep space missions. Some even have ambitions of their own to build private space statio…",
        "url": "https://health.economictimes.indiatimes.com/news/industry/keeping-astronauts-healthy-in-space-isnt-easy-new-training-programs-will-prepare-students-to-perform-medicine-while-thousands-of-miles-away-from-earth/111125539",
        "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-111125539,imgsize-169882,width-1200,height=765,overlay-ethealth/industry/keeping-astronauts-healthy-in-space-isnt-easy-new-training-programs-will-prepare-students-to-perform-medicine-while-thousands-of-miles-away-from-earth.jpg",
        "publishedAt": "2024-06-20T01:06:50Z",
        "content": "Colorado: In the coming decade, more people will go to space than ever before as human spaceflight enters a new era. NASA, the European Space Agency and other governmental agencies are partnering to … [+5920 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "The Hindu",
        "title": "How will AlphaFold 3 change life sciences research? - The Hindu",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMicGh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9zY2ktdGVjaC9zY2llbmNlL2hvdy13aWxsLWFscGhhZm9sZC0zLWNoYW5nZS1saWZlLXNjaWVuY2VzLXJlc2VhcmNoL2FydGljbGU2ODMwNzQ1Mi5lY2XSAXVodHRwczovL3d3dy50aGVoaW5kdS5jb20vc2NpLXRlY2gvc2NpZW5jZS9ob3ctd2lsbC1hbHBoYWZvbGQtMy1jaGFuZ2UtbGlmZS1zY2llbmNlcy1yZXNlYXJjaC9hcnRpY2xlNjgzMDc0NTIuZWNlL2FtcC8?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-20T00:00:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "The Conversation Africa"
        },
        "author": "Robyn Schofield",
        "title": "Defunct satellites burning up in the atmosphere could damage the ozone layer. Here's how - The Conversation",
        "description": "Burnt-up satellites could dump hundreds of tonnes of aluminium in the stratosphere every year.  An atmospheric chemist explains what that might mean",
        "url": "https://theconversation.com/defunct-satellites-burning-up-in-the-atmosphere-could-damage-the-ozone-layer-heres-how-232592",
        "urlToImage": "https://images.theconversation.com/files/601683/original/file-20240619-19-3eb1g0.jpg?ixlib=rb-4.1.0&rect=25%2C3%2C2371%2C1185&q=45&auto=format&w=1356&h=668&fit=crop",
        "publishedAt": "2024-06-19T20:18:13Z",
        "content": "Communications companies such as Starlink plan to launch tens of thousands of satellites into orbit around Earth over the next decade or so. The growing swarm is already causing problems for astronom… [+6590 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "News9live.com"
        },
        "author": "Harish Dugh",
        "title": "Gigantic 190-foot asteroid hurtling towards Earth, says NASA at a blazing 32076 mph - News9 LIVE",
        "description": "190-foot Asteroid 2024 MC is travelling at a fiery pace and is heading towards Earth, says NASA.",
        "url": "https://www.news9live.com/science/bta-gigantic-190-foot-asteroid-hurtling-towards-earth-says-nasa-32076-mph-2584333",
        "urlToImage": "https://images.news9live.com/wp-content/uploads/2024/06/asteroid-nasa-1.jpg",
        "publishedAt": "2024-06-19T18:44:36Z",
        "content": "Moving towards Earth at 32076 mph, NASA has said that this asteroid will make a close approach to Earth today. (Pixabay)\r\nA gigantic asteroid is rushing towards Earth and it is travelling at shocking… [+1795 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Gravitas: NASA scientists fix Voyager 1 from 30 billion kilometres away - WION",
        "description": "Scientists at NASA have, once again, achieved a remarkable feat. They were able to fix 47 year old space probe, Voyager 1, from 15 billion miles away. The Vo...",
        "url": "https://www.youtube.com/watch?v=BQlbr1hanzg",
        "urlToImage": "https://i.ytimg.com/vi/BQlbr1hanzg/maxresdefault.jpg",
        "publishedAt": "2024-06-19T17:52:07Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Republic World"
        },
        "author": "Digital Desk",
        "title": "Purple Rain: NASA's MAVEN Captures Mesmerizing Martian Auroras Caused by Solar Storm - Republic World",
        "description": "NASA has once again amazed space enthusiasts with a mesmerizing glimpse of the universe. This time, the space agency delighted its Instagram followers with an animated GIF showcasing auroras on Mars' nightside. Captured by NASA's Imaging Ultraviolet Spectrogr…",
        "url": "https://www.republicworld.com/science/space/purple-rain-nasa-s-maven-captures-mesmerizing-martian-auroras-caused-by-solar-storm",
        "urlToImage": "https://img.republicworld.com/rimages/marsss_16:9-171881927751916_9.webp",
        "publishedAt": "2024-06-19T17:48:00Z",
        "content": "NASA has once again amazed space enthusiasts with a mesmerizing glimpse of the universe. This time, the space agency delighted its Instagram followers with an animated GIF showcasing auroras on Mars'… [+2069 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India Education Diary"
        },
        "author": "iednewsdesk",
        "title": "Scientists at University of Houston Find Massive Energy Imbalance on Saturn - India Education Diary",
        "description": "A groundbreaking discovery by researchers at the University of Houston has revealed a massive energy imbalance on Saturn, shedding new light on planetary science and evolution and challenging existing climate models for the solar system’s gas giants.",
        "url": "https://indiaeducationdiary.in/scientists-at-university-of-houston-find-massive-energy-imbalance-on-saturn/",
        "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2024/06/saturn_spiff.png",
        "publishedAt": "2024-06-19T17:46:35Z",
        "content": "A groundbreaking discovery by researchers at the University of Houston has revealed a massive energy imbalance on Saturn, shedding new light on planetary science and evolution and challenging existin… [+4753 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Mystery Behind Jupiter's Great Red Spot Unveiled - NDTV",
        "description": "The location was 24,233 miles across in 1879, and it has gradually reduced to 8,700 miles in diameter currently, gradually taking on a rounder shape rather than an oval one.",
        "url": "https://www.ndtv.com/science/mystery-behind-jupiters-great-red-spot-unveiled-5925064",
        "urlToImage": "https://c.ndtvimg.com/2024-03/uc52bcm8_-great-red-spot_625x300_12_March_24.jpeg",
        "publishedAt": "2024-06-19T14:39:43Z",
        "content": "It is thought that Giovanni Cassini was the first person to observe the Great Red Spot.\r\nThe Great Red Spot on Jupiter has long been known, but scientists have just recently learned more about how an… [+2662 chars]"
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

export default NewsSci

// In case of inline CSS we made a javascript object and 
// wirte inside double curly braces ;
