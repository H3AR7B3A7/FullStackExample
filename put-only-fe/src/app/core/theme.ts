const themes = {
  lightTheme: { title: $localize`Light Theme`, value: 'light-theme' },
  darkTheme: { title: $localize`Dark Theme`, value: 'dark-theme' },
  contrastTheme: { title: $localize`Contrast Theme`, value: 'contrast-theme' },
} as const

export const THEMES = Object.values(themes)

export const DEFAULT_THEME = THEMES[0]

export type Theme = (typeof themes)[keyof typeof themes]

/**
 * Resolve by const value
 * @param theme
 */
export const resolveTheme = <T extends Theme>(theme: T): string | undefined => {
  return Object.keys(themes).find(
    (key) => themes[key as keyof typeof themes] === theme
  )
}

// /**
//  * Resolve by const key
//  * @param theme
//  */
// export const resolveTheme = <T extends Theme>(
//   theme: T
// ): (typeof themes)[T] => {
//   return themes[theme]
// }
