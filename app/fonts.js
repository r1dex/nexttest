import { Roboto, Roboto_Condensed} from 'next/font/google'

export const mainFont = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--main-font'
})

export const titleFont = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--title-font'
})