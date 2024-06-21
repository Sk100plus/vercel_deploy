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
          "name": "GSMArena.com"
      },
      "author": "Michail",
      "title": "Android 15 Beta 3 brings platform stability and updated passkey UI - GSMArena.com news - GSMArena.com",
      "description": "Developers can now freely test out their apps run on Android 15. Android 15 has entered its platform stability stage with the release of Beta 3 as APIs are...",
      "url": "https://www.gsmarena.com/android_15_beta_3_brings_platform_stability_and_updated_passkey_ui-news-63352.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/06/android-15-beta-3/-952x498w6/gsmarena_000.jpg",
      "publishedAt": "2024-06-19T16:25:01Z",
      "content": "Android 15 has entered its platform stability stage with the release of Beta 3 as APIs are finalized and developers can now freely test out their apps. Google will release one more beta for Android 1… [+559 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Financial Express"
      },
      "author": "The Financial Express",
      "title": "New Study: Big Boss in your home? Alexa and Google Home raise privacy alarms - The Financial Express",
      "description": null,
      "url": "https://www.financialexpress.com/life/technology-new-study-big-boss-in-your-home-alexa-and-google-home-raise-privacy-alarms-3529356/",
      "urlToImage": null,
      "publishedAt": "2024-06-19T15:24:56Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "GSMArena.com"
      },
      "author": "Prasad",
      "title": "Xiaomi 14 Civi in for review - GSMArena.com news - GSMArena.com",
      "description": "We have with us today the latest mid-range smartphone from Xiaomi, the Xiaomi 14 Civi, which is a rebranded version of the Chinese Civi 4 Pro for India....",
      "url": "https://www.gsmarena.com/xiaomi_14_civi_in_for_review-news-63350.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/06/xiaomi-14-civi-in-for-review/-952x498w6/gsmarena_000.jpg",
      "publishedAt": "2024-06-19T15:21:01Z",
      "content": "We have with us today the latest mid-range smartphone from Xiaomi, the Xiaomi 14 Civi, which is a rebranded version of the Chinese Civi 4 Pro for India. The 'Civi' stands for Cinematic Vision, and th… [+1820 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": "The Times of India",
      "title": "WhatsApp may soon get this Apple FaceTime and Instagram-like video calling feature - The Times of India",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMipQFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS90ZWNobm9sb2d5L3RlY2gtbmV3cy93aGF0c2FwcC1tYXktc29vbi1nZXQtdGhpcy1hcHBsZS1mYWNldGltZS1hbmQtaW5zdGFncmFtLWxpa2UtdmlkZW8tY2FsbGluZy1mZWF0dXJlL2FydGljbGVzaG93LzExMTExODA4OS5jbXPSAakBaHR0cHM6Ly90aW1lc29maW5kaWEuaW5kaWF0aW1lcy5jb20vdGVjaG5vbG9neS90ZWNoLW5ld3Mvd2hhdHNhcHAtbWF5LXNvb24tZ2V0LXRoaXMtYXBwbGUtZmFjZXRpbWUtYW5kLWluc3RhZ3JhbS1saWtlLXZpZGVvLWNhbGxpbmctZmVhdHVyZS9hbXBfYXJ0aWNsZXNob3cvMTExMTE4MDg5LmNtcw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-19T14:30:00Z",
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
          "name": "Hindustan Times"
      },
      "author": "Neha Ravi Khandelwal",
      "title": "Amazon offers on home locks, cameras, and more: Avail up to 70% off and make your home more secure - Hindustan Times",
      "description": "Secure your home with Amazon's massive discounts of up to 70% off on home locks, cameras, video door phones, and alarm systems.",
      "url": "https://www.hindustantimes.com/technology/amazon-offers-on-home-locks-cameras-and-more-avail-up-to-70-off-and-make-your-home-more-secure-101718798799140.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/19/1600x900/MixCollage-19-Jun-2024-06-30-PM-7046_cleanup_1718802129264_1718802142840.jpg",
      "publishedAt": "2024-06-19T13:18:51Z",
      "content": "Amazon offers security devices for your home and provides unparalleled opportunities to enhance home security with its current promotions. Enjoy substantial discounts of up to 70% on a wide range of … [+17855 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "India Today"
      },
      "author": "India Today Tech",
      "title": "After Infinix Note 40 launch on June 21, the company will launch the ZeroBook Ultra laptop on June 27 - India Today",
      "description": "Infinix is hosting a launch event in India on June 21 for the launch of the Infinix Note 40 smartphone Less than a week later the company will be launching another product in India  the Infinix ZeroBook Ultra  on June 27",
      "url": "https://www.indiatoday.in/technology/news/story/after-infinix-note-40-launch-on-june-21-the-company-will-launch-the-zerobook-ultra-pc-on-june-27-2555351-2024-06-19",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/infinix-zerobook-ultra-laptop-to-launch-in-india-on-june-27-193054241-16x9_0.jpg?VersionId=pIrUHqyPFH4EyyW9RHA5hap5hmFYxXid",
      "publishedAt": "2024-06-19T12:31:21Z",
      "content": "Infinix is set to launch the Infinix Note 40 smartphone in India on June 21. Ahead of the launch, the company has announced that it will be launching another product soon. Infinix has confirmed that … [+2156 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "9to5google.com"
      },
      "author": "Abner Li",
      "title": "Android 15: Screenshot preview redesign, Markup preps AI stickers - 9to5Google",
      "description": "Android 15 Beta 3 makes some tweaks to the screenshot preview UI, while revealing work on Pixel-exclusive generative AI stickers...",
      "url": "http://9to5google.com/2024/06/19/android-15-screenshot-previews/",
      "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/06/Android-15-Beta-3-v2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2024-06-19T12:30:00Z",
      "content": "Android 15 Beta 3 makes some tweaks to the screenshot preview UI, while revealing work on Pixel-exclusive generative AI stickers. \r\nAbout APK Insight: In this APK Insight post, weve decompiled the la… [+2026 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": "Gadgets 360",
      "title": "Lenovo Legion Go India Launch Date Set for June 27; Key Features Confirmed | Technology News - Gadgets 360",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LmdhZGdldHMzNjAuY29tL2xhcHRvcHMvbmV3cy9sZW5vdm8tbGVnaW9uLWdvLWluZGlhLWxhdW5jaC1kYXRlLWZlYXR1cmVzLXdpbmRvd3MtaGFuZGhlbGQtNTkyMzgyM9IBAA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-19T12:14:15Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Apple halts Vision Pro 2 headset production, eyes budget-friendly AR launch | Mint - Mint",
      "description": "Apple has reportedly halted Vision Pro 2 AR headset development to prioritize a more affordable model for late 2025, aiming for a $1,500 price point. The cheaper version may compromise on features but retains advanced display tech.",
      "url": "https://www.livemint.com/technology/tech-news/apple-halts-vision-pro-2-headset-production-eyes-budget-friendly-ar-launch-11718798532145.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/19/1600x900/APPLE-DEVELOPERS-CONFERENCE-22_1718193425097_1718798785381.jpg",
      "publishedAt": "2024-06-19T12:10:32Z",
      "content": "California-based tech giant Apple Inc. has made a strategic decision to halt the advancement of its high-end augmented reality headset, the Vision Pro 2, opting instead to prioritize the development … [+2314 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Financial Express"
      },
      "author": "The Financial Express",
      "title": "S8UL ropes in three gaming creators for its GTA RP roster - The Financial Express",
      "description": null,
      "url": "https://www.financialexpress.com/business/brandwagon-s8ul-ropes-in-three-gaming-creators-for-its-gta-rp-roster-3529177/",
      "urlToImage": null,
      "publishedAt": "2024-06-19T12:00:00Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "Apple Explains iPhone 15 Pro Requirement for Apple Intelligence - MacRumors",
      "description": "With iOS 18, iPadOS 18, and macOS Sequoia, Apple is introducing a new personalized AI experience called Apple Intelligence that uses on-device,...",
      "url": "https://www.macrumors.com/2024/06/19/apple-iphone-15-pro-requirement-apple-intelligence/",
      "urlToImage": "https://images.macrumors.com/t/NL4l6iHxp0S0F_C3evm831s7d_U=/2880x/article-new/2023/09/iPhone-15-Pro-lineup.jpg",
      "publishedAt": "2024-06-19T11:48:58Z",
      "content": "With iOS 18, iPadOS 18, and macOS Sequoia, Apple is introducing a new personalized AI experience called Apple Intelligence that uses on-device, generative large-language models to enhance the user ex… [+2486 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Business Standard"
      },
      "author": "ANI",
      "title": "Google launches Gemini Chatbot service in India, other South Asian nations - Business Standard",
      "description": "This announcement marks a significant step in Google's efforts to broaden the reach of its chatbot technology beyond select markets, as per reports by GSM Arena",
      "url": "https://www.business-standard.com/technology/tech-news/google-launches-gemini-chatbot-service-in-india-other-south-asian-nations-124061900615_1.html",
      "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-05/15/thumb/featurecrop/400X400/1715749660-0515.JPG",
      "publishedAt": "2024-06-19T11:38:13Z",
      "content": "This announcement marks a significant step in Google's efforts to broaden the reach of its chatbot technology beyond select markets, as per reports by GSM Arena\r\nAccording to Google's support page, G… [+2188 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "OPPO A3 Pro Indian model images leaked: Major changes expected compared to Chinese unit - HT Tech",
      "description": "Considering a smartphone around the  ₹20,000 mark? The OPPO A3 Pro might soon emerge as a strong contender. Here’s what you can expect.",
      "url": "https://tech.hindustantimes.com/mobile/news/oppo-a3-pro-indian-model-images-leaked-major-changes-expected-compared-to-chinese-unit-71718794623789.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2024/06/19/1600x900/OPPO_A3_Pro_Indian_model_images_leaked_1718794916084_1718794916372.jpg",
      "publishedAt": "2024-06-19T11:05:15Z",
      "content": "OPPO may be planning to expand its presence in the 15,000 to 20,000 price bracket in the Indian mobile market with the launch of the OPPO A3 Pro. According to 91Mobiles, the Indian variant is expecte… [+1772 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Deccan Herald"
      },
      "author": "Bloomberg",
      "title": "Explained | How to help your smartphone survive a heatwave - Deccan Herald",
      "description": null,
      "url": "https://www.deccanherald.com/technology/explained-how-to-help-your-smartphone-survive-a-heatwave-3072598",
      "urlToImage": "https://images.deccanherald.com/deccanherald%2F2024-06%2F51308c73-9d0d-4c1a-8d7e-c213f2cb33ed%2FiStock_1219143039.jpg?rect=0%2C80%2C4215%2C2213&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
      "publishedAt": "2024-06-19T10:59:20Z",
      "content": "A phone thats performing slowly is another red flag, says Nicholas Bains, a smartphone expert at Asurion. The phone will deliberately slow down its processing so it doesnt produce even more heat, tho… [+2159 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "YouTube"
      },
      "author": null,
      "title": "Google’s $2 Trillion Business Model | How Google Earns Money? | Dhruv Rathee - Dhruv Rathee",
      "description": "If you own a small business and want to rank higher organically, it's time to take your SEO strategy to the next level with ThatWare. ThatWare is offering a ...",
      "url": "https://www.youtube.com/watch?v=ISc5_x_3MWM",
      "urlToImage": "https://i.ytimg.com/vi/ISc5_x_3MWM/maxresdefault.jpg",
      "publishedAt": "2024-06-19T10:23:24Z",
      "content": null
  },
  {
      "source": {
          "id": "the-hindu",
          "name": "The Hindu"
      },
      "author": "The Hindu",
      "title": "Asus launches ROG Zephyrus G14 in India - The Hindu",
      "description": null,
      "url": "https://www.thehindu.com/sci-tech/technology/gadgets/asus-launches-rog-zephyrus-g14-in-india/article68307393.ece",
      "urlToImage": null,
      "publishedAt": "2024-06-19T09:58:00Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "CNBCTV18"
      },
      "author": "Pihu Yadav",
      "title": "HP unveils AI-powered EliteBook Ultra and OmniBook X, opens pre-booking in India - CNBCTV18",
      "description": "These laptops are designed to be the thinnest in their class, promising up to 26 hours of battery life, making them ideal for professionals on the go.",
      "url": "https://www.cnbctv18.com/technology/hp-elitebook-ultra-omnibook-x-ai-features-price-specifications-19430519.htm",
      "urlToImage": "https://images.cnbctv18.com/uploads/2024/06/hp-2024-06-a088102fdb089b87d33dadf71001f9d5.jpg?im=FitAndFill,width=500,height=300",
      "publishedAt": "2024-06-19T09:51:04Z",
      "content": "HP, on Wednesday, announced the pre-booking of its latest next-generation AI PCs, the HP EliteBook Ultra and HP OmniBook X.The HP EliteBook Ultra AI PC is catered towards enterprises, public sector o… [+1073 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Moneycontrol"
      },
      "author": "Sandip Chakraborty",
      "title": "CMF Phone 1 by Nothing launch date announced: All the details - Moneycontrol",
      "description": "CMF by Nothing will also reveal the Watch Pro 2 and Buds Pro 2 alongside the Phone 1 at their upcoming Community Update event.",
      "url": "https://www.moneycontrol.com/technology/cmf-phone-1-by-nothing-launch-date-announced-all-the-details-article-12751973.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240619092954_Screenshot-2024-06-19-at-2.59.16 PM.jpg",
      "publishedAt": "2024-06-19T09:30:53Z",
      "content": "Nothings sub-brand, CMF, has finally confirmed the launch date of the first smartphone globally. The company has also confirmed that the CMF Buds Pro 2 and CMF Watch Pro 2 will also be introduced alo… [+1316 chars]"
  },
  {
      "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
      },
      "author": "TOI Tech Desk",
      "title": "Oppo F27 Pro+ 5G smartphone to go on sale starting June 20: Price, offers and more - The Times of India",
      "description": "MOBILES & TABLETS News: Oppo launched the rugged Oppo F27 Pro+ 5G in India, the first F-series smartphone with military grade durability.",
      "url": "https://timesofindia.indiatimes.com/technology/mobiles-tabs/oppo-f27-pro-5g-smartphone-to-go-on-sale-starting-june-20-price-offers-and-more/articleshow/111110078.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-111110049,width-1070,height-580,imgsize-71010,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-06-19T09:26:00Z",
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
