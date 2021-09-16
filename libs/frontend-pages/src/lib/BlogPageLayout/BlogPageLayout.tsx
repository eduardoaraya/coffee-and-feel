/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { alpha, Box, Container, Stack } from '@material-ui/core';
import { Facebook, Instagram, WhatsApp, LockClock } from '@material-ui/icons';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence } from 'framer-motion';
import { MotionBox } from '@atlascode/coffee-frontend-utility';
import { ReadingTime } from '@atlascode/coffee-front-components';
import { SocialMediaShareTray } from './SocialMediaShareTray';

interface SocialMediaRef {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface BlogPost {
  title?: string;
  readingTime: boolean | number;
  featuredImage?: string;
  date?: string | Date;
  tags?: string[];
  content?: string;
}

/* eslint-disable-next-line */
export interface BlogPageLayoutProps extends BlogPost {
  socials?: Partial<SocialMediaRef>;
  latestPosts?: BlogPost[];
}

export function BlogPageLayout({
  readingTime,
  date,
  featuredImage,
  latestPosts,
  socials,
  tags,
  title,
  content = '',
}: BlogPageLayoutProps) {
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
  });

  console.log(featuredImage);

  return (
    <Box
      id="Atlas-BlogLayoutV1-root"
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        fontFamily: 'inherit',
        position: 'relative',
        textRendering: 'optimizeLegibility',
        fontSmooth: 'always',
        fontSize: '1rem',
      }}
    >
      <Box sx={{ position: 'fixed', right: 0, top: '10%' }}>
        <AnimatePresence>
          {!inView && (
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
      <Box sx={{ width: '100%' }} id="Atlas-BlogLayoutV1-container">
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            px: '20px',
          }}
          id="Atlas-BlogLayoutV1-header"
        >
          <Stack
            id="Atlas-BlogLayoutV1-headerInnerContainer"
            sx={{ gap: '10px' }}
            direction="column"
          >
            <Box
              component="h1"
              sx={{
                m: 0,
                p: 0,
                fontWeight: 600,
                fontSize: { xs: '3.5vh', lg: '5vh' },
                textTransform: 'capitalize',
              }}
              id="Atlas-BlogLayoutV1-title"
            >
              {title}
            </Box>
            <ReadingTime time={true} content={content} />
          </Stack>
        </Box>

        <Container
          id="Atlas-BlogLayoutV1-featuredImage-container"
          maxWidth="md"
          sx={{ p: 0, my: '3.5em' }}
          ref={ref}
        >
          <Box
            component="figure"
            sx={{
              width: '100%',
              height: 'auto',
              position: 'relative',
              m: 0,
              p: 0,
            }}
            id="Atlas-BlogLayoutV1-featuredImage-figure"
          >
            <Box
              id="Atlas-BlogLayoutV1-featuredImage"
              src={featuredImage}
              component="img"
              sx={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Container>

        <Container
          sx={{
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
          }}
          id="Atlas-BlogLayoutV1-contentContainer"
        >
          <Box
            id="Atlas-BlogLayoutV1-content"
            sx={{ width: '100%' }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Container>
        {latestPosts && latestPosts.length > 0 && (
          <Box
            sx={{
              width: '100%',
              bgcolor: (theme) => alpha(theme.palette.primary.light, 0.05),
              py: { xs: '45px', lg: '55px' },
              mt: { xs: '45px', lg: '55px' },
            }}
            id="Atlas-BlogLayoutV1-latestBlogs-container"
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                color: (theme) => theme.palette.primary.main,
                mx: 0,
                px: 0,
                pb: { xs: '45px', lg: '55px' },
                fontWeight: 600,
                fontSize: { xs: '2.5vh', lg: '4vh' },
                textTransform: 'capitalize',
              }}
              id="Atlas-BlogLayoutV1-latestBlogs-containerTitle"
            >
              Últimos posts
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default BlogPageLayout;
