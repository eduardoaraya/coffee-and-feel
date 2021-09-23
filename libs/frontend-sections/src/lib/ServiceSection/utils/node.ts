export interface NodeInterface<T> {
  getElement(): T;
  setNext(element: NodeInterface<T>): void;
  getNext(): NodeInterface<T> | null;
}

export default class Node<T> implements NodeInterface<T> {
  constructor(
    private element: T,
    private next: NodeInterface<T> | null = null
  ) {}

  getElement(): T {
    return this.element;
  }

  setNext(element: NodeInterface<T>): void {
    this.next = element;
  }

  getNext(): NodeInterface<T> | null {
    return this.next;
  }
}
