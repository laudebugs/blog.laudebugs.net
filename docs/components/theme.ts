import { SandpackThemeProp } from '@codesandbox/sandpack-react'

export const shadesOfPurple: SandpackThemeProp = {
  colors: {
    surface1: '#2d2a55',
    surface2: '#28284e',
    surface3: '#1f1f41',
    clickable: '#a599e9',
    base: '#cdc4c4',
    disabled: '#4D4D4D',
    hover: '#c5e4fd',
    accent: '#c5e4fd',
    error: '#ffcdca',
    errorSurface: '#a94544'
  },
  syntax: {
    plain: '#d6deeb',
    comment: {
      color: '#b362ff',
      fontStyle: 'italic'
    },
    keyword: '#ff9d00',
    tag: '#9effff',
    punctuation: '#ffee80',
    definition: '#92fc79',
    property: '#ffee80',
    static: '#f78c6c',
    string: '#a5ff90'
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"IBM Plex Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: '13px',
    lineHeight: '20px'
  }
}
