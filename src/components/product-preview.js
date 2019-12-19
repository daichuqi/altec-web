import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Carousel } from 'antd'

import './product-preview.css'

export default ({ product }) => (
  <div>
    <div className="product-name">{product.name}</div>

    <div className="product-image-container">
      <Carousel className="product-image" effect="fade">
        {product.images.map((img, i) => (
          <Img key={i} alt="" fluid={img.fluid} />
        ))}
      </Carousel>
    </div>

    <div className="product-highlights">
      <ul>
        {product.features.map((feature, i) => (
          <li key={i}>{feature.content}</li>
        ))}
      </ul>
    </div>

    <div className="short-description">{product.description.description}</div>

    {/* <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {article.tags.map(tag => (
      <p className={styles.tag} key={tag}>
        {tag}
      </p>
    ))} */}
  </div>
)
