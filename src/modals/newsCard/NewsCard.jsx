import React from 'react'

const NewsCard = ({newsItem}) => {

    console.log(newsItem);
    // const { image, title, snippet, link } = newsItem
    return (
        <div>
            {/* <div className="card-header">
                <img src={image} alt="" />
            </div>
            <div className="card-body">
                <h3>{title}</h3>
                <p>{snippet}</p>
                <p>{link}</p>
                <div className="button-container">
                    <button>
                        <a href={link}>open page</a>
                    </button>
                    <button>
                        Cancel
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default NewsCard