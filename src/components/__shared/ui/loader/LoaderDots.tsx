import React from 'react'

type Props = {}

const LoaderDots = (props: Props) => {
  return (
   <>
    <span className="text-xl font-[700] animate-bounce" style={{animationDelay: "0.2s"}}>.</span>
    <span className="text-xl font-[700] animate-bounce" style={{animationDelay: "0.3s"}}>.</span>
    <span className="text-xl font-[700] animate-bounce" style={{animationDelay: "0.4s"}}>.</span>
   </>
  )
}

export default LoaderDots