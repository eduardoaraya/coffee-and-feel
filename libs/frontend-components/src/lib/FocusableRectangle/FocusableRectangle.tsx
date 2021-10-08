import {
  AtlasJSSShallow,
  AtlasStylesheet,
} from '@atlascode/coffee-shared-helpers';
import { Box } from '@material-ui/core';
import React from 'react';
import _ from 'lodash';
/* eslint-disable-next-line */
export interface FocusableRectangleProps {
  JSS?: AtlasJSSShallow<ReturnType<typeof stylesheet>>;
  active?: boolean;
  children?: React.ReactNode;
}

export function FocusableRectangle({
  JSS,
  active,
  children,
}: FocusableRectangleProps) {
  const styles = React.useMemo(
    () => _.merge(stylesheet(active, children ? false : true), JSS),
    [JSS, active, children]
  );

  return <Box sx={styles.root}>{children}</Box>;
}

export default FocusableRectangle;

const stylesheet = (active?: boolean, empty?: boolean) =>
  AtlasStylesheet.create({
    root: {
      fontSize: '10px',
      width: 'auto',
      height: 'auto',
      borderRadius: '8px',
      border: (theme) => `1px solid ${theme.palette.grey[500]}`,
      transition: 'opacity 0.5s ease',
      position: 'relative',

      ...(empty && { minWidth: '30em', minHeight: '20em' }),

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
  });
