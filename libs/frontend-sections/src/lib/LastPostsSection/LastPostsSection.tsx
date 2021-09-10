import { Box, Button, Container, Typography } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import Image from 'next/image';
import style from './style';

export interface LastPostsSectionProps {
  posts?: {
    title: string;
    readingTime: string;
    tags: string[];
  }[];
}

const defaultPostData = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    readingTime: '10m',
    tags: ['Drinks'],
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    readingTime: '10m',
    tags: ['Drinks', 'Content'],
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    readingTime: '10m',
    tags: ['Drinks'],
  },
] as LastPostsSectionProps['posts'];

export const LastPostsSection: React.FC<LastPostsSectionProps> = ({
  posts = defaultPostData,
}): JSX.Element => {
  return (
    <Box component="section" sx={style.root}>
      <Container>
        <Box className="section-wrapper">
          <Box className="section-cat">
            <Box className="section-cat-content">
              <Typography variant="h1">
                Acompanhe nossas postagens sobre a comunidade barista
              </Typography>
              <Button size="large" variant="contained" color="primary">
                Ver mais postagens
              </Button>
            </Box>
          </Box>
          <Box className="post-list">
            {posts?.map((item) => (
              <Box className="post-item">
                <figure className="post-image">
                  <Image src="/imgs/coffee.png" alt="" layout="fill" />
                </figure>
                <Box className="post-info">
                  <Typography
                    className="post-info-time"
                    variant="body2"
                    component="span"
                  >
                    <AccessTime />
                    {item.readingTime} de leitura
                  </Typography>
                  <Typography
                    className="post-info-title"
                    variant="body1"
                    component="h3"
                  >
                    {item.title}
                  </Typography>
                  {item.tags.map((tag) => (
                    <Typography
                      className="post-info-tag"
                      variant="body2"
                      component="span"
                    >
                      #{tag}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LastPostsSection;
