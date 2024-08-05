import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
import PageHeader from "@/components/page-header";
import Select from "@/components/select";
import Seperator from "@/components/seperator";
import Skeleton from "@/components/skeleton";
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
            type="Expense"
            category="Food"
            description="Going out to eat"
            amount={170}
          />
          <TransactionItem
            type="Saving"
            description="For myself"
            amount={500}
          />
          <TransactionItem
            type="Investment"
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
        <Seperator />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-1">Input Label</Label>
            <Input type="text" placeholder="This is a Placeholder" />
          </div>

          <div>
            <Label className="mb-1">City</Label>

            <Select>
              <option>Kathmandu</option>
              <option>Lalitpur</option>
              <option>Bhaktapur</option>
              <option>Langtang</option>
            </Select>
          </div>

          <div className="flex items-center">
            <Input id="terms" type="checkbox" />
            <Label className="ml-2" htmlFor="terms">
              Checkbox
            </Label>
          </div>
        </div>
      </div>

      {/* Loading Skeleton */}
      <div>
        <h2 mb-4 text-lg font-mono>
        Loading Skeleton
        </h2>
        <Seperator />
        <div className="space-y-8">
            <div className="flex space-x-4">
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
            <div className="space-y-4">
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        </div>
      </div>
    </main>
  );
}
