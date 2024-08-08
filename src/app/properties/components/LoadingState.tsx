import SkeletonTextual from '@/components/__shared/ui/skeleton/SkeletonTextual'
import { Skeleton } from '@nextui-org/react'
import React from 'react'


const LoadingState = () => {
  return (
    <div className="wrapper flex flex-col gap-10">
      <section className="flex w-full justify-between gap-10">
        <Skeleton  className='w-2/3 rounded-lg'>
          <div className="text-primary" />
        </Skeleton>
          <Skeleton  className='w-1/3 rounded-lg'>
          <div className="text-primary" />
        </Skeleton>
        </section>
      <section className="grid grid-cols-4 gap-5">
        <Skeleton  className='rounded-3xl'>
        <div className="relative col-span-3 aspect-video w-full" />
        </Skeleton>
        <div className="grid gap-5">
        <Skeleton  className='rounded-3xl'>
          <div className="relative w-full aspect-video" />
          </Skeleton>
          <Skeleton  className='rounded-3xl'>
          <div className="relative w-full aspect-video" />
          </Skeleton>
        </div>
      </section>
        <section className='grid grid-cols-3 gap-5'>
        <div className='col-span-2'>
          <SkeletonTextual /> 
        </div>
        <Skeleton  className='rounded-lg'>
          <div className='h-40'></div>
        </Skeleton>
      </section>
    </div>
  )
}

export default LoadingState
