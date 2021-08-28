import React from "react";
import { AnimatePresence } from "framer-motion";
import MotionBox, { MotionBoxProps } from "../../utility/MotionBox/MotionBox";

export interface FadeProps extends MotionBoxProps {
  animate?: boolean;
  animateOnExit?: boolean;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>((props, ref) => {
  return props.animateOnExit ? (
    <AnimatePresence>
      {props.animate && props.animateOnExit && (
        <MotionBox
          key="fade"
          initial="open"
          exit="closed"
          ref={ref}
          animate={"open"}
          variants={{
            open: {
              opacity: 1,
            },
            closed: {
              opacity: 0,
            },
          }}
          transitionPreset="stiff"
          {...props}
        />
      )}
    </AnimatePresence>
  ) : (
    <MotionBox
      ref={ref}
      animate={props.animate ? "open" : "closed"}
      variants={{
        open: {
          opacity: 1,
        },
        closed: {
          opacity: 0,
        },
      }}
      transitionPreset="stiff"
      {...props}
    />
  );
});

export default Fade;
