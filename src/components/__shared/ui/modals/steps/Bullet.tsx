import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
  className?: string
  number: number;
}

const Bullet = (props: Props) => {
  return (
      <div className={cn("grid h-20 w-20 place-items-center rounded-full p-3 shadow-large", props.className)}>
        <h3 className="text-2xl font-normal">0{props.number}</h3>
      </div>
  )
}

export default Bullet
