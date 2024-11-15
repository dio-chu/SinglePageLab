export const initial = {
  fromLeft: { x: -100, opacity: 0 },
  fromRight: { x: 100, opacity: 0 },
  fromBottom: { y: 50, opacity: 0 },
  fade: { opacity: 0 },
};

export const animate = {
  visible: { x: 0, y: 0, opacity: 1 },
  pulse: { scale: [1, 1.1, 1] },
  bounce: { y: [0, -20, 0] },
  rotate: { rotate: [0, 360] },
};

export const transition = {
  smooth: { type: "tween", ease: "easeOut", duration: 0.5 },
  spring: { type: "spring", stiffness: 100, damping: 10 },
  bounce: { type: "spring", stiffness: 300, damping: 15 },
  elastic: { type: "spring", stiffness: 200, damping: 5 },
};

export const fadeIn = {
  initial: initial.fade,
  animate: animate.visible,
  transition: transition.smooth,
};

export const slideFromLeft = {
  initial: initial.fromLeft,
  animate: animate.visible,
  transition: transition.spring,
};
