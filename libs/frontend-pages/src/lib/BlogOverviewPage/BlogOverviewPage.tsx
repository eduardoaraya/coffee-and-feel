import { Box, BoxProps, Container } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import BlogPreviewCategorySelect from './BlogPreviewCategorySelect';
import { BlogPostCard } from '@atlascode/coffee-front-components';

/* eslint-disable-next-line */
export interface BlogOverviewPageProps extends BoxProps {}

export function BlogOverviewPage({ sx, ...rest }: BlogOverviewPageProps) {
  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Container maxWidth="lg">
        <Box sx={styles.container}>
          <Box sx={styles.selectContainer}>
            <BlogPreviewCategorySelect />
          </Box>

          <Box sx={styles.grid}>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <BlogPostCard
                  key={index}
                  readingTime={3}
                  src={'https://via.placeholder.com/1500'}
                  title="Placeholder"
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default BlogOverviewPage;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 10 },
  },

  selectContainer: {
    mt: { xs: 10 },
    display: 'flex',
    justifyContent: 'center',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '33.333% 33.333% 33.333%' },
    gridAutoFlow: 'row',
    justifyItems: { xs: 'center' },
    rowGap: { xs: '3.5em', lg: '10em' },
  },
});
