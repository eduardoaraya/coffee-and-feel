import React from 'react';
import { TextField, MenuItem, TextFieldProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';

export type BlogPreviewCategorySelectProps = TextFieldProps & {
  options?: string[];
};

export const BlogPreviewCategorySelect = ({
  sx,
  options = ['Todos', 'Marketing', 'Desenvolvimento', 'Outros'],
  ...rest
}: BlogPreviewCategorySelectProps) => {
  return (
    <TextField
      label="Categoria"
      select
      sx={{ ...sx, ...styles.root }}
      {...rest}
    >
      {options.map((value, index) => {
        return (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default BlogPreviewCategorySelect;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    minWidth: { xs: '25em' },
  },
});
