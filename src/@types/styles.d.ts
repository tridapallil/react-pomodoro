import 'styled-components'

import { defaultTheme } from '../styles/themes/default'

type ThemeTpe = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}