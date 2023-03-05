import { AppState } from '@app/state/app.state'
import { Theme } from '@app/core/theme'

export interface State extends AppState {
  products: CoreState;
}

export interface CoreState {
  currentTheme: Theme;
  showSidenav: boolean;
}
