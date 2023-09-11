import { Poppins, Montserrat, Open_Sans } from 'next/font/google'

// define your variable fonts

const poppins400 = Poppins({
    weight: '400', subsets: ['latin']
})
const poppins600 = Poppins({
    weight: '600', subsets: ['latin']
})
const montserat = Montserrat({
    subsets: ['latin']
})
const openSans = Open_Sans({
    subsets: ['latin']
})


export { poppins400, poppins600, montserat, openSans }