import { Injectable } from '@angular/core'

type Theme = 'light-theme' | 'dark-theme' | 'contrast-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _currentTheme: Theme = 'light-theme'

  get currentTheme() {
    return this._currentTheme
  }

  set currentTheme(theme: Theme) {
    this._currentTheme = theme
  }
}
