import {Component} from 'react'
import {
  MemeGeneratorContainer,
  Heading,
  ImageContainer,
  Text,
  InputsContainer,
  LabelElement,
  InputElement,
  SelectElement,
  SubmitButton,
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
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '8',
    isGenerate: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onClickGenerate = event => {
    event.preventDefault()
    this.setState({isGenerate: true})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isGenerate} = this.state
    return (
      <MemeGeneratorContainer data-testid="meme">
        <Heading>Meme Generator</Heading>
        {isGenerate && (
          <ImageContainer bgImg={imageUrl}>
            <Text fontSize={`${fontSize}px`}>{topText}</Text>
            <Text fontSize={`${fontSize}px`}>{bottomText}</Text>
          </ImageContainer>
        )}
        <InputsContainer onSubmit={this.onClickGenerate}>
          <div>
            <LabelElement htmlFor="urlId">Image URL</LabelElement>
            <InputElement
              type="text"
              id="urlId"
              placeholder="Enter the image URL"
              value={imageUrl}
              onChange={this.onChangeImageUrl}
            />
          </div>
          <div>
            <LabelElement htmlFor="topTextId">Top Text</LabelElement>
            <InputElement
              type="text"
              id="topTextId"
              placeholder="Enter the Top Text"
              value={topText}
              onChange={this.onChangeTopText}
            />
          </div>
          <div>
            <LabelElement htmlFor="bottomTextId">Bottom Text</LabelElement>
            <InputElement
              type="text"
              id="bottomTextId"
              placeholder="Enter the Bottom Text"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />
          </div>
          <div>
            <LabelElement htmlFor="fontSizeId">Font Size</LabelElement>
            <SelectElement
              id="fontSizeId"
              name="fontSizeId"
              value={fontSize}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachItem => (
                <option key={eachItem.optionId} value={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </SelectElement>
          </div>
          <SubmitButton type="submit">Generate</SubmitButton>
        </InputsContainer>
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
