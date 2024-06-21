import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
export class NewsTech extends Component {

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
            "name": "Financial Express"
        },
        "author": "The Financial Express",
        "title": "Google Chrome could be risking all your private data, warns government - The Financial Express",
        "description": null,
        "url": "https://www.financialexpress.com/life/technology-google-chrome-could-be-risking-all-your-private-data-warns-government-3529974/",
        "urlToImage": null,
        "publishedAt": "2024-06-20T10:30:25Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "OnePlus Ace 3 Pro to feature thinner 6,100 mAh Glacier battery with 100W charging support - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/technology/mobile-tabs/oneplus-glacier-6100-battery-technology-9404257/",
        "urlToImage": null,
        "publishedAt": "2024-06-20T10:22:47Z",
        "content": null
    },
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
            "id": "the-hindu",
            "name": "The Hindu"
        },
        "author": "The Hindu",
        "title": "Sennheiser launches Accentum true wireless earbuds in India - The Hindu",
        "description": null,
        "url": "https://www.thehindu.com/sci-tech/technology/gadgets/sennheiser-launches-accentum-true-wireless-earbuds-in-india/article68311437.ece",
        "urlToImage": null,
        "publishedAt": "2024-06-20T09:45:00Z",
        "content": null
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
            "name": "Financial Express"
        },
        "author": "The Financial Express",
        "title": "WhatsApp to bring AR effects to audio, video calls to make them more fun, engaging: Details - The Financial Express",
        "description": null,
        "url": "https://www.financialexpress.com/life/technology-whatsapp-to-bring-ar-effects-to-audio-video-calls-to-make-them-more-fun-engaging-details-3529881/",
        "urlToImage": null,
        "publishedAt": "2024-06-20T09:21:22Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Trending Desk",
        "title": "From scooty to Lamborghini: Fantasy cricket expert Anurag Dwivedi adds ₹5 crore SUV to his fleet - Hindustan Times",
        "description": "Fantasy cricket expert and YouTuber Anurag Dwivedi has added another luxury car to his fleet - a Lamborghini Urus worth ₹5 crore. | Trending",
        "url": "https://www.hindustantimes.com/trending/from-scooty-to-lamborghini-fantasy-cricket-expert-anurag-dwivedi-adds-rs-5-crore-suv-to-his-fleet-101718874835243.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/20/1600x900/448385797_18098251165418984_9183228290972501164_n_1718875089463_1718875105882.jpg",
        "publishedAt": "2024-06-20T09:19:40Z",
        "content": "Fantasy cricket expert and YouTuber Anurag Dwivedi has added another luxury car to his fleet. The Lucknow-based content creator has acquired a Lamborghini Urus worth 5 crore, according to his latest … [+1856 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Microsoft And Google Chrome Users Targeted By Sophisticated Malware Campaign - NDTV",
        "description": "Cyber experts warn about a sophisticated malware mimicking Microsoft and Google Chrome to steal sensitive information.",
        "url": "https://www.ndtv.com/feature/microsoft-and-google-chrome-users-targeted-by-sophisticated-malware-campaign-5930168",
        "urlToImage": "https://c.ndtvimg.com/2024-06/u16f1ceo_malware-spam-virus_625x300_20_June_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
        "publishedAt": "2024-06-20T08:57:46Z",
        "content": "Over 100,000 messages have targeted thousands of organizations globally.\r\nThe risk landscape on the internet has grown more complex as hackers come up with new strategies to take advantage of users w… [+2019 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Online Bureau, ET Auto",
        "title": "Boult launches CruiseCam to enhance road safety and connectivity - ETAuto",
        "description": "The Boult CruiseCam X1 and X1 GPS are now offered at introductory prices of INR 2,999 and INR 3,999, respectively. These cameras can be purchased on Amazon, Flipkart, and on the company's official website, the company stated in its media release.",
        "url": "https://auto.economictimes.indiatimes.com/news/auto-technology/boult-launches-cruisecam-to-enhance-road-safety-and-connectivity/111135236",
        "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-111135236,imgsize-13188,width-1200,height=765,overlay-etauto/auto-technology/boult-launches-cruisecam-to-enhance-road-safety-and-connectivity.jpg",
        "publishedAt": "2024-06-20T08:38:29Z",
        "content": ". This sensor automatically detects collisions and triggers emergency video recording, safeguarding critical evidence during accidents.\r\nNew Delhi: Boult has launched CruiseCam X1 and X1 GPS, a produ… [+3332 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Standard"
        },
        "author": "Prakruti Mishra",
        "title": "Snapchat introduces Gen-AI advancements for enhanced AR experience: Details - Business Standard",
        "description": "The suite of AI features from Snapchat will be available in upcoming months and will let users change the surroundings in the videos using augmented reality",
        "url": "https://www.business-standard.com/technology/tech-news/snapchat-introduces-gen-ai-advancements-for-enhanced-ar-experience-details-124062000446_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-02/04/thumb/fitandfill/400X400/1643965346-7696.jpg",
        "publishedAt": "2024-06-20T08:37:38Z",
        "content": "The suite of AI features from Snapchat will be available in upcoming months and will let users change the surroundings in the videos using augmented reality\r\nPhoto: Bloomberg\r\nPrakruti MishraNew Delh… [+2034 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "The Guardian",
        "title": "14 unusual video games to discover in 2024 - The Guardian",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiYGh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS9nYW1lcy9hcnRpY2xlLzIwMjQvanVuLzIwLzE0LXVudXN1YWwtdmlkZW8tZ2FtZXMtdG8tZGlzY292ZXItaW4tMjAyNNIBYGh0dHBzOi8vYW1wLnRoZWd1YXJkaWFuLmNvbS9nYW1lcy9hcnRpY2xlLzIwMjQvanVuLzIwLzE0LXVudXN1YWwtdmlkZW8tZ2FtZXMtdG8tZGlzY292ZXItaW4tMjAyNA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-20T08:32:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Abplive.com"
        },
        "author": "Aashish Kumar Shrivastava",
        "title": "Google Rolls Out Android 15 Beta 3 Version, Here's What's New - ABP Live",
        "description": "After the rollout of the Android 15 Beta 3 version, Google has announced that the platform will reach 'Platform Stability'.",
        "url": "https://news.abplive.com/technology/google-rolls-out-android-15-beta-3-version-release-date-download-update-key-features-improvements-bugs-fix-1696985",
        "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2024/06/20/c87b7c1192a64bea906292a2e17ee9e51718871321771555_original.png?impolicy=abp_cdn&imwidth=1200",
        "publishedAt": "2024-06-20T08:17:54Z",
        "content": "Google has recently rolled out the Beta 3 update of Android 15 for its Pixel devices, namely- Pixel 6a, 6, and 6 Pro, Pixel 7a, 7, and 7 Pro, Pixel Fold, Pixel Tablet, Pixel 8a, 8, and 8 Pro. This up… [+4000 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India TV News"
        },
        "author": "Om Gupta",
        "title": "Xiaomi 14 Civi with dual selfie camera goes on sale in India: Check price, offers, availability - India TV News",
        "description": "The sale of the smartphone started at 12PM. As part of the launch offer, the company is providing a discount on purchases made using selected bank cards. Here are all the details you need to know.",
        "url": "https://www.indiatvnews.com/technology/news/xiaomi-14-civi-with-dual-selfie-camera-goes-on-sale-in-india-check-price-offers-availability-2024-06-20-937866",
        "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/06/xiaomi-14-civi-1718870778.jpg",
        "publishedAt": "2024-06-20T08:10:41Z",
        "content": "Xiaomi launched the Xiaomi 14 Civi in the Indian market on June 12. The smartphones features have generated a lot of excitement, especially among selfie lovers. In less than 10 days after its launch,… [+1685 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Sandip Chakraborty",
        "title": "WhatsApp will soon let you share HD photos by default: All the details - Moneycontrol",
        "description": "WhatsApp is rolling out a new update that lets them select HD quality as an option every time they send a photo or video to someone.",
        "url": "https://www.moneycontrol.com/technology/whatsapp-will-soon-let-you-share-hd-photos-by-default-all-the-details-article-12752661.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240620064946_whatsapp-2560294_1280.jpg",
        "publishedAt": "2024-06-20T07:46:32Z",
        "content": "Meta-owned popular messaging platform, WhatsApp introduced the option to send HD photos or videos last year, which allowed users to share uncompressed media files with everyone. Now, Meta is introduc… [+1447 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Diya Sharma",
        "title": "Garena Free Fire MAX redeem codes for June 20, 2024: Win skins, bundles, diamonds, and more - Moneycontrol",
        "description": "Every day, the developers of Garena Free Fire MAX release a fresh batch of redeem codes, each offering the potential to unlock a variety of rewards,",
        "url": "https://www.moneycontrol.com/technology/garena-free-fire-max-redeem-codes-for-june-20-2024-win-skins-bundles-diamonds-and-more-article-12752688.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240620070723_garena2.jpg",
        "publishedAt": "2024-06-20T07:07:45Z",
        "content": "In the popular game Free Fire MAX, where players engage in battles against global adversaries, receiving exciting rewards like diamonds, pets, skins, and outfits is a major victory. Fortunately, thes… [+1199 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "India Today Tech",
        "title": "Oppo F27 Pro+ 5G available for sale starting today, check price and specs - India Today",
        "description": "Oppo has launched its latest midrange smartphone the F27 Pro+ 5G in India with attractive offers and advanced features",
        "url": "https://www.indiatoday.in/technology/news/story/oppo-f27-pro-5g-available-for-sale-starting-today-check-price-and-specs-2555614-2024-06-20",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/oppo-f27-pro-plus-134744759-16x9_2.jpg?VersionId=4uMI4AuujTUKpo3dFuqJFqbNBWaaVWwq",
        "publishedAt": "2024-06-20T06:45:17Z",
        "content": "Oppo's latest midrange smartphone, the F27 Pro+ 5G, is now available for purchase in India. The device is being sold through the OPPO Store, Flipkart, Amazon, and mainline retail outlets. The 128GB s… [+2215 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Standard"
        },
        "author": "Harsh Shivam",
        "title": "ASUS ROG Zephyrus G14 (2024) gaming laptop launched in India: Check details - Business Standard",
        "description": "The ASUS ROG Zephyrus G14, powered by AMD Ryzen 9 8945HS processor, is offered with up to NVIDIA GeForce RTX 4060 graphic processing unit (GPU)",
        "url": "https://www.business-standard.com/technology/gadgets/asus-rog-zephyrus-g14-2024-gaming-laptop-launched-in-india-check-details-124062000331_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/20/thumb/featurecrop/400X400/1718865557-5971.jpg",
        "publishedAt": "2024-06-20T06:44:32Z",
        "content": "The ASUS ROG Zephyrus G14, powered by AMD Ryzen 9 8945HS processor, is offered with up to NVIDIA GeForce RTX 4060 graphic processing unit (GPU)\r\nASUS ROG Zephyrus G14 (2024)\r\nHarsh ShivamNew Delhi\r\nA… [+2456 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Apple Suspends Work on High-end VR Headset - moneycontrol",
        "description": "Apple has suspended work on its next high-end Vision headset. It cited an employee at a manufacturer making key components for the mixed-reality Vision Pro. ...",
        "url": "https://www.youtube.com/watch?v=GoOSdD4W7iw",
        "urlToImage": "https://i.ytimg.com/vi/GoOSdD4W7iw/maxresdefault.jpg",
        "publishedAt": "2024-06-20T06:19:19Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Gadgets360.com"
        },
        "author": "Shaurya Tomer, Siddharth Suvarna",
        "title": "Infinix ZeroBook Ultra AI PC Set to Launch in India on This Date - Gadgets 360",
        "description": "Infinix ZeroBook Ultra is set to launch in India on June 27, the company confirmed on Wednesday. Teasing an “era of AI PCs”, Infinix says its upcoming laptop will boast generative artificial intelligence (AI) capabilities and Intel AI Boost technology, helpin…",
        "url": "https://www.gadgets360.com/laptops/news/infinix-zerobook-ultra-ai-pc-launch-in-india-june-27-expected-specifications-5928224",
        "urlToImage": "https://i.gadgets360cdn.com/large/infinix_zerobook_ultra_1718852872507.jpg",
        "publishedAt": "2024-06-20T05:08:26Z",
        "content": "Infinix ZeroBook Ultra will launch in India next week, the company confirmed on Wednesday. It will be Infinix's second product launch this month and will closely follow the introduction of the Note 4… [+1647 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "ABP Live",
        "title": "NYT Strands Answers For June 20: How To Play, Today’s Words, Spangram, Everything Else You Need To Know - ABP Live",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMijQFodHRwczovL25ld3MuYWJwbGl2ZS5jb20vZ2FtaW5nL255dC1zdHJhbmRzLWFuc3dlcnMtdG9kYXktanVuZS0yMC0yMDI0LXdvcmRzLXNvbHV0aW9uLXNwYW5ncmFtLXRvZGF5LWhvdy10by1wbGF5LXdhdGNoLXZpZGVvLXR1dG9yaWFsLTE2OTY5MDLSAZEBaHR0cHM6Ly9uZXdzLmFicGxpdmUuY29tL2dhbWluZy9ueXQtc3RyYW5kcy1hbnN3ZXJzLXRvZGF5LWp1bmUtMjAtMjAyNC13b3Jkcy1zb2x1dGlvbi1zcGFuZ3JhbS10b2RheS1ob3ctdG8tcGxheS13YXRjaC12aWRlby10dXRvcmlhbC0xNjk2OTAyL2FtcA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-20T03:38:21Z",
        "content": null
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

export default NewsTech

// In case of inline CSS we made a javascript object and 
// wirte inside double curly braces ;
