import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    className?: string;
}

const VerticalSliderScrollFixOverlay = ({ className }: Props) => {
    return (
        <>
            <div className={cn("absolute left-0 opacity-100 top-0 z-10 h-full w-full -translate-x-16 bg-red-400 md:-translate-x-32", className)}></div>
            {/* !!! Temporary fix of scrolling issue on mobile !!!*/}
        </>
    )
}

export default VerticalSliderScrollFixOverlay