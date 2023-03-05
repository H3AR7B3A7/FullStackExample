import { createAction, props } from '@ngrx/store'
import { Client } from '@app/client/client'

// LOAD OPERATIONS

export const loadClientsSuccess = createAction(
  '[Client API] Load Success',
  props<{ clients: Client[] }>()
)

export const loadClientsFail = createAction(
  '[Client API] Load Fail',
  props<{ error: string }>()
)
