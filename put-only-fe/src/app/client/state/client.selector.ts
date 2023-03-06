import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ClientState } from '@app/client/state/client.state'

const selectClientFeatureState = createFeatureSelector<ClientState>('client')
export const selectClients = createSelector(
  selectClientFeatureState,
  (state) => state.clients
)

export const selectClientErrorMessage = createSelector(
  selectClientFeatureState,
  (state) => state.errorMessage
)

export const selectClientLoading = createSelector(
  selectClientFeatureState,
  (state) => state.loading
)
