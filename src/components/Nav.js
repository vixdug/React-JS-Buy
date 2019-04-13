import React, { Component } from 'react'
import '../styles/nav.css'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          Reviews
        </Menu.Item>

        <Menu.Item
          name='Cart'
          active={activeItem === 'cart'}
          onClick={this.props.handleCartOpen}
        >
          Cart
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav;