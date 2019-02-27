import React from 'react'
import {css} from '@emotion/core'
import {SidebarElement, SidebarService} from 'sidebarjs';

const sidebarjs = new SidebarJS.SidebarElement({
    // Sidebar DOM element
    component?: <HTMLElement>sidebarjs,
    // Minimum swipe in px required to trigger listener: open
    documentMinSwipeX?: 10,
    // Range in px where document is listening for gesture: open
    documentSwipeRange?: 40,
    // Open and close sidebar with swipe gestures
    nativeSwipe?: true,
    // Enable/Disable open on swipe
    nativeSwipeOpen?: true,
    // Sidebar position, accepted values: left|right
    position?: 'right',
    // Backdrop opacity on sidebar open
    backdropOpacity?: 0.3,
    // Show sidebar on screen > 1024px
    responsive?: true,
    // Page content if sidebar has option responsive
    mainContent?: <HTMLElement>
    // Function called after sidebar is open
    onOpen?: () => void,
    // Function called after sidebar is close
    onClose?: () => void,
    // Function called when sidebar change visibility
    onChangeVisibility?: (changes: { isVisible: boolean }) => void,
})

const SideNav = () => (
	<div sidebarjs>
    <nav>
      <a href="link">Home</a>
      <a href="link">About</a>
      <a href="link">Contacts</a>
    </nav>
  </div>

  <div sidebarjs-content>
    your content
    <div sidebarjs-toggle>Open/Close</div>
  </div>
)