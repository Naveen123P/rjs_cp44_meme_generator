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

export const InputsContainer = styled.form`
  height: 55%;
  width: 92%;
  margin: 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 0px;
`

export const LabelElement = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
`

export const InputElement = styled.input`
  height: 2rem;
  width: 100%;
  border: 1px solid #7e858e;
  padding: auto;
  border-radius: 5px;
`

export const SelectElement = styled.select`
  height: 2rem;
  width: 100%;
  border: 1px solid #7e858e;
  padding: auto;
  border-radius: 5px;
`
export const SubmitButton = styled.button`
  color: #ffffff;
  font-weight: bold;
  background-color: #0b69ff;
  border: none;
  padding: auto;
  height: 2rem;
  width: 6rem;
  border-radius: 5px;
`
