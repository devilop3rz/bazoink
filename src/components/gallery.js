import React, { Component } from 'react'
import styled from 'styled-components';

const GalleryContainer = styled.div`
height: 100%;
overflow: hidden;
`
const Image = styled.div`
  top: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${({src}) => src};
  background-size: cover;
  background-repeat: no-repeat;
`

export default class Gallery extends Component {
  render() {
    return (
      <GalleryContainer>
        <Image src={'https://picsum.photos/800/1080/?random'} />
      </GalleryContainer>
    )
  }
}
