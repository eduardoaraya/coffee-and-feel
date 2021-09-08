import { Story, Meta } from '@storybook/react';
import {
  ProductCatalogRepresentation,
  ProductCatalogRepresentationProps,
} from './ProductCatalogRepresentation';

export default {
  component: ProductCatalogRepresentation,
  title: 'ProductCatalogRepresentation',
} as Meta;

const Template: Story<ProductCatalogRepresentationProps> = (args) => (
  <ProductCatalogRepresentation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
