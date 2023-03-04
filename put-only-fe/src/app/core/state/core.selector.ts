import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CoreState } from '@app/core/state/core.state'

export const selectAppState = createFeatureSelector<CoreState>('core')

export const selectTheme = createSelector(
  selectAppState,
  (state: CoreState) => state.currentTheme
)

export const selectSidenav = createSelector(
  selectAppState,
  (state: CoreState) => state.showSidenav
)
