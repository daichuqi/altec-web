import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Menu, Divider } from 'antd'

import Layout from '../components/layout'
import ProductPreview from '../components/product-preview'

const { SubMenu } = Menu

class RootIndex extends React.Component {
  render() {
    const products = get(this, 'props.data.allContentfulProduct.edges')

    console.log('this.props.location', products[0])

    return (
      <Layout location={this.props.location}>
        <div className="home">
          <Helmet title={'ALTEC'} />
          <div className="menu-bar">
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['Products']}
              mode="inline"
            >
              <SubMenu key="Products" title="Products">
                <Menu.Item key="1">Temperature Controller</Menu.Item>
                <Menu.Item key="3">Temp. Differential Controller</Menu.Item>
                <Menu.Item key="6">Temp. & Humidity Controller</Menu.Item>
                <Menu.Item key="2">Tension Controller</Menu.Item>
                <Menu.Item key="4">Pressure Controller</Menu.Item>
                <Menu.Item key="7">PH/ORP Controller</Menu.Item>
                <Menu.Item key="5">Humidity Controller</Menu.Item>
                <Menu.Item key="8">Winding Controller</Menu.Item>
                <Menu.Item key="9">Weighting Controller</Menu.Item>
                <Menu.Item key="10">Speed Controller</Menu.Item>
              </SubMenu>
              <Menu.Item key="11">
                <span>About</span>
              </Menu.Item>
              <Menu.Item key="12">
                <span>Contact</span>
              </Menu.Item>
            </Menu>
          </div>
          <div className="main-content">
            <div className="wrapper">
              {/* <h2 className="section-headline">Recent articles</h2> */}
              <ul className="article-list">
                {products.map(({ node }, index) => (
                  <li className="product-container" key={index}>
                    <ProductPreview product={node} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          name
          type
          features {
            content
          }
          description {
            description
          }
          images {
            fluid(maxWidth: 150, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
