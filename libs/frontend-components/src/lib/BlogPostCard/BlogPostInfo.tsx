import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BlogPostInfo {
  readingTime: boolean | number;
  title: string;
  tags: string[];
}

const BlogPostInfo = (props: BlogPostInfo) => {
  return <div></div>;
};

export default BlogPostInfo;
