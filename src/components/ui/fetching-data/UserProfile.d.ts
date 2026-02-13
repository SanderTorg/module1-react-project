export interface RootObject {
  limit: number;
  skip: number;
  total: number;
  users: User[];
}

export interface User {
  address: Address;
  age: number;
  bank: Bank;
  birthDate: string;
  bloodGroup: string;
  company: Company;
  crypto: Crypto;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: Gender;
  hair: Hair;
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  role: Role;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
}

export interface Address {
  address: string;
  city: string;
  coordinates: Coordinates;
  country: Country;
  postalCode: string;
  state: string;
  stateCode: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export enum Country {
  UnitedStates = "United States",
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

export interface Crypto {
  coin: Coin;
  network: Network;
  wallet: Wallet;
}

export enum Coin {
  Bitcoin = "Bitcoin",
}

export enum Network {
  EthereumERC20 = "Ethereum (ERC20)",
}

export enum Wallet {
  The0Xb9Fc2Fe63B2A6C003F1C324C3Bfa53259162181A = "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
}

export enum Gender {
  Female = "female",
  Male = "male",
}

export interface Hair {
  color: string;
  type: Type;
}

export enum Type {
  Curly = "Curly",
  Kinky = "Kinky",
  Straight = "Straight",
  Wavy = "Wavy",
}

export enum Role {
  Admin = "admin",
  Moderator = "moderator",
  User = "user",
}
