import { ReadingTime, ReadingTimeProps } from '../ReadingTime/ReadingTime';
import { Box, BoxProps, Chip, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { SxProps } from '@material-ui/system';
import _ from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogPostInfoProps {
  title?: string;
  tags?: string[];
  ContainerProps?: BoxProps;
  ReadingTimeProps?: ReadingTimeProps;
}

const BlogPostInfo = ({
  ReadingTimeProps = { time: 1 },
  tags = ['Marketing', 'Publicidade', 'Informativo'],
  title = 'Placeholder title, this is it.',
  ContainerProps,
}: BlogPostInfoProps) => {
  const defaultStylesMemo = React.useMemo(
    () => _.merge(defaultStyles(), ContainerProps?.sx ?? {}),
    [ContainerProps?.sx]
  );

  return (
    <Box {...{ ContainerProps, sx: defaultStylesMemo }}>
      <ReadingTime {...ReadingTimeProps} />

      <Typography className="Atlascode-blogPostInfo-title" variant="caption">
        {title}
      </Typography>

      <Box className="Atlascode-blogPostInfo-tagsContainer">
        {tags.map((value, index) => {
          return (
            <Chip
              className="Atlascode-blogPostInfo-tagsChip"
              label={value}
              key={index}
              color="primary"
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default BlogPostInfo;

const defaultStyles = () => {
  return {
    width: '100%',
    height: '100%',
    fontSize: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,

    '.Atlascode-blogPostInfo-tagsContainer': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 2,

      '.Atlascode-blogPostInfo-tagsChip': {
        fontSize: '1.2em',
        padding: '1em',
      },
    },

    '.Atlascode-blogPostInfo-title': {},
  } as SxProps<Theme>;
};
