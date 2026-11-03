import { Plus } from "lucide-react";

export function ButtonNewTask() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white font-medium text-sm rounded-xl shadow-sm shadow-indigo-200 transition-all cursor-pointer"
    >
      <Plus className="w-4 h-4 stroke-[2.5]" />
      <span>Nova Tarefa</span>
    </button>
  );
}
