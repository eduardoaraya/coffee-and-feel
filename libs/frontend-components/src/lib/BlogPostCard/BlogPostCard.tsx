import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import { AccessTime } from '@material-ui/icons';
/* eslint-disable-next-line */
export interface BlogPostCardProps {
  tags: string[];
  readingTime: number;
  title: string;
}

export const BlogPostCard = React.forwardRef(
  (
    {
      tags = ['Marketing', 'Publicidade', 'Informativo'],
      readingTime,
      title,
    }: BlogPostCardProps,
    ref: React.Ref<HTMLElement>
  ) => {
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr',
        }}
      ></Box>
    );
  }
);

export default BlogPostCard;
