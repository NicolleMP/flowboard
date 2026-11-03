import { ListTodo, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

const stats = [
  {
    title: "Total de tarefas",
    value: "128",
    Subtitle: "Total acumulado",
    icon: ListTodo,
    iconColor: "text-indigo-600",
  },
  {
    title: "Em andamento",
    value: "42",
    Subtitle: "Ativas no sprint atual",
    icon: Clock,
    iconColor: "text-indigo-500",
  },
  {
    title: "Concluídas",
    value: "74",
    Subtitle: "Finalizadas com sucesso",
    icon: CheckCircle2,
    iconColor: "text-green-600",
  },
  {
    title: "Atrasadas",
    value: "12",
    Subtitle: "Requeren atenção",
    icon: AlertTriangle,
    iconColor: "text-rose-500",
    valueColor: "text-rose-500",
  },
];

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                {stat.title}
              </span>
              <Icon className={`w-4 h-4 ${stat.iconColor}`} />
            </div>
            <div className="mt-4">
              <span
                className={`text-3xl font-extrabold tracking-tight ${stat.valueColor || "text-slate-900"}`}
              >
                {stat.value}
              </span>
              <p className="text-xs font-medium text-slate-400 mt-1">
                {stat.Subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
