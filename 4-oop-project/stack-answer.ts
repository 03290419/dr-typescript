interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
}; // 사용자가 데이터를 넣어서 한 단계 감싸는 무언가를 만든다면 불변성을 유지해주는 것이 중요하다.

class StackImpl implements Stack {
  private _size: number = 0; // 내부에서만 쓰이는 변수 표기
  private head?: StackNode;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: string) {
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
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

const stack = new StackImpl(10);
stack.push("El 1");
stack.push("Les 2");
stack.push("keng 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}
