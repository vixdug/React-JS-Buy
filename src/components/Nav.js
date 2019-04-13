import React, { Component } from 'react'
import '../styles/nav.css'
import { Icon, Menu, Button } from 'semantic-ui-react'

class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon size='large'>
        <Menu.Item
          color='orange'
        >
        Connected Color
        </Menu.Item>

        <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          Reviews
        </Menu.Item>

        <Menu.Menu position='right'>
        <Menu.Item
          name='Cart'
          active={activeItem === 'cart'}
          onClick={this.props.handleCartOpen}>
            <Button animated='vertical'size='big'>
            <Button.Content hidden>Cart</Button.Content>
            <Button.Content visible>
                <Icon name='shop' />
            </Button.Content>
            </Button>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}



export default Nav;