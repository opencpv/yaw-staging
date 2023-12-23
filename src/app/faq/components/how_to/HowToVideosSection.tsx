import React from 'react'
import HowToVideo from './HowToVideo'

type Props = {}

const HowToVideosSection = (props: Props) => {
  return (
    <div className="space-y-8">
    <h2>Lorem ipsum dolor sit amet</h2>
    <div
      className="grid gap-x-5 gap-y-10"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px,1fr))" }}
    >
    {[1,2,3,4,5,6].map((_, idx) => (
      <HowToVideo key={idx+1} />
    ))}
    </div>
  </div>
  )
}

export default HowToVideosSection