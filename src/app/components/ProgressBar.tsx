import React from 'react';
import * as Progress from '@radix-ui/react-progress';

const ProgressBar = ({value}: {value: number}) => {
  const [progress, setProgress] = React.useState(1)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Progress.Root
      className="relative overflow-hidden bg-[#FEF8ED] w rounded-full w-full h-[16px]"
      style={{
        transform: 'translateZ(0)',
      }}
      value={progress}
    >
      <Progress.Indicator
        className=" w-full bg-warning-400 h-full transition-transform duration-[5000ms] ease-[cubic-bezier(0.65, 0, 0.35, 0)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressBar;