import React, {} from 'react'

const NewsItem=(props)=> {

  // If you want to write constructor then u should call super class if its have an object!



    let { title, description, newsurl, imageurl, author, date, sources } = props;
    return (
      <div className="my-3 ">
        
        <div  className=" card postion-relative" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-light" style={{right:"0"}}>
{sources}  </span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{title}
        </h5>
        
  
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By : {author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark ">Go in Details
          </a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem
