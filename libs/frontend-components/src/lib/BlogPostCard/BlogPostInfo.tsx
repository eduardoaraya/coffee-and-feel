import { ReadingTime, ReadingTimeProps } from '../ReadingTime/ReadingTime';
import { Box, BoxProps, Chip, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { SxProps } from '@material-ui/system';
import _ from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogPostInfoProps extends BoxProps {
  title?: string;
  tags?: string[];
  readingTime?: ReadingTimeProps['time'] | 'hidden';
  content?: ReadingTimeProps['content'];
  ReadingTimeProps?: ReadingTimeProps;
}

const BlogPostInfo = ({
  ReadingTimeProps,
  tags = ['Marketing', 'Publicidade', 'Informativo'],
  title = 'Placeholder title, this is it.',
  readingTime = 2,
  sx,
  content,
  ...rest
}: BlogPostInfoProps) => {
  const defaultStylesMemo = React.useMemo(
    () => _.merge(defaultStyles(), sx ?? {}),
    [sx]
  );

  return (
    <Box {...{ rest, sx: defaultStylesMemo }}>
      {readingTime && readingTime !== 'hidden' && (
        <ReadingTime
          content={content}
          time={readingTime}
          {...ReadingTimeProps}
        />
      )}

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
    maxWidth: '25em',
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
