export enum UserFieldId {
  NAME = "name",
  USERNAME = "username",
  EMAIL = "email",
  PASSWORD = "password",
  DATE_OF_BIRTH = "dateOfBirth",
  PERMANENT_ADDRESS = "permanentAddress",
  PRESENT_ADDRESS = "presentAddress",
  CITY = "city",
  POSTAL_CODE = "postalCode",
  COUNTRY = "country",
  PROFILE_IMAGE = "profileImage",
}

export type User = {
  [UserFieldId.NAME]: string;
  [UserFieldId.USERNAME]: string;
  [UserFieldId.EMAIL]: string;
  [UserFieldId.PASSWORD]: string;
  [UserFieldId.DATE_OF_BIRTH]: string; // Date as a string in YYYY-MM-DD format
  [UserFieldId.PERMANENT_ADDRESS]: string;
  [UserFieldId.PRESENT_ADDRESS]: string;
  [UserFieldId.CITY]: string;
  [UserFieldId.POSTAL_CODE]: string;
  [UserFieldId.COUNTRY]: string;
  [UserFieldId.PROFILE_IMAGE]?: string;
};

export type Card = {
  id: number;
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: number;
};

export type BalanceHistory = {
  labels: string[];
  data: number[];
};

export type Contact = {
  id: number;
  name: string;
  role: string;
  avatar: string;
};

export type ExpenseStatisticItem = { category: string; percentage: number };

export type Transaction = {
  id: number;
  type: string;
  description: string;
  date: string;
  amount: number;
};

export type WeeklyActivity = {
  labels: string[];
  deposit: number[];
  withdraw: number[];
};
