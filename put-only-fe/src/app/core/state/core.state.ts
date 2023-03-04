import * as AppState from '@app/state/app.state'

export interface State extends AppState.State {
  products: CoreState;
}

export interface CoreState {
  currentTheme: string;
  showSidenav: boolean;
}
