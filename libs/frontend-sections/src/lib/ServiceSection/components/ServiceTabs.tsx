import { Typography, Box } from '@material-ui/core';
import { ServiceInterface } from '../contracts';
import { LinkedListInterface } from '../utils/linkedList';
import { NodeInterface } from '../utils/node';

export interface ServiceTabsProps {
  services: LinkedListInterface<ServiceInterface>;
  stateContent?: NodeInterface<ServiceInterface> | null;
  handleClick(item: NodeInterface<ServiceInterface> | null): void;
}

export const ServiceTabs: React.FC<ServiceTabsProps> = ({
  services,
  stateContent,
  handleClick,
}): JSX.Element => {
  const isActiveClass = (id: number) =>
    id === stateContent?.getElement()?.id ? 'active' : '';

  return (
    <Box className="tabs">
      {services.getData().map((item: NodeInterface<ServiceInterface>, key) => {
        return (
          <Box
            className={`tab-item ${isActiveClass(item?.getElement()?.id ?? 0)}`}
            key={key}
            onClick={() => handleClick(item)}
          >
            {item?.getElement()?.icon && (
              <Box className="icon">{item?.getElement()?.icon()}</Box>
            )}

            <Typography color="white">{item?.getElement()?.title}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default ServiceTabs;
