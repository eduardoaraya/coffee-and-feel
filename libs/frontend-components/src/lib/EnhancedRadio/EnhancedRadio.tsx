import {
  AtlasStylesheet,
  AtlasJSSShallow,
} from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Radio } from '@material-ui/core';
import React from 'react';
import _ from 'lodash';

/* eslint-disable-next-line */
export interface EnhancedRadioProps extends BoxProps {
  active: boolean;
  onChange?: (...args: unknown[]) => void;
  children?: JSX.Element;
  JSS?: AtlasJSSShallow<ReturnType<typeof styles>>;
}

export function EnhancedRadio({
  sx,
  active,
  children: content,
  JSS,
  ...rest
}: EnhancedRadioProps) {
  const styleMemo = React.useMemo(
    () => _.merge(styles(active), JSS),
    [active, JSS]
  );

  return (
    <Box sx={styleMemo.root} {...rest}>
      <Box sx={styleMemo.grid}>
        <Radio checked={active} sx={styleMemo.radioButton} />
        <Box sx={styleMemo.content}>{content}</Box>
      </Box>
    </Box>
  );
}

export default EnhancedRadio;

const styles = (active = false) =>
  AtlasStylesheet.create({
    root: {
      fontSize: '10px',
      width: { xs: '30em', lg: 'auto' },
      height: 'auto',
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
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        border: (theme) => `2px solid ${theme.palette.primary.main}`,
        opacity: active ? 1 : 0,
      },
    },

    grid: {
      display: 'grid',
      width: '100%',
      height: '100%',
      gridTemplateColumns: { xs: '25% 75%', lg: '7.5% 92.5%' },
      alignContent: 'center',
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

    container: {},
  });
