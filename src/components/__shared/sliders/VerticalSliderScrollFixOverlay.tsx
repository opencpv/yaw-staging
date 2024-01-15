import { cn } from '@/lib/utils'
import Link from 'next/link';
import React from 'react'

type Props = {
    className?: string;
    href?: string;
}

const VerticalSliderScrollFixOverlay = ({ className, href }: Props) => {
    if (href)
        return (
            <>
                <Link href={href ?? ""} className={cn("absolute left-0 opacity-0 top-0 z-10 h-full w-full pointer-events-none -translate-x-16 bg-red-400", className)}></Link>
                {/* !!! Temporary fix of scrolling issue on mobile !!!*/}
            </>
        )
    else
        return (
            <>
                <div className={cn("absolute left-0 opacity-0 top-0 z-10 h-full w-full -translate-x-16 bg-red-400", className)}></div>
                {/* !!! Temporary fix of scrolling issue on mobile !!!*/}
            </>
        )
}

export default VerticalSliderScrollFixOverlay