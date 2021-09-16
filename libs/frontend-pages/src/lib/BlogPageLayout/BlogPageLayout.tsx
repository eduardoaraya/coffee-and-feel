/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { Box, BoxProps, Container, Stack, Theme } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence } from 'framer-motion';
import { MotionBox } from '@atlascode/coffee-frontend-utility';
import {
  BlogPostCardProps,
  ReadingTime,
} from '@atlascode/coffee-front-components';
import { SocialMediaShareTray } from './SocialMediaShareTray';
import { polkaPattern } from '@atlascode/coffee-frontend-mixins';
import { SxProps } from '@material-ui/system';
import { useMemoizedMergedObject } from '@atlascode/coffee-frontend-hooks';
import LastPosts from './LastPosts';

/* eslint-disable-next-line */
export interface BlogPageLayoutProps extends BoxProps {
  latestPosts?: BlogPostCardProps[];
  content?: string;
  title?: string;
  featuredImage?: string;
}

export function BlogPageLayout({
  latestPosts = [],
  content = '',
  featuredImage = 'https://via.placeholder.com/1500',
  title = 'Placeholder title',
  sx,
  ...rest
}: BlogPageLayoutProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const { ref: postsRef, inView: postsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box id="Atlas-BlogLayoutV1-root" sx={defaultStylesMemo}>
      <Box className="Atlas-BlogLayoutV1-pattern" />
      <Box className="Atlas-BlogLayoutV1-fixedSocialMediaTrayContainer">
        <AnimatePresence>
          {!inView && !postsInView && (
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SocialMediaShareTray />
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
      <Box className="Atlas-BlogLayoutV1-container">
        <Box className="Atlas-BlogLayoutV1-header">
          <Stack
            className="Atlas-BlogLayoutV1-headerInnerContainer"
            direction="column"
          >
            <Box component="h1" className="Atlas-BlogLayoutV1-title">
              {title}
            </Box>
            <ReadingTime time={true} content={content} />
          </Stack>
        </Box>

        <Container
          className="Atlas-BlogLayoutV1-featuredImage-container"
          maxWidth="md"
          ref={ref}
        >
          <Box
            component="figure"
            className="Atlas-BlogLayoutV1-featuredImage-figure"
          >
            <Box
              className="Atlas-BlogLayoutV1-featuredImage"
              src={featuredImage}
              component="img"
            />
          </Box>
        </Container>

        <Container className="Atlas-BlogLayoutV1-contentContainer">
          <Box
            className="Atlas-BlogLayoutV1-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Container>
      </Box>

      {latestPosts.length > 0 && (
        <Container
          ref={postsRef}
          className="Atlas-BlogLayoutV1-latestPosts-container"
          maxWidth="lg"
        >
          <LastPosts posts={latestPosts} />
        </Container>
      )}
    </Box>
  );
}

export default BlogPageLayout;

const defaultStyles = () => {
  return {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    fontFamily: 'inherit',
    position: 'relative',
    textRendering: 'optimizeLegibility',
    fontSmooth: 'always',
    fontSize: '1rem',

    '.Atlas-BlogLayoutV1-latestPosts-container': {},

    '.Atlas-BlogLayoutV1-pattern': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      ...(polkaPattern('#fff', 0.3, 25, '#333') as Record<string, unknown>),
      zIndex: -1,
    },

    '.Atlas-BlogLayoutV1-fixedSocialMediaTrayContainer': {
      position: 'fixed',
      right: 0,
      top: '10%',
      display: 'none',

      '@media (min-width: 1024px)': {
        display: 'unset',
      },
    },

    '.Atlas-BlogLayoutV1-content': {
      width: '100%',
    },

    '.Atlas-BlogLayoutV1-featuredImage': {
      maxWidth: '100%',
      width: '100%',
      height: 'auto',
    },

    '.Atlas-BlogLayoutV1-contentContainer': {
      mt: '3.5em',
      maxWidth: { sm: '680px' },
      px: '24px',
      position: 'relative',

      '*': {
        fontSize: 'clamp(16px, 18px, 30px)!important',
        wordBreak: 'break-word',
        wordWrap: 'break-word',
        letterSpacing: { xs: '-0.003px' },
        lineHeight: { xs: '42px' },
      },
    },

    '.Atlas-BlogLayoutV1-featuredImage-figure': {
      width: '100%',
      height: 'auto',
      position: 'relative',
      m: 0,
      p: 0,
    },

    '.Atlas-BlogLayoutV1-featuredImage-container': {
      p: 0,
      my: '3.5em',
    },

    '.Atlas-BlogLayoutV1-container': {
      width: '100%',
    },

    '.Atlas-BlogLayoutV1-headerInnerContainer': {
      gap: '10px',

      '.Atlas-BlogLayoutV1-title': {
        m: 0,
        p: 0,
        fontWeight: 600,
        fontSize: { xs: '3.5vh', lg: '5vh' },
        textTransform: 'capitalize',
      },
    },

    '.Atlas-BlogLayoutV1-header': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      px: '20px',
    },
  } as SxProps<Theme>;
};
