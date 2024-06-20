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
                "id": null,
                "name": "CNET"
            },
            "author": "Zachary McAuliffe",
            "title": "This iOS 17 Feature Blocks Unsolicited Nudes on Your iPhone - CNET",
            "description": "The feature works in Apple services, like Messages and AirDrop.",
            "url": "https://www.cnet.com/tech/services-and-software/this-ios-17-feature-blocks-unsolicited-nudes-on-your-iphone/",
            "urlToImage": "https://www.cnet.com/a/img/resize/32c24538cfcb439859a182df9b509a6e4086b657/hub/2023/10/17/95bd467a-3783-4698-b495-57ea3d853554/gettyimages-1676557935.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2023-10-29T11:00:07Z",
            "content": "Apple released iOS 17 on Sept. 18, and the OS included a handful of fun new features and improvements, like Live Stickers and offline maps. But one new feature included in iOS 17 is designed to help … [+1837 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "Google to present its star witness, the company's CEO",
            "description": "The Justice Department has wrapped its side of the case. Now Google's CEO Sundar Pichai .",
            "url": "https://www.macrumors.com/how-to/watch-apple-scary-fast-event-oct-30/",
            "urlToImage": "https://images.macrumors.com/t/VhHL8uudSicebz0hNvLrkW_TNCY=/2500x/article-new/2023/10/Which-Day-to-Watch-Scary-Fast-Event-Feature-1-2.jpg",
            "publishedAt": "2023-10-29T11:00:00Z",
            "content": "Apple is hosting an online streaming event for the public and press on Monday, October 30, 2023 at 5:00 p.m. Pacific Time. The company is expected to announce new Macs, and potentially other products… [+4097 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Dara Kerr",
            "title": "Google to present its star witness, the company's CEO",
            "description": "The Justice Department has wrapped its side of the case. Now Google's CEO Sundar Pichai .",
            "url": "https://www.npr.org/2023/10/29/1208928441/google-to-present-its-star-witness-the-companys-ceo-in-landmark-monopoly-trial",
            "urlToImage": "https://media.npr.org/assets/img/2023/10/26/gettyimages-1493187008_wide-63ac182b273bf351c94c50bb2a90c5a1ccb92b26-s1400-c100.jpg",
            "publishedAt": "2023-10-29T11:00:48Z",
            "content": "Alphabet and Google CEO Sundar Pichai is set to testify in major antitrust trial brought by the Department of Justice.\r\nBoris Streubel/Getty Images for DFB\r\nFor the past six weeks, the Justice Depart… [+6444 chars]"
        },
       
       
      ]
    
    
  //  WE USE STATE TO CHANGE ANYTHING AGAIN AND AGAIN WITHOUT LOADING OF PAGE 
 
  async updateNews(pageNo){
    this.props.setProgress(0);
    // a6f2b1cabfa548999b4e6fb901647656
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f2b1cabfa548999b4e6fb901647656`;
    this.setState({    loading:true,});
    let data=await fetch(url);
  let parseData=await data.json();
  this.setState({
    articles:parseData.articles,
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

// https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f2b1cabfa548999b4e6fb901647656