import {createAction, props} from '@ngrx/store'

export const loadClients = createAction('[Client Page] Load')

export const showForm = createAction('[Client Page] Show Form', props<{ value: boolean }>())
