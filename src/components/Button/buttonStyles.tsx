import { ButtonColorType, ButtonSizeType } from './button.types'

export const DEFAULT_BUTTON_SIZE: ButtonSizeType = 'base'
export const DEFAULT_BUTTON_COLOR: ButtonColorType = 'slate'

export const buttonSizes: { [key in ButtonSizeType]: string } = {
  xs: 'py-2 px-3 text-xs',
  sm: 'py-2 px-3 text-sm',
  base: 'px-5 py-2.5 text-sm',
  lg: 'py-3 px-5 text-base',
  xl: 'px-6 py-3.5 text-base',
}

export const buttonColors: { [key in ButtonColorType]: string } = {
  slate:
    'text-white bg-slate-900 hover:bg-slate-700 focus:ring-offset-slate-50 focus:ring-slate-400 dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400',
  sky: 'text-white bg-blue-600 highlight-white/20 hover:bg-blue-500 dark:bg-sky-500 dark:hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed',
  indigo: 'text-white bg-indigo-600 highlight-white/20 hover:bg-indigo-500',
  white:
    'bg-white text-slate-900 shadow-sm border border-slate-300 focus:ring-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:ring-slate-600 dark:hover:bg-slate-700 dark:focus:ring-offset-slate-900',
}
