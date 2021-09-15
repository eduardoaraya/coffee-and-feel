import React from 'react';
import {
  Box,
  Typography,
  Theme,
  BoxProps,
  TypographyProps,
} from '@material-ui/core';
import { AccessTimeFilled } from '@material-ui/icons';
import { useReadingTime } from './useReadingTime';
import { SxProps } from '@material-ui/system';
import _ from 'lodash';

/* eslint-disable-next-line */
export interface ReadingTimeProps {
  icon: React.FC<unknown>;
  time: boolean | number;
  ContainerProps?: BoxProps;
  IconProps?: BoxProps;
  TypographyProps?: TypographyProps;
  content?: string;
}

const defaultStyles = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '10px',
  gap: 1.2,

  '.Atlas-readingTime-typography': {
    fontSize: '1em',
  },

  '.Atlas-readingTime-icon': {
    fontSize: '2em',
  },
} as SxProps<Theme>;

export function ReadingTime({
  icon: Icon = AccessTimeFilled,
  time = 3,
  ContainerProps,
  IconProps,
  TypographyProps,
  content,
}: ReadingTimeProps) {
  const readingTime = useReadingTime(time, content);

  const defaultStylesMemo = React.useMemo(
    () => _.merge(defaultStyles, ContainerProps?.sx || {}),
    [ContainerProps?.sx]
  );

  return (
    <Box sx={defaultStylesMemo}>
      <Box className="Atlas-readingTime-icon" {...IconProps} component={Icon} />
      <Typography
        id="Atlas-readingTime-typography"
        variant="subtitle2"
        {...TypographyProps}
      >
        {`${readingTime} minuto${readingTime > 1 ? 's' : ''} de leitura`}
      </Typography>
    </Box>
  );
}

export default ReadingTime;
