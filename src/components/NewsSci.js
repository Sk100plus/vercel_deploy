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
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Ashley Strickland",
      "title": "Astronomers watch a supermassive black hole awaken in real time - CNN",
      "description": "Sudden brightness in a distant galaxy has caused astronomers to observe an unprecedented celestial sight: the awakening of a supermassive black hole.",
      "url": "https://www.cnn.com/2024/06/19/science/supermassive-black-hole-awakening-scn/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/eso2409a.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-06-19T17:52:00Z",
      "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAstronomers are witnessing a never-before-seen spectac… [+5106 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "New York Post"
      },
      "author": "Ben Cost",
      "title": "Super rare star explosion will be visible from Earth this month - New York Post ",
      "description": "NASA has predicted that a “once-in-a-life-time” star explosion — or nova — will be visible to the naked eye sometime this summer.",
      "url": "https://nypost.com/2024/06/19/lifestyle/super-rare-star-explosion-will-be-visible-from-earth-this-month/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/06/red-giant-star-white-dwarf-84077931.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2024-06-19T16:05:00Z",
      "content": "A star is dead? \r\nKeep your eyes on the skies, stargazers: NASA has predicted that the much-anticipated “once-in-a-life-time” star explosion or nova will be visible to the naked eye sometime this sum… [+3370 chars]"
  },
  {
      "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
      },
      "author": "Micah Maidenberg",
      "title": "Boeing Sent Two Astronauts Into Space. Now It Needs to Get Them Home. - The Wall Street Journal",
      "description": "Helium leaks and thruster problems prompt NASA and Boeing to delay astronauts’ return on company’s Starliner vehicle",
      "url": "https://www.wsj.com/science/space-astronomy/boeing-sent-two-astronauts-into-space-now-it-needs-to-get-them-home-99d96633",
      "urlToImage": "https://images.wsj.net/im-971031/social",
      "publishedAt": "2024-06-19T15:20:00Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Live Science"
      },
      "author": "Harry Baker",
      "title": "Baby stars that defy explanation are 'swarming like bees' around Milky Way's supermassive black hole - Livescience.com",
      "description": "A new analysis of inexplicably young stars orbiting extremely close to the Milky Way's black hole heart reveals that they orbit around the gigantic structure in a surprisingly organized way, similar to swarming insects like bees.",
      "url": "https://www.livescience.com/space/astronomy/baby-stars-that-defy-explanation-are-swarming-like-bees-around-milky-ways-supermassive-black-hole",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/6B9GvT8fRXAUKhytHBoVnB-1200-80.jpg",
      "publishedAt": "2024-06-19T14:20:05Z",
      "content": "Inexplicably young stars are barreling through space at breakneck speeds as they circle precariously close to the supermassive black hole at the center of the Milky Way\r\n. This stellar dance may init… [+3023 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Phys.Org"
      },
      "author": "Tejasri Gururaj",
      "title": "Supercooled phase transitions: Could they explain gravitational wave signals? - Phys.org",
      "description": "A new study published in Physical Review Letters explores the possibility that a strongly supercooled, first-order phase transition in the early universe could explain gravitational wave signals observed by pulsar timing arrays (PTAs).",
      "url": "https://phys.org/news/2024-06-supercooled-phase-transitions-gravitational.html",
      "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2024/supercooled-phase-tran.jpg",
      "publishedAt": "2024-06-19T13:39:31Z",
      "content": "This article has been reviewed according to Science X's \r\neditorial process\r\nand policies.\r\nEditors have highlighted\r\nthe following attributes while ensuring the content's credibility:\r\nfact-checked\r… [+320 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Live Science"
      },
      "author": "Tom Metcalfe",
      "title": "Royal tomb in Benin has traces of human blood on its walls, hinting at human sacrifice, study finds - Livescience.com",
      "description": "Researchers examining the wall of a ceremonial tomb in Benin found proteins that could have come only from human blood.",
      "url": "https://www.livescience.com/archaeology/royal-tomb-in-benin-has-traces-of-human-blood-on-its-walls-hinting-at-human-sacrifice-study-finds",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/GqcKSJjn3iTKARVNDu3KEH-1200-80.jpg",
      "publishedAt": "2024-06-19T13:00:00Z",
      "content": "Nearly 200 years ago, human blood is said to have been incorporated into a ceremonial tomb built within a royal palace complex in what is now Benin, according to legend. Now, an investigation into th… [+4439 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Live Science"
      },
      "author": "Harry Baker",
      "title": "Earth's rotating inner core is starting to slow down — and it could alter the length of our days - Livescience.com",
      "description": "A new study confirms that Earth's inner core has been rotating more slowly than usual since 2010. This mysterious \"backtracking\" could also end up slightly altering the planet's overall rotation, lengthening our days.",
      "url": "https://www.livescience.com/planet-earth/geology/earths-rotating-inner-core-is-starting-to-slow-down-and-it-could-alter-the-length-of-our-days",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/8oyp8YzygP5ZbwUsQNJN2K-1200-80.jpg",
      "publishedAt": "2024-06-19T12:36:16Z",
      "content": "The heart of our planet has been spinning unusually slowly for the past 14 years, new research confirms. And if this mysterious trend continues, it could potentially lengthen Earth's days — though th… [+4014 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "LADbible"
      },
      "author": null,
      "title": "Astronomers make 'jaw dropping' discovery through James Webb Space Telescope after studying same spot for decades - LADbible",
      "description": "Scientists couldn't believe what NASA's Webb was showing them.",
      "url": "https://www.ladbible.com/news/science/nasa-james-webb-space-telescope-twin-stars-166815-20240619",
      "urlToImage": "https://images.ladbible.com/resize?type=webp&quality=70&width=1200&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltcd74acc1d0a99f3a/blt6575e972065339ab/6672bdfa91c2dd254adc3c05/Astronomers_make_%E2%80%98jaw_dropping%E2%80%99_discovery_through_James_Webb_Telescope.png",
      "publishedAt": "2024-06-19T12:23:40Z",
      "content": "Some of the world's leading space scientists were left with their jaws on their floor after a recent discovery by the James Webb Space Telescope.\r\nAnd the find was made even more remarkable given it … [+2230 chars]"
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
          "name": "SFGate"
      },
      "author": "Erin Rode",
      "title": "The Calif. observatory that changed how we think about the universe - SFGATE",
      "description": "In the San Gabriel Mountains, George Ellery Hale built the largest telescope in the world. Then he beat his own record again and again.",
      "url": "https://www.sfgate.com/la/article/mount-wilson-observatory-universe-19518394.php",
      "urlToImage": "https://s.hdnux.com/photos/01/40/17/40/25229348/4/rawImage.jpg",
      "publishedAt": "2024-06-19T11:36:09Z",
      "content": "On Jan. 1, 1925, astronomer Edwin Hubble completely changed the way we view the universe and our place in it. The discovery came from peering through what was then the worlds largest telescope, locat… [+9715 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "AL.com"
      },
      "author": "Margaret Kates | mkates@al.com",
      "title": "Are oysters the key to stopping climate change? These coastal Alabama residents think so. - AL.com",
      "description": "Two Alabama residents have come up with a way to farm oysters easier. They're now in the running for a $50 million carbon capture prize.",
      "url": "https://www.al.com/news/mobile/2024/06/are-oysters-the-key-to-stopping-climate-change-these-coastal-alabama-residents-think-so.html",
      "urlToImage": "https://www.al.com/resizer/v2/GPTIGQ5IZVDXBLACNZQZWT72QU.JPG?auth=961d1d0fcb9c1d6bd0e429a7c7ebb79d7dc7e1b2bd3b94e0516f97eb3afc6872&width=1280&quality=90",
      "publishedAt": "2024-06-19T11:30:00Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Aeon.co"
      },
      "author": null,
      "title": "For one of nature’s great builders, finding a mate means weaving the perfect nest - Aeon",
      "description": "Witness 18 days’ work in just 3.5 minutes as a male weaverbird crafts an elaborate dangling nest in hopes of finding a mate",
      "url": "https://aeon.co/videos/for-one-of-natures-great-builders-finding-a-mate-means-weaving-the-perfect-nest",
      "urlToImage": "https://images.aeonmedia.co/images/cfcf2b0c-92a8-4446-af32-a8795b7d9773/how-a-baya-weaver-builds-a-nest-landscape-1.jpg?width=1200&quality=75&format=auto",
      "publishedAt": "2024-06-19T10:02:01Z",
      "content": "Native to South and Southeast Asia, the bird species Ploceus philippinus, better known as the baya weaver, is so named for its unique nests, which often hang from palm trees above bodies of water. To… [+507 chars]"
  },
  {
      "source": {
          "id": "mashable",
          "name": "Mashable"
      },
      "author": "Mark Kaufman",
      "title": "Scientists discover how old Jupiter's Great Red Spot really is - Mashable",
      "description": "An ancient, swirling storm.",
      "url": "https://mashable.com/article/jupiter-great-red-spot-how-old",
      "urlToImage": "https://helios-i.mashable.com/imagery/articles/02qi1lqOJPOpwpPA62wciCD/hero-image.fill.size_1200x675.v1718723997.png",
      "publishedAt": "2024-06-19T09:00:00Z",
      "content": null
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Amarachi Orie",
      "title": "Ancient reptile fossil shines new light on early marine evolution - CNN",
      "description": "Scientists have discovered a 246 million-year-old marine reptile fossil, the oldest of its kind to be found in the Southern Hemisphere, shining a new light on the early evolution of marine mammals.",
      "url": "https://www.cnn.com/2024/06/19/science/sea-reptile-southern-hemisphere-intl-scli-scn/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/low-res-nothosaurs-image-artwork-stavros-kundromichalis.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-06-19T08:43:00Z",
      "content": "Scientists have discovered a 246 million-year-old marine reptile fossil, the oldest of its kind to be found in the Southern Hemisphere, shining a new light on the early evolution of marine mammals.\r\n… [+3982 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "SciTechDaily"
      },
      "author": null,
      "title": "Ticking Time Bomb: Space Junk Is Eating Away at Earth’s Ozone Layer - SciTechDaily",
      "description": "When internet-providing satellites — now being launched by the thousands — reach the end of their service life, the remnants from their incineration in Earth's atmosphere will initiate chemical reactions that deplete stratospheric ozone. When outdated satelli…",
      "url": "https://scitechdaily.com/ticking-time-bomb-space-junk-is-eating-away-at-earths-ozone-layer/",
      "urlToImage": "https://scitechdaily.com/images/SpaceX-Satellite.jpg",
      "publishedAt": "2024-06-19T08:31:11Z",
      "content": "Thousands of satellites have been deployed into “megaconstellations” to fulfill the growing need for worldwide internet services, with many more planned for launch soon. However, these compact satell… [+5348 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "IFLScience"
      },
      "author": "James Felton",
      "title": "Right Now The Earth Is Technically *Not* Orbiting The Sun - IFLScience",
      "description": "In fact, the point it orbits is rarely inside the Sun.",
      "url": "https://www.iflscience.com/right-now-the-earth-is-technically-not-orbiting-the-sun-74697",
      "urlToImage": "https://assets.iflscience.com/assets/articleNo/74697/aImg/76894/barycenter-meta.png",
      "publishedAt": "2024-06-19T08:11:27Z",
      "content": "Diagrams and animations showing the orbits of the planets are lying to you a little bit. Or to put it more accurately, they are simplifying the orbits of the planets so that teachers don't have to ex… [+2678 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "ScienceAlert"
      },
      "author": "Universe Today",
      "title": "Can Nearby Supernova Explosions Threaten Life on Earth? - ScienceAlert",
      "description": "Earth's protective atmosphere has sheltered life for billions of years, creating a haven where evolution produced complex lifeforms like us.",
      "url": "https://www.sciencealert.com/can-nearby-supernova-explosions-threaten-life-on-earth",
      "urlToImage": "https://www.sciencealert.com/images/2024/06/SupernovaExplosionESO.jpg",
      "publishedAt": "2024-06-19T02:20:01Z",
      "content": "Earth's protective atmosphere has sheltered life for billions of years, creating a haven where evolution produced complex lifeforms like us.\r\nThe ozone layer plays a critical role in shielding the bi… [+8239 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "FOX 35 Orlando"
      },
      "author": "FOX 35 Digital Staff",
      "title": "SpaceX pushes launch of SES ASTRA 1P mission from Florida to Wednesday - FOX 35 Orlando",
      "description": "SpaceX plans to launch the SES ASTRA 1P mission aboard a Falcon 9 rocket on from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station, Florida.",
      "url": "https://www.fox35orlando.com/news/spacex-launch-ses-astra-1p-mission-falcon-9-rocket-from-florida-tuesday",
      "urlToImage": "https://images.foxtv.com/static.fox35orlando.com/www.fox35orlando.com/content/uploads/2024/06/1280/720/GettyImages-2021273237.jpg?ve=1&tl=1",
      "publishedAt": "2024-06-19T00:28:22Z",
      "content": "Watch SES ASTRA 1P mission launch\r\nCAPE CANAVERAL, Fla. - SpaceX canceled a Tuesday launch of the SES ASTRA 1P mission aboard a Falcon 9 rocket. The launch from Space Launch Complex 40 (SLC-40) at Ca… [+882 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "SpaceNews"
      },
      "author": "Debra Werner",
      "title": "ExLabs wins funds to accelerate space robotics - SpaceNews",
      "description": "Exploration Laboratories, a startup focused on space resources, will accelerate work on technology to autonomously capture space objects, thanks to a $1.9 million Tactical Funding Increase from SpaceWERX.",
      "url": "https://spacenews.com/exlabs-wins-funds-to-accelerate-space-robotics/",
      "urlToImage": "https://spacenews.com/wp-content/uploads/2024/03/rsz_arachne_debris_006-1.png",
      "publishedAt": "2024-06-18T22:49:53Z",
      "content": "Exploration Laboratories, a startup focused on space resources, will accelerate work on technology to autonomously capture space objects, thanks to a $1.9 million Tactical Funding Increase (TACFI) fr… [+1925 chars]"
  },
  {
      "source": {
          "id": "ars-technica",
          "name": "Ars Technica"
      },
      "author": "John Timmer",
      "title": "When did humans start social knowledge accumulation? - Ars Technica",
      "description": "Study suggests our ancestors were building on past knowledge by 600,000 years ago.",
      "url": "https://arstechnica.com/science/2024/06/stone-tool-archeological-record-shows-recent-boost-in-sophistication/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/06/GettyImages-2003169331-760x380.jpg",
      "publishedAt": "2024-06-18T22:33:20Z",
      "content": "24\r\nA key aspect of humans' evolutionary success is the fact that we don't have to learn how to do things from scratch. Our societies have developed various waysfrom formal education to YouTube video… [+2655 chars]"
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
