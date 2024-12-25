import { http, HttpResponse } from "msw";
import user from "./data/user.json";
import cards from "./data/cards.json";
import transactions from "./data/transactions.json";
import weeklyActivity from "./data/weeklyActivity.json";
import expenseStatistics from "./data/expenseStatistics.json";
import contacts from "./data/contacts.json";
import balanceHistory from "./data/balanceHistory.json";

export const handlers = [
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json(user);
  }),

  http.get("https://api.example.com/cards", () => {
    return HttpResponse.json(cards);
  }),

  http.get("https://api.example.com/transactions", () => {
    return HttpResponse.json(transactions);
  }),

  http.get("https://api.example.com/weekly-activity", () => {
    return HttpResponse.json(weeklyActivity);
  }),

  http.get("https://api.example.com/expense-statistics", () => {
    return HttpResponse.json(expenseStatistics);
  }),

  http.get("https://api.example.com/contacts", () => {
    return HttpResponse.json(contacts);
  }),

  http.get("https://api.example.com/balance-history", () => {
    return HttpResponse.json(balanceHistory);
  }),
];
