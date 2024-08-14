// Style your components here
import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  text-align: center;
  font-size: 1.5rem;
  margin: 5px;
`

export const ImageContainer = styled.div`
  height: 40%;
  width: 92%;
  color: #ffffff;
  background-image: url(${props => props.bgImg});
  background-color: #089;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`

export const Text = styled.p`
  font-size: ${props => props.fontSize};
  font-family: 'Open Sans';
  font-weight: bold;
  margin: 0px;
`

export const InputsContainer = styled.div`
  height: 55%;
  width: 92%;
  background-color: #782;
  margin: 5px 5px;
`
