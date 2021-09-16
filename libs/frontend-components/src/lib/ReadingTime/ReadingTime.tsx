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
import { SxProps, ResponsiveStyleValue } from '@material-ui/system';
import _ from 'lodash';
import { Property } from 'csstype';

export interface ReadingTimeProps {
  time: boolean | number;
  ContainerProps?: BoxProps;
  icon?: React.FC<unknown>;
  IconProps?: BoxProps;
  TypographyProps?: TypographyProps;
  content?: string;
  fontSize?: ResponsiveStyleValue<Property.FontSize>;
}

export function ReadingTime({
  icon: Icon = AccessTimeFilled,
  time = 3,
  ContainerProps,
  IconProps,
  TypographyProps,
  content,
  fontSize,
}: ReadingTimeProps) {
  const readingTime = useReadingTime(time, content);

  const defaultStylesMemo = React.useMemo(
    () => _.merge(defaultStyles(fontSize), ContainerProps?.sx || {}),
    [ContainerProps?.sx, fontSize]
  );

  return (
    <Box sx={defaultStylesMemo}>
      <Box className="Atlas-readingTime-icon" {...IconProps} component={Icon} />
      <Typography
        className="Atlas-readingTime-typography"
        variant="subtitle2"
        {...TypographyProps}
      >
        {`${readingTime} minuto${readingTime > 1 ? 's' : ''} de leitura`}
      </Typography>
    </Box>
  );
}

export default ReadingTime;

const defaultStyles = (
  fontSize: ResponsiveStyleValue<Property.FontSize> = '10px'
) => {
  return {
    display: 'flex',
    alignItems: 'center',
    fontSize: fontSize,
    gap: 1.2,

    '.Atlas-readingTime-typography': {
      fontSize: '1.5em',
    },

    '.Atlas-readingTime-icon': {
      fontSize: '2em',
    },
  } as SxProps<Theme>;
};
