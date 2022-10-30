{
  type Video = {
    title: string;
    author: string;
  };
  type Optional<T> = {
    [P in keyof T]?: T[P]; // == for...in
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "hi",
    author: "keng",
  };
  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "keng";
  const video: ReadOnly<Video> = {
    title: "keng",
    author: "kengs",
  };
  //   video.author = 'keng'  // 🚫

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}

// type Video = {
//     title: string;
//     author: string;
//     description: string;
//   };

// type VideoOptional = {
//   title?: string;
//   author?: string;
//   description?: string;
// };

// type VideoReadOnly = {
//   readonly title: string;
//   readonly author: string;
// };

// 🤔 what ????
ㅈ;
