import { Box, Button, Container, Typography } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import Image from 'next/image';
import style from './style';

export interface LastPostsSectionProps {
  posts?: {
    id: number;
    title: string;
    readingTime: string;
    tags: string[];
  }[];
}

const defaultPostData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    readingTime: '10m',
    tags: ['Drinks'],
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    readingTime: '10m',
    tags: ['Drinks', 'Content'],
  },
  {
    id: 3,
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
                Acomanhe as postagens sobre o mundo do café
              </Typography>
              <Button
                size="large"
                className="btn-more-post"
                variant="contained"
                color="primary"
              >
                Ver mais postagens
              </Button>
            </Box>
          </Box>
          <Box className="post-list">
            {posts?.map((item) => (
              <Box className="post-item" key={item.id}>
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
                  {item.tags.map((tag, tagKey) => (
                    <Typography
                      key={tagKey}
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
          <Button
            size="medium"
            className="btn-more-post-mobile"
            variant="contained"
            color="primary"
          >
            Ver mais postagens
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LastPostsSection;
