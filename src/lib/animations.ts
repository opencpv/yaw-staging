type Animate = {
  exit: any;
  enter: any;
};

export const RotateScale = {
  open: {
    scale: [1, 2, 2, 1, 0],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
  },
  closed: {
    scale: [0, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
  },
};
export const HideShow = {
  open: {
    opacity: 'flex',
  },
  closed: {
    display: 'none',
  },
};

export const ExpandCircle = {
  open: (d = window.screen.height >= window.screen.width ? window.screen.height : window.screen.width
    ) => ({
    clipPath: `circle(${d  + 300}px at right top)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
      duration: '5.5',
    },
  }),
  closed: {
    clipPath: 'circle(0px at right top)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
      duration: '5000ms',
    },
  },
};
export const FadeInOut = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      ease: 'linear',
      duration: '1',
    },
    transitionEnd: {
      display: 'flex',
    },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      ease: 'linear',
      duration: '1',
    },
    transitionEnd: {
      display: 'none',
    },
  },
};
