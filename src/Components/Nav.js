import React, { Component } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { Link } from 'react-router-dom'
import remcalc from 'remcalc'

import Logo from '../assets/logo.svg'
import Container from './Container'
import ToggleMode from './ToggleMode'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${remcalc(40)} 0;

  @media (max-width: ${remcalc(768)}) {
    flex-direction: column;
    padding: ${remcalc(40)} ${remcalc(20)};
  }
`

const List = styled.ul`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${remcalc(768)}) {
    justify-content: center;
    flex-wrap: wrap;
    line-height: ${remcalc(40)};
  }
`

const LogoWrapper = styled(Link)`
  opacity: 1;
  border: none;
  &:after {
    display: none;
  }
`

const Item = styled.li`
  @media (max-width: ${remcalc(768)}) {
    font-size: ${remcalc(16)};

    ${is('hideOnMobile')`
        display: none;
    `};
  }

  &:not(:last-child) {
    margin-right: ${remcalc(10)};
  }
`

export default class Navigation extends Component {
  state = {
    modalIsOpen: false,
    submitted: false,
    submitError: false
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  handleError = errorMsg => {
    this.setState({
      submitError: errorMsg
    })
    this.props.handleReset()
    setTimeout(() => {
      this.setState({
        submitError: false
      })
    }, 3000)
  }

  render = () => {
    return (
      <Container>
        <Nav>
          <LogoWrapper to="/">
            <img src={Logo} width="70" alt="Home" />
          </LogoWrapper>
          <List>
            <Item>
              <Link to="/proposed">
                <span>Proposed Talks</span>
              </Link>
            </Item>
            <Item>
              <Link to="/speakers">
                <span>Speakers</span>
              </Link>
            </Item>
            <Item>
              <Link to="/categories">
                <span>Categories</span>
              </Link>
            </Item>
            <Item hideOnMobile>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/SaraVieira/awesome-talks">
                <span>GitHub</span>
              </a>
            </Item>
            <Item>
              <button className="active_nav link" onClick={this.openModal}>
                Add a Talk
              </button>
            </Item>
            <Item>
              <ToggleMode />
            </Item>
          </List>
        </Nav>
      </Container>
    )
  }
}
