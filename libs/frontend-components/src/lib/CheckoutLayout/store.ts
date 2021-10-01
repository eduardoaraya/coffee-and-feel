import store from 'zustand';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import type { IProduct } from '@atlascode/coffee-backend-module-products';

type CheckoutItem = {
  id: string | number;
  quantity: number;
  product: IProduct;
};

export interface CheckoutLayoutState {
  currentStep: number;
  items: CheckoutItem[];
  checkoutTotal: number;
}

export interface CheckoutLayoutActions {
  forwardStep: () => void;
  backwardStep: () => void;
  newItem: (product: IProduct) => void;
  removeItem: (id: string | number) => void;
  increaseItem: (id: string | number) => void;
  subtractItem: (id: string | number) => void;
}

export const checkoutLayoutStore = store<
  CheckoutLayoutState & CheckoutLayoutActions
>((set) => ({
  checkoutTotal: 0,
  items: [],
  currentStep: 0,

  increaseItem: (id) => {
    set((state) => {
      const lookupId = state.items.findIndex((x) => x.id === id);

      return {
        ...state,
        items: state.items.map((value, index) => {
          return index === lookupId
            ? { ...value, quantity: value.quantity + 1 }
            : value;
        }),
      };
    });
  },

  subtractItem: (id) => {
    set((state) => {
      const lookupID = state.items.findIndex((x) => x.id === id);

      return {
        ...state,
        items:
          state.items[lookupID].quantity - 1 === 0
            ? state.items.filter((value, index) => value.id !== id)
            : state.items.map((value, index) =>
                index === lookupID
                  ? { ...value, quantity: value.quantity - 1 }
                  : value
              ),
      };
    });
  },

  removeItem: (id) => {
    set((state) => {
      return {
        ...state,
        items: state.items.filter((value, index) => {
          return value.id !== id;
        }),
      };
    });
  },

  newItem: (product) => {
    set((state) => {
      return {
        ...state,
        items: [
          ...state.items,
          { id: product.id, quantity: 1, product: product },
        ],
      };
    });
  },

  backwardStep: () => {
    set((state) => {
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    });
  },

  forwardStep: () => {
    set((state) => {
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    });
  },
}));
