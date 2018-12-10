export interface ListType {
  code: string;
  description: string;
}

export interface Location {
  country: ListType;
  department: ListType;
  city: string;
}

export interface Person {
  documentType: ListType;
  document: string;
  phone: string;
}
export interface Tutor extends Person {
  name: string;
}
export interface User extends Person {
  email: string;
  location: Location;
  tutor?: Tutor;
  name: string;
}
