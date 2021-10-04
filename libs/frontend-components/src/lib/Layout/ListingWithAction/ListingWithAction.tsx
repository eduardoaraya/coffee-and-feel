import { SxProps, Theme } from '@material-ui/system';
import { Box, IconButton, Typography } from '@material-ui/core';
import { Component } from 'react';

export type ListingWithActionItemType = {
  label: string;
  leftSide?: JSX.Element;
  rightSide?: JSX.Element;
  actions: Array<{ icon: JSX.Element; onClick: () => void }>;
  active: boolean;
  id: number;
};

export interface ListingWithActionProps {
  data: ListingWithActionItemType[];
  className?: string;
  emptyListMessage?: string;
}

export const ListingWithAction: React.FC<ListingWithActionProps> = ({
  data,
  className,
  emptyListMessage,
}): JSX.Element => {
  return (
    <Box sx={getDefaultStyle()} className={`listing-with-actions ${className}`}>
      {data.length ? (
        data.map(
          ({
            label,
            actions,
            leftSide,
            rightSide,
            active,
            id,
          }: ListingWithActionItemType) => (
            <Box key={id} className={`item ${active ? 'active' : 'inactive'}`}>
              {leftSide}
              <Box className="label">
                <Typography>{label}</Typography>
              </Box>
              {rightSide}
              <Box className="item-actions">
                {actions.map((item) => (
                  <IconButton onClick={item.onClick}>{item.icon}</IconButton>
                ))}
              </Box>
            </Box>
          )
        )
      ) : (
        <Box className="empty-list-message">
          <Typography>{emptyListMessage}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ListingWithAction;

const getDefaultStyle = () =>
  ({
    '&.listing-with-actions': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '30px',

      '.empty-list-message': {},
      '.item': {
        WebkitTapHighlightColor: 'transparent',
        cursor: 'pointer',
        transition: '.3s',
        width: '100%',
        '.label': {
          width: '100%',
          flex: 1,
          padding: '0 20px',
        },
        marginBottom: '26px',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '2px 2px 5px -1px rgba(52, 52, 52, 0.12)',
        border: '2px solid transparent',
        '&.active, &:active': {
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
        },
        '.item-actions': {
          marginLeft: '15px',
        },
      },
    },
  } as SxProps<Theme>);
