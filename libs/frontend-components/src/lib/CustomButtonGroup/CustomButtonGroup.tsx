import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  ButtonProps,
} from '@material-ui/core';
import { darken, alpha } from '@material-ui/system';

/* eslint-disable-next-line */
export interface CustomButtonGroupProps extends BoxProps<typeof ButtonGroup> {
  buttons?: ButtonProps[];
  value?: number;
}

export function CustomButtonGroup({
  sx,
  component = ButtonGroup,
  buttons = [],
  value = 0,
  ...rest
}: CustomButtonGroupProps) {
  return (
    <Box
      color="primary"
      variant="contained"
      sx={{ ...styles.root, ...sx }}
      {...rest}
      component={component}
    >
      {buttons.map(({ sx: buttonSx, ...rest }, index) => {
        return (
          <Button
            sx={{ ...styles.button(index === value), ...buttonSx }}
            {...rest}
            key={index}
          />
        );
      })}
    </Box>
  );
}

export default CustomButtonGroup;

const styles = AtlasStylesheet.create({
  root: {
    flexWrap: 'wrap',
    borderColor: { xs: 'none' },
    fontSize: '10px',
  },

  button: (active = false) => {
    return {
      bgcolor: (theme) => (active ? theme.palette.primary.main : '#fff'),
      color: (theme) => (active ? theme.palette.primary.contrastText : '#333'),
      fontWeight: 500,
      border: '1px solid transparent',
      textTransform: 'inherit',
      borderColor: { xs: 'none', sm: 'none', md: 'none' },
      boxShadow: active
        ? '2px 2px 5px 1px rgba(52, 52, 52, 0.5)'
        : '2px 2px 5px 1px rgba(52, 52, 52, 0.2)',
      fontSize: { xs: '1.2em' },

      ':hover': {
        bgcolor: (theme) =>
          !active
            ? alpha(theme.palette.primary.light, 0.1)
            : theme.palette.primary.dark,
      },
    };
  },
});
