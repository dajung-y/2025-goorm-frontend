export interface Person {
  id: number;
  name: string;
  // age: number;
  // weight: number;
  // height: number;
}

export interface Student extends Person{
  grade: number;
  major?:string;
}

export interface Employee extends Person{
  department: "dev" | "design" | "ops" | "sales";
}

export type AnyPerson = Person | Student | Employee ;