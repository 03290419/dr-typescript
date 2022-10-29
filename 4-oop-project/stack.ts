{
  type TextStack = string;
  class Stack {
    static STACK_NAME = "";
    name = "";
    stack = "";
    constructor(name: string) {
      this.name = name;
    }
    makeStack(name: string): Stack {
      return new Stack(name);
    }
    addStack(name: string): TextStack {
      return (this.stack += name);
    }
  }

  const maker = new Stack("Keng");
  maker.addStack("Ruby");
  console.log(maker);
}
