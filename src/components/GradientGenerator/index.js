import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  Container,
  Heading,
  Paragraph,
  ListContainer,
  ColorCodesCont,
  ColorCode,
  ColorButtonCont,
  ResponsiveCont,
  ColorButton,
  GenerateButton,
  InputColors,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    scndColor: '#014f7b',
    gradientBgColor: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({scndColor: event.target.value})
  }

  clickDirectionGradients = direction => {
    this.setState({activeDirection: direction})
  }

  onClickGenerate = () => {
    const {activeDirection, firstColor, scndColor} = this.state
    this.setState({
      gradientBgColor: `to ${activeDirection},${firstColor},${scndColor}`,
    })
  }

  render() {
    const {
      activeDirection,
      firstColor,
      scndColor,
      backgroundColor,
      gradientBgColor,
      backgroundImage,
    } = this.state

    return (
      <Container
        data-testid="gradientGenerator"
        gradientBgColor={gradientBgColor}
      >
        <ResponsiveCont>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <ListContainer>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                directionDetails={eachItem}
                key={eachItem.directionId}
                clickDirectionGradients={this.clickDirectionGradients}
                isActive={activeDirection === eachItem.value}
              />
            ))}
          </ListContainer>
          <Paragraph>Pick the Colors</Paragraph>
          <ColorCodesCont>
            <ColorButtonCont>
              <ColorCode>{firstColor} </ColorCode>
              <InputColors
                type="color"
                value={firstColor}
                onChange={this.onChangeFirstColor}
              />
            </ColorButtonCont>
            <ColorButtonCont>
              <ColorCode>{scndColor} </ColorCode>
              <InputColors
                type="color"
                value={scndColor}
                onChange={this.onChangeSecondColor}
              />
            </ColorButtonCont>
          </ColorCodesCont>
          <GenerateButton onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </ResponsiveCont>
      </Container>
    )
  }
}

export default GradientGenerator
