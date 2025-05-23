import type { Component } from 'vue'
export const navProps = {
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
  },
  socialLinks: {
    type: Array<NavLinkType>,
    default: () => []
  },
  scrollHide: {
    type: Boolean,
    default: true
  }
}

export interface NavLinkType {
  icon: Component
  link: string
  event?: Function
}