import { Inter, Poppins } from 'next/font/google'

export const useFonts = () => {
    const inter = Inter({
        weight: '400' || '600',
        subsets: ['latin'],
        variable: '--font-inter',
    })

    const poppins = Poppins({
        weight: '400' || '600',
        subsets: ['latin'],
        variable: '--poppins-default'
    })

    return { inter, poppins }
}