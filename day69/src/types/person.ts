interface Person {
  name: string;
  age: number;
  address: string;
}

const person1: Person = {
  name: "Tom",
  age: 25,
  address: "서울시 강남구"
};

const person2: Partial<Person> = {
  name: "Sam"
};