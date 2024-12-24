import { DashboardPage } from "@/pages/DashboardPage";
import { ComingSoonPage as TransactionsPage } from "@/pages/ComingSoonPage";
import { ComingSoonPage as AccountsPage } from "@/pages/ComingSoonPage";
import { ComingSoonPage as InvestmentsPage } from "@/pages/ComingSoonPage";
import { ComingSoonPage as CreditCardsPage } from "@/pages/ComingSoonPage";
import { ComingSoonPage as LoansPage } from "@/pages/ComingSoonPage";
import { ComingSoonPage as ServicesPage } from "@/pages/ComingSoonPage";
import { ComingSoonPage as MyPrivilegesPage } from "@/pages/ComingSoonPage";
import { SettingsPage } from "@/pages/SettingsPage";

import DashboardIcon from "@/assets/icons/dashboard.svg?react";
import TransactionsIcon from "@/assets/icons/transactions.svg?react";
import AccountsIcon from "@/assets/icons/accounts.svg?react";
import InvestmentsIcon from "@/assets/icons/investments.svg?react";
import CreditCardsIcon from "@/assets/icons/credit-cards.svg?react";
import LoansIcon from "@/assets/icons/loans.svg?react";
import ServicesIcon from "@/assets/icons/services.svg?react";
import PrivilegesIcon from "@/assets/icons/privileges.svg?react";
import SettingsIcon from "@/assets/icons/settings.svg?react";

export interface Route {
  name: string;
  path: string;
  component: React.ComponentType;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const routes: Route[] = [
  {
    name: "Dashboard",
    path: "/",
    component: DashboardPage,
    icon: DashboardIcon,
  },
  {
    name: "Transactions",
    path: "/transactions",
    component: TransactionsPage,
    icon: TransactionsIcon,
  },
  {
    name: "Accounts",
    path: "/accounts",
    component: AccountsPage,
    icon: AccountsIcon,
  },
  {
    name: "Investments",
    path: "/investments",
    component: InvestmentsPage,
    icon: InvestmentsIcon,
  },
  {
    name: "Credit Cards",
    path: "/credit-cards",
    component: CreditCardsPage,
    icon: CreditCardsIcon,
  },
  { name: "Loans", path: "/loans", component: LoansPage, icon: LoansIcon },
  {
    name: "Services",
    path: "/services",
    component: ServicesPage,
    icon: ServicesIcon,
  },
  {
    name: "My Privileges",
    path: "/my-privileges",
    component: MyPrivilegesPage,
    icon: PrivilegesIcon,
  },
  {
    name: "Settings",
    path: "/settings",
    component: SettingsPage,
    icon: SettingsIcon,
  },
];
