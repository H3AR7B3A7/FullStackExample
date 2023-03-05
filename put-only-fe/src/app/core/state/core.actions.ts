import { createAction, props } from '@ngrx/store'
import { Theme } from '@app/core/theme'

export const changeTheme = createAction(
  '[Core] Set Theme',
  props<{ theme: Theme }>()
)

export const openSidenav = createAction(
  '[Core] Set Sidenav',
  props<{ open: boolean }>()
)

export const toggleSidenav = createAction('[Core] Toggle Sidenav')
