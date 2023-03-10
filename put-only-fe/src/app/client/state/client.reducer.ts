import { ClientApiActions, ClientPageActions } from '@app/client/state/actions'
import { ClientState } from '@app/client/state/client.state'
import { createReducer, on } from '@ngrx/store'

const initialState: ClientState = {
  clients: [],
  errorMessage: '',
  loading: true,
  showForm: false,
}

export const clientReducer = createReducer<ClientState>(
  initialState,
  on(ClientApiActions.loadClientsSuccess, (state, action): ClientState => {
    return {
      ...state,
      clients: action.clients,
      errorMessage: '',
      loading: false,
    }
  }),
  on(ClientApiActions.loadClientsFail, (state, action): ClientState => {
    return {
      ...state,
      clients: [],
      errorMessage: action.error,
      loading: false,
    }
  }),
  on(ClientPageActions.showForm, (state, action): ClientState => {
    return {
      ...state,
      showForm: action.value,
    }
  })
)
