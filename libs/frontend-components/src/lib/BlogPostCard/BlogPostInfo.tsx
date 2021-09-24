import { ReadingTime, ReadingTimeProps } from '../ReadingTime/ReadingTime';
import { Box, BoxProps, Chip, Typography } from '@material-ui/core';
import _ from 'lodash';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import Link from 'next/link';

export interface BlogPostInfoProps extends BoxProps {
  readingTime?: ReadingTimeProps['time'];
  title?: string;
  tags?: string[];
  content?: ReadingTimeProps['content'];
  timeHidden?: boolean;
  url?: string;
}

export const BlogPostInfo = ({
  sx,
  readingTime = 3,
  title = 'Placeholder Title',
  tags = ['Placeholder', 'Placeholder'],
  content,
  url = '/',
  ...rest
}: BlogPostInfoProps) => {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <ReadingTime time={readingTime} />

        <Link href={url}>
          <Box component="a" sx={styles.title}>
            {title}
          </Box>
        </Link>

        <Box sx={styles.tagsContainer}>
          {tags.map((value, index) => {
            return (
              <Chip
                sx={styles.tagChip}
                label={value}
                key={index}
                color="primary"
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPostInfo;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  container: {
    width: '100%',
    height: '100%',
    fontSize: '10px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '25em',
    gap: 2,
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
  },
  tagChip: {
    fontSize: { xs: '1.2em' },
    padding: { xs: '1em' },
  },
  title: {
    cursor: 'pointer',
    fontSize: { xs: '1.2em' },
  },
});
