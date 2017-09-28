import { Dimensions } from 'react-native'

const deviceWidthDp = Dimensions.get('window').width

const uiWidthPx = 750

export default function pxTodp(uiElementPx) {
  return (uiElementPx = deviceWidthDp * uiElementPx / uiWidthPx)
}
