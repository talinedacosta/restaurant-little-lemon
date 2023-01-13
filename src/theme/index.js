import { extendTheme } from '@chakra-ui/react';
import styles from './style';
import fonts from './fonts';
import { brand } from './colors'

const overrides = {
    styles,
    fonts: {
        ...fonts
    },
    colors: {
        brand
    }
}

const theme = extendTheme(overrides)
export default theme;