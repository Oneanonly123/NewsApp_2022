import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://imgs.search.brave.com/KvBz4guarOntsHyLQ1KQM-7AEJlpCBTRDM8xnJzvukA/rs:fit:1200:1152:1/g:ce/aHR0cHM6Ly9lMy4z/NjVkbS5jb20vMTgv/MDMvMjA0OHgxMTUy/L3NreW5ld3MtcGFw/ZXJzLW5ld3NwYXBl/cnNfNDI2NzMzNS5q/cGc_MjAxODAzMjgy/MjA3MjU"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-success">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
