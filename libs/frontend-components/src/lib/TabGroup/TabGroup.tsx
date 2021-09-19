import { Box } from '@material-ui/core';

export type TabOption = {
  id: number;
  title: string;
  active: boolean;
  handleClick?: <T, A>(args?: unknown | A) => T;
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
        width: 'auto',
        height: '45px',
        display: 'flex',
        flexDirection: 'row',
        background: '#FFF',
        boxShadow: 1,
        '.tab': {
          padding: '10px 25px',
          cursor: 'pointer',
          userSelect: 'none',
        },
      }}
    >
      {tabs?.map((tab) => (
        <Box className="tab" key={tab.id}>
          {tab.title}
        </Box>
      ))}
    </Box>
  );
};

export default TabGroup;
