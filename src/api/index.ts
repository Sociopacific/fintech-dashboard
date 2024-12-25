// api.ts
import {
  BalanceHistory,
  Card,
  Contact,
  ExpenseStatisticItem,
  Transaction,
  User,
  WeeklyActivity,
} from "@/types";
import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch user data
const fetchUser = async (): Promise<User | undefined> => {
  try {
    const response: AxiosResponse<User> = await api.get("/user");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Fetch cards data
const fetchCards = async (): Promise<Card[] | undefined> => {
  try {
    const response: AxiosResponse<Card[]> = await api.get("/cards");
    return response.data;
  } catch (error) {
    console.error("Error fetching cards:", error);
  }
};

// Fetch transactions data
const fetchTransactions = async (): Promise<Transaction[] | undefined> => {
  try {
    const response: AxiosResponse<Transaction[]> = await api.get(
      "/transactions"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
};

// Fetch weekly activity data
const fetchWeeklyActivity = async (): Promise<WeeklyActivity | undefined> => {
  try {
    const response: AxiosResponse<WeeklyActivity> = await api.get(
      "/weekly-activity"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weekly activity:", error);
  }
};

// Fetch expense statistics
const fetchExpenseStatistics = async (): Promise<
  ExpenseStatisticItem[] | undefined
> => {
  try {
    const response: AxiosResponse<ExpenseStatisticItem[]> = await api.get(
      "/expense-statistics"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching expense statistics:", error);
  }
};

// Fetch contacts
const fetchContacts = async (): Promise<Contact[] | undefined> => {
  try {
    const response: AxiosResponse<Contact[]> = await api.get("/contacts");
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};

// Fetch balance history
const fetchBalanceHistory = async (): Promise<BalanceHistory | undefined> => {
  try {
    const response: AxiosResponse<BalanceHistory> = await api.get(
      "/balance-history"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching balance history:", error);
  }
};

export {
  fetchUser,
  fetchCards,
  fetchTransactions,
  fetchWeeklyActivity,
  fetchExpenseStatistics,
  fetchContacts,
  fetchBalanceHistory,
};
