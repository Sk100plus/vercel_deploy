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
            "name": "CNBCTV18"
        },
        "author": "Reuters",
        "title": "Vaccine group Gavi to raise $11.9 billion to immunise world's poorest children - CNBCTV18",
        "description": "The amount will be finalised at a meeting on Thursday in Paris, where donors will make pledges for the organisation’s plan for 2026-2030.",
        "url": "https://www.cnbctv18.com/india/healthcare/vaccine-group-gavi-funding-immunisation-world-poorest-children-19431228.htm",
        "urlToImage": "https://images.cnbctv18.com/uploads/2021/07/soberana-2.jpg?im=FitAndFill,width=500,height=300",
        "publishedAt": "2024-06-20T10:32:39Z",
        "content": "The global vaccine organisation Gavi is likely to seek around $11.9 billion from governments and foundations on Thursday to fund immunisation efforts in the worlds poorest countries over five years, … [+2102 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Medical Device Network"
        },
        "author": "Ross Law",
        "title": "EDX Medical launches cancer heredity diagnostic tool - Medical Device Network",
        "description": "Cambridge, UK-based EDX Medical is launching a diagnostic tool in the UK to identify patients’ risk of developing hereditary cancer.",
        "url": "http://www.medicaldevice-network.com/news/edx-medical-launches-cancer-heredity-diagnostic-tool/",
        "urlToImage": "https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2020/09/shutterstock_739418605.jpg",
        "publishedAt": "2024-06-20T10:16:49Z",
        "content": "Cambridge, UK-based EDX Medical is launching a diagnostic tool in the UK to identify patients risk of developing hereditary cancer.\r\nThe as-yet-unnamed diagnostic tool performs germline testing. Whil… [+2117 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Hindustan Times",
        "title": "5 foods to boost immunity in monsoons - Hindustan Times",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS93ZWItc3Rvcmllcy9saWZlc3R5bGUvNS1mb29kcy10by1ib29zdC1pbW11bml0eS1pbi1tb25zb29ucy0xMDE3MTg4NzE1OTY3NTkuaHRtbNIBb2h0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS93ZWItc3Rvcmllcy9saWZlc3R5bGUvNS1mb29kcy10by1ib29zdC1pbW11bml0eS1pbi1tb25zb29ucy0xMDE3MTg4NzE1OTY3NTkuaHRtbA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-20T09:15:12Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Medicaleconomics.com"
        },
        "author": "Grace Koennecke",
        "title": "Detecting strokes with a smartphone; why older adults are moving slower; chili peppers' link to obesity – Morning Medical Update - Medical Economics",
        "description": "The top news stories in medicine today.",
        "url": "https://www.medicaleconomics.com/view/detecting-strokes-with-a-smartphone-why-older-adults-are-moving-slower-chili-peppers-link-to-obesity-morning-medical-update",
        "urlToImage": "https://cdn.sanity.io/images/0vv8moc6/medec/8473b8c146326b3227bc5794c5d77365fc1e55ff-8736x4896.jpg?fit=crop&auto=format",
        "publishedAt": "2024-06-20T09:04:08Z",
        "content": "Identifying strokes with a smartphone\r\nA new smartphone face-screening tool could help paramedics identify strokes in seconds. Currently, there is no quicker or more accurate technologies to delay st… [+2097 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Doctors May Soon Be Able To Detect, Diagnose Cancer Using AI: Study - NDTV",
        "description": "Doctors may soon be able to detect and diagnose cancer in patients using artificial intelligence (AI) that will allow for earlier treatment, a new study said today.",
        "url": "https://www.ndtv.com/world-news/doctors-may-soon-be-able-to-detect-diagnose-cancer-using-ai-study-5929956",
        "urlToImage": "https://i.ndtvimg.com/i/2016-03/doctor-generic_650x400_51457435907.jpg",
        "publishedAt": "2024-06-20T08:43:40Z",
        "content": "Doctors may soon be able to detect and diagnose cancer in patients using artificial intelligence\r\nLondon: Doctors may soon be able to detect and diagnose cancer in patients using artificial intellige… [+1748 chars]"
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
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Free Malaysia Today",
        "title": "Govt to seek WHO’s input after Japan spike in flesh-eating bacterial infection cases - Free Malaysia Today",
        "description": null,
        "url": "https://news.google.com/rss/articles/CCAiCzM1QjdTYkIzeXVRmAEB?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-20T07:55:04Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "Women, it’s not too late; this is when you can start exercising to get maximum benefits (and it’s not in your 30s) - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/lifestyle/fitness/exercise-physical-activity-women-age-fitness-health-9356503/",
        "urlToImage": null,
        "publishedAt": "2024-06-20T07:54:50Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Cureus.com"
        },
        "author": "Cureus",
        "title": "An Unusual Ocular Manifestation of Disseminated Tuberculosis: Combined Retinal Vascular Occlusion Inducing Acute Loss of Vision - Cureus",
        "description": null,
        "url": "https://www.cureus.com/articles/257278-an-unusual-ocular-manifestation-of-disseminated-tuberculosis-combined-retinal-vascular-occlusion-inducing-acute-loss-of-vision",
        "urlToImage": null,
        "publishedAt": "2024-06-20T07:54:25Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "Investing.com India",
        "title": "New research shows walking can stop backache from returning - Investing.com India",
        "description": null,
        "url": "https://in.investing.com/news/general-news/new-research-shows-walking-can-stop-backache-from-returning-4263187",
        "urlToImage": null,
        "publishedAt": "2024-06-20T07:48:32Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Firstpost"
        },
        "author": "Firstpost",
        "title": "Drink too much coffee? These 7 things will help you avoid its side effects - Firstpost",
        "description": "Caffeine has become a necessity for most people. It’s no secret a cup of coffee can boost energy levels and sharpen focus but it can also cause jitters. Here are ways to avoid coffee’s side effects",
        "url": "https://www.firstpost.com/web-stories/lifestyle/drink-too-much-coffee-these-7-things-will-help-you-avoid-its-side-effects-23730.html",
        "urlToImage": "https://images.news18.com/webstories/uploads/2024/06/cropped-istockphoto-1411187530-612x612-1-2024-06-5af879ac2d9e6567f51b7b1cbc4de6fb.jpg",
        "publishedAt": "2024-06-20T07:25:18Z",
        "content": "Drink too much coffee? These 7 things will help you avoid its  side effects \r\nDrink waterStaying hydrated is important for the body but when you have consumed coffee it becomes absolutely essential. … [+1149 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Nivedita",
        "title": "International Yoga Day 2024: 7 yoga asanas for managing hypothyroidism - Moneycontrol",
        "description": "International Yoga Day 2024: Hypothyroidism is a condition where the thyroid gland does not produce enough thyroid hormones, leading to symptoms such as fatigue, weight gain, cold intolerance, and depression. Here are seven steps in which yoga can help treat …",
        "url": "https://www.moneycontrol.com/health-and-fitness/international-day-of-yoga-2024-7-yoga-asanas-for-managing-hypothyroidism-article-12752527.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240620055741_pranayama.jpg",
        "publishedAt": "2024-06-20T06:38:25Z",
        "content": "International Yoga Day 2024: Yoga can play a supportive role in managing hypothyroidism, a condition characterised by an underactive thyroid gland. While yoga is not a replacement for medical treatme… [+7061 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBCTV18"
        },
        "author": "https://www.cnbctv18.com",
        "title": "Nepal suspends sale, import of Indian Biotax 1gm injection; manufacturer Zydus Lifesciences responds - CNBCTV18",
        "description": "Biotax 1 gm comes with 5 ml of sterile water while the department allows both intramuscular (3 ml) and intravenous (10 ml) administration.",
        "url": "https://www.cnbctv18.com/india/healthcare/nepal-bans-sale-import-of-biotax-1gm-injection-manufacturer-zydus-lifesciences-responds-19431003.htm",
        "urlToImage": "https://images.cnbctv18.com/uploads/2020/06/ZydusCadila1.jpg?im=FitAndFill,width=500,height=300",
        "publishedAt": "2024-06-20T06:32:00Z",
        "content": "Nepal has suspended the sale and distribution of Biotax 1gm injection, manufactured by Indian Pharmaceutical company Zydus Lifesciences. The Department of Drug Administration, the country's drug regu… [+1983 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "News-Medical.Net"
        },
        "author": null,
        "title": "New Approach to Treating Melanoma - News-Medical.Net",
        "description": "An international research team, led by Professor Wenbo Bu of Fudan University and Distinguished Professor Dayong Jin of the University of Technology Sydney, have discovered an innovative method to effectively treat cancer by reactivating suppressed metabolic …",
        "url": "https://www.news-medical.net/news/20240620/New-Approach-to-Treating-Melanoma.aspx",
        "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_783255_17188643812277371.jpg",
        "publishedAt": "2024-06-20T06:27:00Z",
        "content": "An international research team, led by Professor Wenbo Bu of Fudan University and Distinguished Professor Dayong Jin of the University of Technology Sydney, discovered an innovative method to effecti… [+2949 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Moneycontrol",
        "title": "How to lose weight naturally: Boost your weight loss journey with cherries, jamun, berries, more - Moneycontrol",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiqAFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL2hlYWx0aC1hbmQtZml0bmVzcy9ob3ctdG8tbG9zZS13ZWlnaHQtbmF0dXJhbGx5LWJvb3N0LXlvdXItd2VpZ2h0LWxvc3Mtam91cm5leS13aXRoLWNoZXJyaWVzLWphbXVuLWJlcnJpZXMtbW9yZS1waG90by1nYWxsZXJ5LTEyNzUyNTg0Lmh0bWzSAawBaHR0cHM6Ly93d3cubW9uZXljb250cm9sLmNvbS9oZWFsdGgtYW5kLWZpdG5lc3MvaG93LXRvLWxvc2Utd2VpZ2h0LW5hdHVyYWxseS1ib29zdC15b3VyLXdlaWdodC1sb3NzLWpvdXJuZXktd2l0aC1jaGVycmllcy1qYW11bi1iZXJyaWVzLW1vcmUtcGhvdG8tZ2FsbGVyeS0xMjc1MjU4NC5odG1sL2FtcA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-20T06:23:09Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "News24online.com"
        },
        "author": "News24 Desk",
        "title": "Healthy Habits: 7 Reasons To Walk After Dinner - News24",
        "description": "Healthy Habits: 7 Reasons To Walk After Dinner",
        "url": "https://news24online.com/web-stories/healthy-habits-7-reasons-to-walk-after-dinner/",
        "urlToImage": "https://news24online.com/wp-content/uploads/2024/06/cropped-evening-walk.jpg",
        "publishedAt": "2024-06-20T05:15:49Z",
        "content": "Walking helps reduce stress and anxiety by releasing endorphins, the body's natural mood lifters, contributing to overall mental well-being."
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "Egg toast vs. avocado toast: Which is the healthier choice? - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/web-stories/food/egg-toast-vs-avocado-toast-which-is-the-healthier-choice/9402159/",
        "urlToImage": null,
        "publishedAt": "2024-06-20T05:15:20Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "Jim Reed - Health reporter, BBC News",
        "title": "'Space hairdryer' regenerates heart tissue in study - Yahoo Singapore News",
        "description": "Gentle shockwaves could regenerate the heart tissue of patients after bypass surgery, research suggests.",
        "url": "https://www.bbc.com/news/articles/cv224pxz418o?xtor=AL-72-%5Bpartner%5D-%5Byahoo.north.america%5D-%5Bheadline%5D-%5Bnews%5D-%5Bbizdev%5D-%5Bisapi%5D",
        "urlToImage": "https://media.zenfs.com/en/bbc_us_articles_995/1e71d879c3524107e1b467b5ee105555",
        "publishedAt": "2024-06-20T04:40:46Z",
        "content": "Gentle shockwaves could regenerate the heart tissue of patients after bypass surgery, research suggests.\r\nA study of 63 people in Austria found those given the new treatment could walk further - and … [+3385 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "APN News",
        "title": "Meril Announces Prestigious LANCET Publication for Landmark RCT of the MYVAL THV Series, Researched and Developed by INDIA - APN News",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMikgFodHRwczovL3d3dy5hcG5uZXdzLmNvbS9tZXJpbC1hbm5vdW5jZXMtcHJlc3RpZ2lvdXMtbGFuY2V0LXB1YmxpY2F0aW9uLWZvci1sYW5kbWFyay1yY3Qtb2YtdGhlLW15dmFsLXRodi1zZXJpZXMtcmVzZWFyY2hlZC1hbmQtZGV2ZWxvcGVkLWJ5LWluZGlhL9IBkgFodHRwczovL3d3dy5hcG5uZXdzLmNvbS9tZXJpbC1hbm5vdW5jZXMtcHJlc3RpZ2lvdXMtbGFuY2V0LXB1YmxpY2F0aW9uLWZvci1sYW5kbWFyay1yY3Qtb2YtdGhlLW15dmFsLXRodi1zZXJpZXMtcmVzZWFyY2hlZC1hbmQtZGV2ZWxvcGVkLWJ5LWluZGlhLw?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-20T03:36:32Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Healthshots.com"
        },
        "author": "Shruti Bhattacharya",
        "title": "International Day of Yoga: 5 simple yet effective Aerial yoga poses for weight loss - Health shots",
        "description": "Aerial yoga not only looks beautiful, but offers several health benefits. Here are some of the best aerial yoga poses for weight loss.",
        "url": "https://www.healthshots.com/fitness/weight-loss/aerial-yoga-for-weight-loss/",
        "urlToImage": "https://images.healthshots.com/healthshots/en/uploads/2024/06/19210734/aerial-yoga-1.jpg",
        "publishedAt": "2024-06-20T03:29:44Z",
        "content": "In a quest to lose weight, you must have tried a gazillion ways but did you try aerial yoga for weight loss? This fun and beautiful yoga technique uses a silky hammock from which you suspend yourself… [+5998 chars]"
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
