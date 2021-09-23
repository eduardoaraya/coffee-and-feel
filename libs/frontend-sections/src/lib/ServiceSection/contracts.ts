import { NodeInterface } from './utils/node';

type ScrollSizeComputeType = (
  services: NodeInterface<ServiceInterface>[]
) => number | null;

export interface ServiceDataInterface {
  id: number;
  title: string;
  content: string[];
}

export interface ServiceInterface extends ServiceDataInterface {
  size: number;
  getSize(services: ServiceInterface[]): number;
  icon(): string | JSX.Element;
  getScrollSize: ScrollSizeComputeType;
}
