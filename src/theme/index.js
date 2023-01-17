import { extendTheme } from '@chakra-ui/react';
import styles from './style';
import fonts from './fonts';
import { brand } from './colors'
import { containerTheme } from './components/Container'
import { buttonTheme } from './components/Button';


const overrides = {
    styles,
    fonts: {
        ...fonts
    },
    colors: {
        brand
    },
    components: {
        Container: containerTheme,
        Button: buttonTheme,
    }
}

const theme = extendTheme(overrides)
export default theme;