import { Poppins, Montserrat, Open_Sans } from 'next/font/google'

// define your variable fonts

const poppins400 = Poppins({
    weight: '400', subsets: ['latin'],
    display: "swap",
    adjustFontFallback: false,
})
const poppins600 = Poppins({
    weight: '600', subsets: ['latin'],
    display: "swap",
    adjustFontFallback: false,
})
const montserat = Montserrat({
    subsets: ['latin'],
    display: "swap"
})
const openSans = Open_Sans({
    subsets: ['latin'],
    display: "swap",
    adjustFontFallback: false,
})


export { poppins400, poppins600, montserat, openSans }