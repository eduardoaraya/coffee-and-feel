import Node, { NodeInterface } from './node';

export interface LinkedListInterface<T> {
  add(element: T): void;
  getTail(): NodeInterface<T> | null;
  getHead(): NodeInterface<T> | null;
  getSize(): number;
  next(): NodeInterface<T> | null;
  getData(): NodeInterface<T>[];
}

export default class LinkedList<T> implements LinkedListInterface<T> {
  private head: NodeInterface<T> | null = null;
  private data: NodeInterface<T>[] = [];
  private size = 0;

  add(element: T): void {
    const node: NodeInterface<T> = new Node<T>(element);
    let current: NodeInterface<T> | null;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current?.getNext()) {
        current = current.getNext();
      }
      current?.setNext(node);
    }

    this.data.push(node);
    this.size++;
  }

  getTail(): NodeInterface<T> | null {
    return this.data[0] ?? null;
  }

  getHead(): NodeInterface<T> | null {
    return this.head;
  }

  getSize(): number {
    return this.size;
  }

  next(): NodeInterface<T> | null {
    this.head =
      this.head && this.head.getNext() ? this.head.getNext() : this.getTail();

    return this.getHead();
  }

  getData(): NodeInterface<T>[] {
    return [...this.data];
  }
}
