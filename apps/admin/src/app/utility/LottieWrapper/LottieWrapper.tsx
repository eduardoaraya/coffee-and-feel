import React from "react";
import lottie from "lottie-web";
import { Box } from "@material-ui/core";
import _, { isUndefined } from "lodash";
import { ResponsiveStyleValue } from "@material-ui/system";
import { Property } from "csstype";

export interface ILottieAnimation {
  animationData: unknown;
  width?: ResponsiveStyleValue<Property.Width<string | number>>;
  height?: ResponsiveStyleValue<Property.Width<string | number>>;
  loop?: boolean;
  autoplay?: boolean;
  preserveAspectRatio?: boolean;
  stopped?: boolean;
  paused?: boolean;
}

export type LottieAnimationItem = ReturnType<typeof lottie.loadAnimation>;

const LottieAnimation = ({
  animationData,
  height = 300,
  width = 300,
  autoplay = true,
  loop = true,
  paused = false,
  preserveAspectRatio = true,
  stopped = false,
}: ILottieAnimation) => {
  const containerRef = React.useRef(null);
  const animationRef = React.useRef<LottieAnimationItem>();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current as never,
        animationData: animationData,
        autoplay: autoplay,
        loop: loop,
        rendererSettings: {
          preserveAspectRatio: preserveAspectRatio
            ? "xMidYMid slice"
            : undefined,
        },
      });
    }

    return () =>
      isUndefined(animationRef.current?.destroy())
        ? _.noop()
        : animationRef.current?.destroy();
  }, []);

  React.useEffect(() => {
    const animationRefCurrent = animationRef.current;

    if (animationRefCurrent && animationRefCurrent.autoplay) {
      animationRefCurrent.autoplay = autoplay;
    }

    if (animationRefCurrent && animationRefCurrent.loop) {
      animationRefCurrent.loop = loop;
    }

    if (stopped) {
      animationRef.current?.stop();
    } else if (paused) {
      animationRef.current?.pause();
    } else {
      animationRef.current?.play();
    }
  }, [paused, stopped, autoplay, loop]);

  return <Box sx={{ width: width, height: height }} ref={containerRef} />;
};

export default LottieAnimation;
