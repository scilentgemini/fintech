import Button from "@/components/button";
import PageHeader from "@/components/page-header";
import TransactionItem from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Trend from "@/components/trend";

export default function Playground() {
  return (
    <main className="space-y-8 mb-44">
      <h1 className="text-4xl mt-8">Playground</h1>

      {/* Header */}
      <div>
        <h2 mb-4 text-lg font-mono>
          Page Header
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div>
          <PageHeader />
        </div>
      </div>

      {/* Financial Trend */}
      <div>
        <h2 mb-4 text-lg font-mono>
          Financial Trend
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="flex space-x-8">
          <Trend type="Income" amount={1000} prevAmount={900} />
          <Trend type="Expenses" amount={12000} prevAmount={10000} />
          <Trend type="Investments" amount={7000} prevAmount={110000} />
          <Trend type="Savings" amount={300} prevAmount={980} />
        </div>
      </div>

      {/* Transaction Item */}
      <div>
        <h2 mb-4 text-lg font-mono>
          Teansaction Summary + Items
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <TransactionSummaryItem date="2024-05-01" amount={3500} />
          <hr className="mb-4 border-gray-200 dark:border-gray-800" />
          <TransactionItem type="Income" description="Salary" amount={2000} />
          <TransactionItem
            type="Expenses"
            category="Food"
            description="Going out to eat"
            amount={170}
          />
          <TransactionItem
            type="Savings"
            description="For myself"
            amount={500}
          />
          <TransactionItem
            type="Investments"
            description="In Microsoft"
            amount={9000}
          />
        </div>
      </div>

      {/* Button */}
      <div>
        <h2 mb-4 text-lg font-mono>
          Button
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-x-4">
          <Button>Base</Button>
          <Button variants="outline">Outline</Button>
          <Button variants="ghost">Ghost</Button>

          <Button size="xs">X-Small</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          </div>
      </div>
    </main>
  );
}
