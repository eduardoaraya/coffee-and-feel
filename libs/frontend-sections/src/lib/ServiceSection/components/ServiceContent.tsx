import { Typography, Box } from '@material-ui/core';
import { ServiceInterface } from '../contracts';
import { LinkedListInterface } from '../utils/linkedList';
import { NodeInterface } from '../utils/node';

export interface ServiceContentProps {
  services?: LinkedListInterface<ServiceInterface>;
  stateContent?: NodeInterface<ServiceInterface> | null;
}

export const ServiceContent: React.FC<ServiceContentProps> = ({
  services,
  stateContent,
}): JSX.Element => {
  const isActiveClass = (id: number) =>
    id === stateContent?.getElement()?.id ? 'active' : '';

  return (
    <Box>
      {services?.getData().map((item: NodeInterface<ServiceInterface>) => {
        const { id, content } = item.getElement();
        return (
          <Box
            key={id}
            className={`service-description-box ${isActiveClass(id)}`}
          >
            {content.map((txt: string, i: number) => (
              <Typography
                color="white"
                key={i}
                className="service-description-text"
              >
                {txt}
              </Typography>
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

export default ServiceContent;
