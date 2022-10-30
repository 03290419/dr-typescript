{
  const obj = {
    name: "keng",
  };
  obj.name; //keng
  obj["name"]; //keng

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };
  type Name = Animal["name"]; //string
  const text: Name = "hello";

  type Gender = Animal["gender"]; //'male'|'female'
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "keng"; //🚫
  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "keng",
    gender: "female",
  };
}
