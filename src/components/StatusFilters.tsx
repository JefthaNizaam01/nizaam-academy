import { Button } from "@/components/button";

interface StatusFiltersProps {
  activeStatus: string;
  onStatusChange: (status: string) => void;
}

const statusOptions = [
  { value: 'All', label: 'All Courses' },
  { value: 'Active', label: 'Active' },
  { value: 'Completed', label: 'Completed' }
];

export function StatusFilters({ activeStatus, onStatusChange }: StatusFiltersProps) {
  return (
    <div className="flex gap-2 mb-6">
      {statusOptions.map((option) => (
        <Button
          key={option.value}
          variant={activeStatus === option.value ? "default" : "outline"}
          size="sm"
          onClick={() => onStatusChange(option.value)}
          className={
            "transition-all duration-200" +
            (activeStatus === option.value
              ? " bg-gradient-to-r from-purple-700 to-indigo-600 text-white border-0 shadow-md hover:from-purple-800 hover:to-indigo-700"
              : "")
          }
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}