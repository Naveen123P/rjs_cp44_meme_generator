import {Component} from 'react'
import {
  MemeGeneratorContainer,
  Heading,
  ImageContainer,
  Text,
  InputsContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-img.png',
    topText: 'Naveen',
    bottomText: 'Pothuraju',
    fontSize: 16,
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <MemeGeneratorContainer>
        <Heading>Meme Generator</Heading>
        <ImageContainer bgImg={imageUrl}>
          <Text fontSize={fontSize}>{topText}</Text>
          <Text fontSize={fontSize}>{bottomText}</Text>
        </ImageContainer>
        <InputsContainer>s</InputsContainer>
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
