{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  }; // 사용자가 데이터를 넣어서 한 단계 감싸는 무언가를 만든다면 불변성을 유지해주는 것이 중요하다.

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0; // 내부에서만 쓰이는 변수 표기
    private head?: StackNode<T>;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: T) {
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      // null == undefined
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);
  stack.push("El 1");
  stack.push("Les 2");
  stack.push("keng 3");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
  const stack2 = new StackImpl<number>(10);
  stack2.push(123);
  stack2.push(123);
  stack2.push(12);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
