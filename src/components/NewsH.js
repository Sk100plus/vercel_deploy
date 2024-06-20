import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
export class NewsH extends Component {

// Setting of default proptypes
// static defaultProps={
// country:'in',
// pageSize:20,
// category:'general'
// }
// businessentertainmentgeneralhealthsciencesportstechnology/


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
          "name": "VOGUE India"
      },
      "author": "Sumona Bose",
      "title": "This is the best time to go for a walk, according to experts - VOGUE India",
      "description": "Get up, get out, and get moving—discovering the best time to go for a walk may be more beneficial for your body than you think",
      "url": "https://www.vogue.in/content/this-is-the-best-time-to-go-for-a-walk-according-to-experts",
      "urlToImage": "https://assets.vogue.in/photos/6672e8cb2f359c7d12115323/16:9/w_1280,c_limit/Benefits%20of%20walking.jpeg",
      "publishedAt": "2024-06-19T16:49:16Z",
      "content": "As a die-hard Jane Austen fan, (who obsessively poured over Persuasion at the impressionable age of 13) I never miss a chance to emulate the author's heroines. Especially the singular trait that they… [+3635 chars]"
  },
  {
      "source": {
          "id": "the-hindu",
          "name": "The Hindu"
      },
      "author": "The Hindu",
      "title": "Councillors upset over official apathy towards cleaning in twin cities - The Hindu",
      "description": null,
      "url": "https://www.thehindu.com/news/national/karnataka/councillors-upset-over-official-apathy-towards-cleaning-in-twin-cities/article68308652.ece",
      "urlToImage": null,
      "publishedAt": "2024-06-19T15:45:00Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Slurrp.com"
      },
      "author": "Pakhi Rewri",
      "title": "6 Foods That Can Prevent Hair Fall During Monsoon - Slurrp",
      "description": "Hair fall during summer is a very common phenomenon that a lot of people experience. If you feel like you are losing some extra hair as the monsoon starts, then remember that you are not the only one. Instead of accepting this as a seasonal change, here are s…",
      "url": "https://www.slurrp.com/article/6-foods-that-can-prevent-hair-fall-during-monsoon-1718807727131",
      "urlToImage": "https://images.slurrp.com/prodarticles/5x0s40lwesp.webp",
      "publishedAt": "2024-06-19T14:50:56Z",
      "content": "\" style=\"height: 370px;\"&gt;\r\nVideo Credits: YouTube\r\nIf not tackled on time, this hair fall might become chronic, which is why a person should start making changes in their diet to strengthen their … [+120 chars]"
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
          "id": "google-news",
          "name": "Google News"
      },
      "author": "The Week",
      "title": "Women at higher risk of heart diseases as early symptoms difficult to detect Physicians body - The Week",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiWWh0dHBzOi8vd3d3LnRoZXdlZWsuaW4vd2lyZS11cGRhdGVzL25hdGlvbmFsLzIwMjQvMDYvMTkvYmVzOS1taC1oZWFydC1kaXNlYXNlcy13b21lbi5odG1s0gFdaHR0cHM6Ly93d3cudGhld2Vlay5pbi93aXJlLXVwZGF0ZXMvbmF0aW9uYWwvMjAyNC8wNi8xOS9iZXM5LW1oLWhlYXJ0LWRpc2Vhc2VzLXdvbWVuLmFtcC5odG1s?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-19T13:53:44Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Harpersbazaar.in"
      },
      "author": "Tatiana Dias",
      "title": "Are injectable moisturisers truly as effective as they are made out to be? - Harpers Bazaar India",
      "description": "These 'skin boosters' are skincare’s latest saviours. Bazaar India investigates their rising popularity and whether they deserve a space in your beauty routine.",
      "url": "https://www.harpersbazaar.in/beauty/story/face-forward-1031516-2024-06-19",
      "urlToImage": "https://akm-img-a-in.tosshub.com/lingo/hrb/images/story/202406/66727e91841ee-face-forward-194535853-16x9.jpg",
      "publishedAt": "2024-06-19T13:40:31Z",
      "content": "Eight glasses of water, seven hours of sleep, and six minutes of skincare timethats all it took to keep your skin in the pink of health in the past. But in todays reality, is it really that simple? S… [+4951 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Firstpost"
      },
      "author": "Firstpost",
      "title": "Health Benefits of Eating Raw Onion in Salads: Boost Your Wellness - Firstpost",
      "description": "Discover the surprising health benefits of adding raw onions to your salads for a nutritious boost",
      "url": "https://www.firstpost.com/web-stories/lifestyle/health-benefits-of-eating-raw-onion-in-salads-boost-your-wellness-23727.html",
      "urlToImage": "https://images.news18.com/webstories/uploads/2024/06/cropped-image-2024-06-fd0544e4cfd5bcb44b371dd6767a93af.png",
      "publishedAt": "2024-06-19T13:39:31Z",
      "content": "Raw onions in salads provide a rich source of antioxidants and help combat free radicals.\r\nConsuming raw onions supports heart health by reducing cholesterol levels and lowering blood pressure. \r\nThe… [+614 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "India Today"
      },
      "author": "India Today Health Desk",
      "title": "Weightlifting even at 60 keeps legs stronger for years: Study - India Today",
      "description": "New research reveals that lifting heavy weights thrice a week around retirement age can significantly preserve leg strength in later life providing robust evidence for resistance training benefits",
      "url": "https://www.indiatoday.in/health/story/weightlifting-even-at-60-keeps-legs-stronger-for-years-study-2555336-2024-06-19",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/senior-woman-encouraging-husband-in-lifting-weights-on-exercise-equipment-at-playground-190538873-16x9_0.jpg?VersionId=86ff5nyrjac.K0oLSjPMZjFkIV1Ca7wb",
      "publishedAt": "2024-06-19T13:34:35Z",
      "content": "Lifting heavy weights three times a week around retirement age can significantly maintain leg strength well into later life, according to new research.\r\nAs people age, they naturally lose muscle func… [+2154 chars]"
  },
  {
      "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
      },
      "author": "Aparupa Devnath",
      "title": "How to know if she is playing with you - The Times of India",
      "description": "Determining if someone is playing with your emotions can be challenging...",
      "url": "https://timesofindia.indiatimes.com/life-style/relationships/web-stories/how-to-know-if-she-is-playing-with-you/photostory/111103858.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-111103888,imgsize-67058,width-900,height-1200,resizemode-6/111103888.jpg",
      "publishedAt": "2024-06-19T13:30:00Z",
      "content": "Not making an effort to meet you halfway, whether its in communication, making plans, or being there for you, could indicate they are not genuinely invested."
  },
  {
      "source": {
          "id": null,
          "name": "Medscape"
      },
      "author": "Edited by Eve Bender",
      "title": "Psychiatric Comorbidity Tied to Early Mortality in Anorexia - Medscape",
      "description": "Anorexia nervosa is associated with a 4.5 times increased risk for early death, which nearly doubles when combined with a psychiatric comorbidity.",
      "url": "https://www.medscape.com/viewarticle/psychiatric-comorbidity-tied-early-mortality-anorexia-2024a1000bek",
      "urlToImage": "https://img.medscapestatic.com/vim/live/professional_assets/medscape/images/thumbnail_library/gty_220425_eating_disorder_mirror_800x450.jpg",
      "publishedAt": "2024-06-19T13:02:24Z",
      "content": "TOPLINE:\r\nAnorexia nervosa (AN) is associated with a 4.5-fold increased risk for mortality a rate that nearly doubles when AN patients have psychiatric comorbidities.\r\nMETHODOLOGY:\r\n<ul><li>Researche… [+2023 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": "midday india",
      "title": "International Yoga Day 2024: Easy yoga for weight loss by Deepika & Alia’s trainer Anshuka Parwani - midday india",
      "description": null,
      "url": "https://news.google.com/rss/articles/CCAiC1ljemYxT3NJX1dRmAEB?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-19T12:30:06Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Healthshots.com"
      },
      "author": "Arushi Bidhuri",
      "title": "Is it heat stroke or food poisoning? Know how heat affects your stomach - Health shots",
      "description": "High temperatures may trigger heat stroke and food poisoning, but they are not the same. Here's the difference between the two conditions and what you can do about it.",
      "url": "https://www.healthshots.com/preventive-care/self-care/heat-stroke-or-food-poisoning/",
      "urlToImage": "https://images.healthshots.com/healthshots/en/uploads/2024/06/19154738/1-1.jpeg",
      "publishedAt": "2024-06-19T12:00:43Z",
      "content": "Extreme heat impacts people in different ways. From dizziness and fatigue to stomach problems, sweltering heat can have many side effects on health. As the temperature hits a new high, stomach issues… [+7851 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Indian Express"
      },
      "author": "The Indian Express",
      "title": "Why you should wait before turning on the AC in your car - The Indian Express",
      "description": null,
      "url": "https://indianexpress.com/web-stories/life-style/why-you-should-wait-before-turning-on-the-ac-in-your-car/9400072/",
      "urlToImage": null,
      "publishedAt": "2024-06-19T11:15:09Z",
      "content": null
  },
  {
      "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
      },
      "author": "Online Bureau, ET HealthWorld",
      "title": "Meril’s MYVAL Transcatheter heart valve series trial research published in Lancet - ETHealthWorld",
      "description": "The research compares early outcomes of the new-generation Myval THV series with contemporary (Sapien and Evolut) THV series in real-world patients suffering from severe symptomatic native aortic stenosis (AS)",
      "url": "https://health.economictimes.indiatimes.com/news/medical-devices/merils-myval-transcatheter-heart-valve-series-trial-research-published-in-lancet/111113444",
      "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-111113444,imgsize-85100,width-1200,height=765,overlay-ethealth/medical-devices/merils-myval-transcatheter-heart-valve-series-trial-research-published-in-lancet.jpg",
      "publishedAt": "2024-06-19T11:03:39Z",
      "content": "New Delhi: Meril Life Sciences announces the publication of the landmark trial study titled “Comparison of Early Outcomes of Newer-Generation MyvalTranscatheter Heart Valve Series with Contemporary V… [+3136 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "India Today"
      },
      "author": "Daphne Clarance",
      "title": "Women with perinatal depression face a 36% higher risk of heart disease - India Today",
      "description": "New research reveals that women with perinatal depression have a significantly higher risk of developing heart disease within 20 years of childbirth",
      "url": "https://www.indiatoday.in/health/story/women-with-perinatal-depression-face-36-percent-higher-risk-heart-disease-2555263-2024-06-19",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/women-going-through-perinatal-depression-have-a-higher-risk-of-developing-heart-disease-195624446-16x9_0.jpg?VersionId=Hl43NHi32wxedr4w9Mi8NvBRvKadE23L",
      "publishedAt": "2024-06-19T10:30:18Z",
      "content": "Women diagnosed with perinatal depression are significantly more likely to develop heart disease within 20 years of giving birth compared to those who haven't experienced perinatal depression, accord… [+2236 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "Khushi Pal",
      "title": "5 healthy beverages to help detox your body - Hindustan Times",
      "description": "Here are five healthy detox drinks to help cleanse your body.",
      "url": "https://www.hindustantimes.com/web-stories/lifestyle/5-healthy-beverages-to-help-detox-your-body-101718779236463.html",
      "urlToImage": null,
      "publishedAt": "2024-06-19T10:30:05Z",
      "content": "By Khushi PalPublished Jun 19, 2024\r\nHindustan TimesLifestylePhoto Credits: Pexels"
  },
  {
      "source": {
          "id": null,
          "name": "Investing.com"
      },
      "author": "Investing.com India",
      "title": "Second Australian state reports confirmed case of bird flu - Investing.com India",
      "description": null,
      "url": "https://in.investing.com/news/world-news/second-australian-state-reports-confirmed-case-of-bird-flu-4261927",
      "urlToImage": null,
      "publishedAt": "2024-06-19T10:21:51Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Youthkiawaaz.com"
      },
      "author": "Ishika Satwika Singh",
      "title": "“Women with Long COVID Experience Broader Symptoms Than Men”: Study Reveals - Youth Ki Awaaz",
      "description": "My friend, who is a UPSC aspirant, is suffering from long Covid, which has significantly affected her mental health. She constantly struggles with brain fog.",
      "url": "https://www.youthkiawaaz.com/2024/06/women-with-long-covid-experience-broader-symptoms-than-men-study-reveals/",
      "urlToImage": "https://www.youthkiawaaz.com/wp-content/uploads/2024/06/Long-covid-in-women-.jpg",
      "publishedAt": "2024-06-19T10:19:38Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Moneycontrol"
      },
      "author": "Moneycontrol",
      "title": "Body parts affected by stress and anxiety - Moneycontrol",
      "description": "Stress and anxiety can significantly impact various parts of the body. Here’s a breakdown of the key areas affected.",
      "url": "https://www.moneycontrol.com/web-stories/body-parts-affected-by-stress-and-anxiety-2198484.html",
      "urlToImage": "https://images.news18.com/webstories/uploads/2024/06/cropped-istockphoto-1352426516-170667a-2024-06-a943320154d475dadfa67b9adb5952cd.webp",
      "publishedAt": "2024-06-19T10:01:08Z",
      "content": "Skin: Stress can lead to skin conditions like acne, eczema, and psoriasis."
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

export default NewsH

// In case of inline CSS we made a javascript object and 
// wirte inside double curly braces ;
