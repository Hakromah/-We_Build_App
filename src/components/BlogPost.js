import React from "react";
import "./BlogPost.scss";
import blogData from "./BlogPostData";
const BlogPost = () => {
  return (
    <div className="blog-container">
      <div className="blog-title">
        <h1>
          LATEST <span className="blog-article"> ARTICLES</span> FROM OUR BLOG
          POST
        </h1>
      </div>
      <div className="card-container">
        <div className="card-blog">
          
          <div  className="card-blog">
            {blogData.map((data) => (
                <div className="card-blogs">
                <img src={data.img} alt="blog" width='280px' height='250px'
                className='building' />
                <div className="profile">
                  <p>
                    {" "}
                    <img src={data.img2} alt="profile" width='50px' height='50px' className='user' />
                    <span className="name">{data.name}</span>
                  </p>
                  <p>{data.icon} {data.date}</p>
                </div>
                <h3 className="data-text">{data.text}</h3>
                <p className="data-read">{data.read} {data.arrow}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
