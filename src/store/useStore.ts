import { create } from "zustand";
import {
  fetchUser,
  fetchCards,
  fetchTransactions,
  fetchWeeklyActivity,
  fetchExpenseStatistics,
  fetchContacts,
  fetchBalanceHistory,
} from "@/api";
import {
  User,
  Card,
  Transaction,
  WeeklyActivity,
  ExpenseStatisticItem,
  Contact,
  BalanceHistory,
} from "@/types";

type State = {
  user: User | undefined;
  cards: Card[] | undefined;
  transactions: Transaction[] | undefined;
  weeklyActivity: WeeklyActivity | undefined;
  expenseStatistics: ExpenseStatisticItem[] | undefined;
  contacts: Contact[] | undefined;
  balanceHistory: BalanceHistory | undefined;

  // Fetching flags
  isUserLoading: boolean;
  isCardsLoading: boolean;
  isTransactionsLoading: boolean;
  isWeeklyActivityLoading: boolean;
  isExpenseStatisticsLoading: boolean;
  isContactsLoading: boolean;
  isBalanceHistoryLoading: boolean;

  // Error state
  error: string | undefined;

  fetchUserData: () => Promise<void>;
  fetchCardsData: () => Promise<void>;
  fetchTransactionsData: () => Promise<void>;
  fetchWeeklyActivityData: () => Promise<void>;
  fetchExpenseStatisticsData: () => Promise<void>;
  fetchContactsData: () => Promise<void>;
  fetchBalanceHistoryData: () => Promise<void>;

  updateUser: (newUserData: User) => void; // Method to update user data
};

export const useStore = create<State>((set) => ({
  user: undefined,
  cards: undefined,
  transactions: undefined,
  weeklyActivity: undefined,
  expenseStatistics: undefined,
  contacts: undefined,
  balanceHistory: undefined,

  // Loading states
  isUserLoading: false,
  isCardsLoading: false,
  isTransactionsLoading: false,
  isWeeklyActivityLoading: false,
  isExpenseStatisticsLoading: false,
  isContactsLoading: false,
  isBalanceHistoryLoading: false,

  // Error state
  error: undefined,

  // Actions to fetch data
  fetchUserData: async () => {
    set({ isUserLoading: true, error: undefined });
    try {
      const userData = await fetchUser();
      set({ user: userData, isUserLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch user data", isUserLoading: false });
    }
  },

  fetchCardsData: async () => {
    set({ isCardsLoading: true, error: undefined });
    try {
      const cardsData = await fetchCards();
      set({ cards: cardsData, isCardsLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch cards data", isCardsLoading: false });
    }
  },

  fetchTransactionsData: async () => {
    set({ isTransactionsLoading: true, error: undefined });
    try {
      const transactionsData = await fetchTransactions();
      set({ transactions: transactionsData, isTransactionsLoading: false });
    } catch (error) {
      set({
        error: "Failed to fetch transactions data",
        isTransactionsLoading: false,
      });
    }
  },

  fetchWeeklyActivityData: async () => {
    set({ isWeeklyActivityLoading: true, error: undefined });
    try {
      const weeklyActivityData = await fetchWeeklyActivity();
      set({
        weeklyActivity: weeklyActivityData,
        isWeeklyActivityLoading: false,
      });
    } catch (error) {
      set({
        error: "Failed to fetch weekly activity",
        isWeeklyActivityLoading: false,
      });
    }
  },

  fetchExpenseStatisticsData: async () => {
    set({ isExpenseStatisticsLoading: true, error: undefined });
    try {
      const expenseStatisticsData = await fetchExpenseStatistics();
      set({
        expenseStatistics: expenseStatisticsData,
        isExpenseStatisticsLoading: false,
      });
    } catch (error) {
      set({
        error: "Failed to fetch expense statistics",
        isExpenseStatisticsLoading: false,
      });
    }
  },

  fetchContactsData: async () => {
    set({ isContactsLoading: true, error: undefined });
    try {
      const contactsData = await fetchContacts();
      set({ contacts: contactsData, isContactsLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch contacts data", isContactsLoading: false });
    }
  },

  fetchBalanceHistoryData: async () => {
    set({ isBalanceHistoryLoading: true, error: undefined });
    try {
      const balanceHistoryData = await fetchBalanceHistory();
      set({
        balanceHistory: balanceHistoryData,
        isBalanceHistoryLoading: false,
      });
    } catch (error) {
      set({
        error: "Failed to fetch balance history",
        isBalanceHistoryLoading: false,
      });
    }
  },

  // Update user data
  updateUser: (newUserData: User) => {
    set({ user: newUserData });
  },
}));
