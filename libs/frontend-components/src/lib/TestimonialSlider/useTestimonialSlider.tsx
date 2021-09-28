import { Testimonial as TestimonialSliderItem } from './TestimonialSlider';
import React from 'react';

export function useTestimonialSlider(testimonialList: TestimonialSliderItem[]) {
  const [testimonials, setTestimonials] = React.useState<
    TestimonialSliderItem[]
  >([]);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [activeTestimonial, setActiveTestimonial] =
    React.useState<TestimonialSliderItem>();

  React.useEffect(() => {
    setTestimonials(testimonialList);
  }, [testimonialList]);

  React.useEffect(() => {
    setActiveTestimonial(testimonials[activeIndex]);
  }, [activeIndex, testimonials]);

  const forwardCallback = () => {
    if (activeIndex !== testimonials.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const backwardsCallback = () => {
    if (activeIndex !== 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    } else {
      setActiveIndex(testimonials.length - 1);
    }
  };

  return {
    activeTestimonial: activeTestimonial,
    forward: forwardCallback,
    backwards: backwardsCallback,
    activeIndex: activeIndex,
  };
}
