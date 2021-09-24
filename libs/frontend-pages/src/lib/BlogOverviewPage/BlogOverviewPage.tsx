import { Box, BoxProps, Container, Button } from '@material-ui/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  BlogPreviewCategorySelectProps,
  BlogPreviewCategorySelect,
} from './BlogPreviewCategorySelect';
import {
  BlogPostCard,
  BlogPostCardProps,
} from '@atlascode/coffee-front-components';
import { useLoadMore } from '@atlascode/coffee-frontend-react-hooks';
import { MotionBox } from '@atlascode/coffee-frontend-utility';
import { AnimatePresence } from 'framer-motion';

/* eslint-disable-next-line */
export interface BlogOverviewPageProps extends BoxProps {
  posts?: BlogPostCardProps[];
  selectProps?: BlogPreviewCategorySelectProps;
}

const MOCK_LIST = Array.from({ length: 23 });

export function BlogOverviewPage({
  sx,
  posts = [],
  selectProps,
  ...rest
}: BlogOverviewPageProps) {
  const { fullData, loadMore, fullyLoaded, visible } = useLoadMore(posts, 6);

  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Container maxWidth="lg">
        <Box sx={styles.container}>
          <Box sx={styles.selectContainer}>
            <BlogPreviewCategorySelect {...selectProps} />
          </Box>

          <Box sx={styles.grid}>
            <AnimatePresence>
              {visible.map((value, index) => {
                return (
                  <MotionBox
                    variants={{
                      hidden: { opacity: 0, y: 250 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    key={index}
                  >
                    <BlogPostCard {...value} />
                  </MotionBox>
                );
              })}
            </AnimatePresence>
          </Box>
        </Box>

        <Box sx={styles.buttonContainer}>
          <Button
            onClick={loadMore}
            variant="outlined"
            color="primary"
            disabled={fullyLoaded}
          >
            {fullyLoaded ? 'Não há mais posts' : 'Carregar mais'}
          </Button>
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

  buttonContainer: {
    py: { xs: 10 },
    display: 'flex',
    justifyContent: 'center',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '33.333% 33.333% 33.333%' },
    gridAutoFlow: 'row',
    justifyItems: { xs: 'center' },
    rowGap: { xs: '5.5em', lg: '10em' },
  },
});
