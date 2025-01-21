import React from "react";
import { blog } from "../data/blog";
import { Link } from "react-router-dom";


export default function blog() {
  return (
    <div className="blog-page">
      <div className="container py-5">
        <h1 className="text-center mb-4">Our Blog</h1>
        <p className="text-center mb-5">
          Stay updated with the latest trends and insights in the hospitality industry.
        </p>
        <div className="row g-4">
          {blogPageData.map((blog) => (
            <div className="col-md-6 col-lg-4" key={blog.id}>
              <div className="blog-card">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-card-img"
                />
                <div className="blog-card-body">
                  <h5 className="blog-card-title">{blog.title}</h5>
                  <p className="blog-card-description">
                    {blog.description}
                  </p>
                  <div className="blog-card-footer">
                    <p className="blog-author">By {blog.author}</p>
                    <p className="blog-date">{blog.date}</p>
                  </div>
                  <Link to={blog.path} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
