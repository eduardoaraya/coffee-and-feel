import { Box } from '@material-ui/core';

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
          boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
          background: '#FFF',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          '.tab-item': {
            transition: '.3s',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 25px',
            cursor: 'pointer',
            userSelect: 'none',
            boxShadow: (theme) =>
              `0px 0.5px 1px 0px ${theme.palette.primary.main}, 0px -0.5px 1px 0px ${theme.palette.primary.main}`,
            '&.active': {
              fontWeight: 'bold',
              background: (theme) => theme.palette.primary.main,
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
              : tab.content(tab.contentProps.props)}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TabGroup;
