import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MotionBox, MotionBoxProps } from '@atlascode/coffee-frontend-utility';

const sentenceVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const letterVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const TextRevealAnimation = ({
  text,
  letterStyle,
  sentenceStyle,
  animationCompleteCallback,
  triggerOnView,
  triggerOnce,
  threshold,
  staggerDelay = 0.08,
  splitMethod = 'word',
  ...props
}: {
  text: string;
  animationCompleteCallback?: (...args: unknown[]) => void;
  sentenceStyle?: MotionBoxProps['sx'];
  letterStyle?: MotionBoxProps['sx'];
  triggerOnView?: boolean;
  triggerOnce?: boolean;
  staggerDelay?: number;
  threshold?: number;
  splitMethod?: 'word' | 'letter';
}) => {
  return (
    <MotionBox
      component="div"
      onAnimationComplete={animationCompleteCallback}
      sx={sentenceStyle}
      variants={sentenceVariant}
      initial="hidden"
      animate="visible"
    >
      {text
        .split(splitMethod === 'word' ? /(\s+)/ : '')
        .map((letter: string, index: number) => {
          return (
            <MotionBox
              component="span"
              sx={letterStyle}
              key={letter + '-' + index}
              variants={letterVariant}
            >
              {letter}
            </MotionBox>
          );
        })}
    </MotionBox>
  );
};

export default TextRevealAnimation;
