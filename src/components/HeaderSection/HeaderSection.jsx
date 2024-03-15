import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'
import HeaderBody from './HeaderBody'

const HeaderSection = () => {
  return (
    <MainSection>
      <Navigation />
      <HeaderBody />
    </MainSection>
  )
}
const MainSection = styled.header`
  min-height: 100vh;
  position: relative;
  &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('img/hero.jpg') no-repeat center center/cover;
      z-index: -1;
  }
  &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(22,28,45,.5)!important;
      z-index: -1;
  }
  
`
export default HeaderSection
