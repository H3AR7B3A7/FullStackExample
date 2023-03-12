import { CoreState } from '@app/core/state/core.state'
import { DEFAULT_THEME } from '@app/core/theme'
import { createReducer, on } from '@ngrx/store'

import * as CoreActions from './core.actions'

export const initialState: CoreState = {
  currentTheme: DEFAULT_THEME,
  showSidenav: true,
}

export const appReducer = createReducer<CoreState>(
  initialState,
  on(CoreActions.changeTheme, (state, action): CoreState => {
    return {
      ...state,
      currentTheme: action.theme,
    }
  }),
  on(CoreActions.openSidenav, (state, action): CoreState => {
    return {
      ...state,
      showSidenav: action.open,
    }
  }),
  on(CoreActions.toggleSidenav, (state): CoreState => {
    return {
      ...state,
      showSidenav: !state.showSidenav,
    }
  })
)
