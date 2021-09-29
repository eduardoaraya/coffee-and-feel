import React from 'react';
import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import AccordionSingle, {
  AccordionSingleProps,
} from '../AccordionSingle/AccordionSingle';

export type AccordionGroupProps = BoxProps & {
  accordions: Array<
    AccordionSingleProps & {
      expanded?: boolean;
      handleChange?: (...args: unknown[]) => void;
    }
  >;
};

export const AccordionGroup = ({
  sx,
  accordions = [],
  ...rest
}: AccordionGroupProps) => {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      {accordions.map(
        (
          { title, caption, content, handleChange, expanded, ...props },
          index
        ) => {
          return (
            <AccordionSingle
              key={index}
              title={title}
              caption={caption}
              content={content}
              onChange={handleChange ? handleChange : undefined}
              expanded={expanded ? expanded : undefined}
              {...props}
            />
          );
        }
      )}
    </Box>
  );
};

const styles = AtlasStylesheet.create({
  root: {},
});
