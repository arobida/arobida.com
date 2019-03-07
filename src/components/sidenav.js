import React from 'react'
import { css } from '@emotion/core'
import { SidebarJS } from 'react-sidebarjs'
import MobileItems from './mobileitems'

export default class SideNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisibleSidebar: false,
    }
    this.changeSidebarVisibility = this.changeSidebarVisibility.bind(this)
  }

  changeSidebarVisibility = changes => {
    this.setState({
      isVisibleSidebar: changes.isVisible,
    })
  }

  render() {
    return (
      <SidebarJS
        sidebarjsName="MainSidebar"
        sidebarjsConfig={{ position: 'right', responsive: 'true' }}
        onChangeVisibility={this.changeSidebarVisibility}
      >
        <MobileItems />
      </SidebarJS>
    )
  }
}
