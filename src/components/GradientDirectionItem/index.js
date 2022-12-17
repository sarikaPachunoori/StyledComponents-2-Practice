import {DirectionButtons, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, clickDirectionGradients} = props
  const {displayText, value} = directionDetails

  const onDirectionButton = () => {
    clickDirectionGradients(value)
  }
  return (
    <ListItem>
      <DirectionButtons
        onClick={onDirectionButton}
        isActive={isActive}
        type="button"
      >
        {displayText}
      </DirectionButtons>
    </ListItem>
  )
}

export default GradientDirectionItem
