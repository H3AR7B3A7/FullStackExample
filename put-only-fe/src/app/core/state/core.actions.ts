import { createAction, props } from '@ngrx/store'

export const changeTheme = createAction(
  '[Core] Set Theme',
  props<{ theme: 'light-theme' | 'dark-theme' | 'contrast-theme' }>()
)

export const openSidenav = createAction(
  '[Core] Set Sidenav',
  props<{ open: boolean }>()
)

export const toggleSidenav = createAction('[Core] Toggle Sidenav')
