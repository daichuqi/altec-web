import React, { Component } from 'react'
import { Layout as AntLayout, Button } from 'antd'

import Logo from '../../assets/logo.png'
import 'antd/dist/antd.css'
import './layout.css'

const { Content, Footer } = AntLayout

export default class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <AntLayout className="layout">
        <div className="header">
          <div className="logo">
            <img src={Logo} />
          </div>
          <div className="description">
            <div>Shenzhen ALTEC Electronics Co., Ltd.</div>

            <div>
              Dedicate to researching and providing precision industrial process
              controllers
            </div>
          </div>

          <Button className="language-button" size="small">
            English
          </Button>
        </div>
        <Content style={{ padding: '0 20px' }}>
          <div className="content-container">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Altec ©2019</Footer>
      </AntLayout>
    )
  }
}
