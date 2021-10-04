import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Radio, RadioProps } from '@material-ui/core';
import React from 'react';

/* eslint-disable-next-line */
export interface EnhancedRadioProps extends BoxProps {
  active: boolean;
  onChange?: (...args: unknown[]) => void;
  children?: JSX.Element;
}

export function EnhancedRadio({
  sx,
  active,
  children: content,
  ...rest
}: EnhancedRadioProps) {
  const styleMemo = React.useMemo(() => styles(active), [active]);

  return (
    <Box sx={{ ...styleMemo.root, ...sx }} {...rest}>
      <Box sx={styleMemo.container}>
        <Box sx={styleMemo.grid}>
          <Radio checked={active} size="small" sx={styleMemo.radioButton} />
          <Box sx={styleMemo.content}>{content}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EnhancedRadio;

const styles = (active?: boolean) =>
  AtlasStylesheet.create({
    root: {
      fontSize: '10px',
    },

    grid: {
      display: 'grid',
      width: '100%',
      height: '100%',
      gridTemplateColumns: { xs: '25% 75%', lg: '7.5% 92.5%' },
    },

    content: {
      overflow: 'hidden',
      width: '100%',
      height: '100%',
    },

    radioButton: {
      alignSelf: 'center',
      justifySelf: 'center',
    },

    container: {
      width: { xs: '30em', lg: 'auto' },
      height: { xs: '15em', lg: '11em' },
      borderRadius: '8px',
      border: (theme) => `1px solid ${theme.palette.grey[500]}`,
      transition: 'opacity 0.5s ease',
      position: 'relative',

      ':before': {
        transition: 'all 0.3s ease',
        position: 'absolute',
        content: `""`,
        top: 0,
        left: 0,
        width: { xs: '30em', lg: '100%' },
        height: { xs: '15em', lg: '11em' },
        borderRadius: '8px',
        border: (theme) => `2px solid ${theme.palette.primary.main}`,
        opacity: active ? 1 : 0,
      },
    },
  });
