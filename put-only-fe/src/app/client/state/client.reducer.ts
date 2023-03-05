import { createReducer, on } from '@ngrx/store'

import { ClientState } from '@app/client/state/client.state'
import { ClientApiActions } from '@app/client/state/actions'

const initialState: ClientState = {
  clients: [],
  errorMessage: '',
}

export const clientReducer = createReducer<ClientState>(
  initialState,
  on(ClientApiActions.loadClientsSuccess, (state, action): ClientState => {
    return {
      ...state,
      clients: action.clients,
      errorMessage: '',
    }
  }),
  on(ClientApiActions.loadClientsFail, (state, action): ClientState => {
    return {
      ...state,
      clients: [],
      errorMessage: action.error,
    }
  })
)
