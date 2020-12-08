import { createMuiTheme } from '@material-ui/core/styles'
import { primaryColor, secondaryColor } from '../Constants/Colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#fff'
        },
        // secondary: {
        //     main: secondaryColor
        // }
    }
})
export default theme;