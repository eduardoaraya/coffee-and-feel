import { alpha, Box } from '@material-ui/core';

export type TabOption = {
  id: number;
  content: string | React.FC;
  contentProps: {
    props: {
      children?: React.ReactNode;
    };
  };
  active: boolean;
  handleClick?: <T, A>(args?: unknown | A) => T | void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabGroupProps {
  className?: string;
  children?: React.ReactNode;
  tabs?: TabOption[];
}

export const TabGroup: React.FC<TabGroupProps> = ({
  className,
  tabs,
}): JSX.Element => {
  return (
    <Box
      className={`tab-group ${className}`}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        '.tab-group-wrapper': {
          borderRadius: '6px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          '.tab-item': {
            userSelect: 'none',
            background: '#FFF',
            '&.tab-item:nth-last-child(1)': {
              borderRadius: '0 6px 6px 0',
            },
            '&.tab-item:nth-child(1)': {
              borderRadius: '6px 0 0 6px',
            },
            transition: '.3s',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 10px',
            cursor: 'pointer',
            fontSize: {
              md: '0.96em',
              xs: '1em',
            },
            boxShadow: (theme) =>
              [
                `0 1px 3px 0 ${alpha(theme.palette.secondary.main, 0.16)}`,
                `inset 0.3px 0.3px 1px 0px ${theme.palette.primary.main}`,
                `inset -0.3px -0.3px 1px 0px ${theme.palette.primary.main}`,
              ].join(','),
            '&.active': {
              background: (theme) => theme.palette.primary.main,
              color: '#FFF',
              svg: {
                color: '#FFF',
              },
            },
          },
        },
      }}
    >
      <Box className="tab-group-wrapper">
        {tabs?.map((tab) => (
          <Box
            onClick={tab?.handleClick}
            className={`tab-item ${tab.active ? 'active' : ''}`}
            key={tab.id}
          >
            {typeof tab.content === 'string'
              ? tab.content
              : tab.content(tab.contentProps?.props)}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TabGroup;
