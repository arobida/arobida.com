import React from 'react'
import { css } from '@emotion/core'
import { SidebarJS, sidebarService } from 'react-sidebarjs'
import MobileItems from './mobileitems'


export default class SideNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisibleSidebar: false,
    }
  }
  toggleSidebar = () => {
    sidebarService.toggle('MainSidebar')
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
        onChangeVisibility={this.changeSidebarVisibility}
      >
        <MobileItems/>
      </SidebarJS>
    )
  }
}
