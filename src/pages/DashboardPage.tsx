import { useNavigate } from "react-router-dom";
import { CreditCard } from "../components/dashboard/CreditCard";
import { RecentTransactions } from "../components/dashboard/RecentTransactions";
import { WeeklyActivityChart } from "../components/dashboard/WeeklyActivityChart";
import { ExpenseStatisticsChart } from "../components/dashboard/ExpenseStatisticsChart";
import { QuickTransfer } from "../components/dashboard/QuickTransfer";
import { BalanceHistoryChart } from "../components/dashboard/BalanceHistoryChart";
import { Section } from "../components/ui/section";
import { Tile } from "../components/ui/tile";

export function DashboardPage() {
  const navigate = useNavigate();

  const handleSeeAllClick = () => {
    navigate("/credit-cards");
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12
      grid-rows-[211px_252px_280px_280px_250px_270px]
      xs:grid-rows-[211px_252px_280px_280px_250px_270px]
      sm:grid-rows-[282px_282px_367px_367px_323px_323px]
      md:grid-rows-[282px_367px_323px_323px_323px]
      xl:grid-rows-[282px_367px_323px]
      gap-y-[30px]
      md:gap-x-[30px]"
    >
      <Section
        title={
          <div className="flex justify-between">
            <span>My Cards</span>
            <button className="text-lg" onClick={handleSeeAllClick}>
              See All
            </button>
          </div>
        }
        index={0}
        className="col-span-12 xl:col-span-8 md:max-xl:order-1"
      >
        <div className="relative overflow-x-auto hide-scrollbar size-[calc(100%+80px)] m-[-40px] pointer-events-none">
          <div className="flex gap-[30px] h-[calc(100%-80px)] min-w-min m-[40px]">
            <Tile
              className="max-md:w-[70vw] min-w-[240px] md:min-w-[332px] flex-1 pointer-events-auto"
              index={0}
            >
              <CreditCard
                id={1}
                balance={5756}
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778123412341234"
                theme="dark"
              />
            </Tile>
            <Tile
              className="min-w-[332px] flex-1 pointer-events-auto"
              index={1}
            >
              <CreditCard
                id={2}
                balance={8390}
                cardHolder="Eddy Cusuma"
                validThru="11/25"
                cardNumber="3434567890128756"
                theme="light"
              />
            </Tile>
          </div>
        </div>
      </Section>

      <Section
        title="Recent Transactions"
        index={2}
        className="col-span-12 md:col-span-7 xl:col-span-4 md:max-xl:order-3"
      >
        <Tile index={2}>
          <RecentTransactions />
        </Tile>
      </Section>

      <Section
        title="Weekly Activity"
        index={3}
        className="col-span-12 md:col-span-12 xl:col-span-8 md:max-xl:order-2"
      >
        <Tile index={3}>
          <WeeklyActivityChart />
        </Tile>
      </Section>

      <Section
        title="Expense Statistics"
        index={4}
        className="col-span-12 md:col-span-5 xl:col-span-4 md:max-xl:order-4"
      >
        <Tile index={4}>
          <ExpenseStatisticsChart />
        </Tile>
      </Section>

      <Section
        title="Quick Transfer"
        index={5}
        className="col-span-12 md:col-span-12 xl:col-span-5 md:max-xl:order-5"
      >
        <Tile index={5}>
          <QuickTransfer />
        </Tile>
      </Section>

      <Section
        title="Balance History"
        index={6}
        className="col-span-12 md:col-span-12 xl:col-span-7 md:max-xl:order-6"
      >
        <Tile index={6}>
          <BalanceHistoryChart />
        </Tile>
      </Section>
    </div>
  );
}
