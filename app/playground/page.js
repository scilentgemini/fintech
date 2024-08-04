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

      {/* Form Components */}
      <div>
        <h2 mb-4 text-lg font-mono>
          Forms
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-700 dark:text-gray-300 block mb-1">
              Input Label
            </label>
            <input
              type="text"
              placeholder="This is a Placeholder"
              className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-300 block mb-1">
              City
            </label>
            <select
              type="text"
              className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950"
            >
                <option>Kathmandu</option>
                <option>Lalitpur</option>
                <option>Bhaktapur</option>
                <option>Langtang</option>
            </select>
          </div>

          <div className="flex items-center">
          <input
              type="checkbox"
              className="rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm"
            />
            <label className="text-gray-700 dark:text-gray-300 ml-2">
              Checkbox
            </label>
          </div>

        </div>
      </div>
    </main>
  );
}
