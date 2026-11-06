const days = [
  { day: "Seg", height: "45%" },
  { day: "Ter", height: "65%" },
  { day: "Qua", height: "55%" },
  { day: "Qui", height: "90%", active: true, val: 14 },
  { day: "Sex", height: "75%" },
  { day: "Sáb", height: "20%" },
  { day: "Dom", height: "15%" },
];

export const DashboardAnalytics = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-bold text-slate-800">
            Produtividade Semanal
          </h2>
          <span className="bg-green-200 text-green-600 text-xs font-bold px-2.5 py-0.5 rounded-full">
            +12% vs anterior
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span className="w-3 h-3 bg-purple-600 rounded"></span>
          Tarefas Entregues
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-extrabold text-slate-900">84%</span>
        <span className="text-xs text-slate-400 font-medium">
          entregas concluídas dentro do prazo estipulado
        </span>
      </div>

      {/* Gráfico de Barras */}
      <div className="h-44 flex items-end justify-between gap-3 pt-6 px-4">
        {days.map((item, idx) => (
          <div
            key={idx}
            className="flex-1 flex flex-col items-center gap-2 h-full justify-end relative group"
          >
            {item.val && (
              <span className="text-[10px] font-bold text-indigo-600 absolute -top-5">
                {item.val}
              </span>
            )}
            <div
              style={{ height: item.height }}
              className={`w-full rounded-lg transition-all duration-300 ${
                item.active
                  ? "bg-indigo-600"
                  : "bg-indigo-100 group-hover:bg-indigo-200"
              }`}
            />
            <span className="text-xs font-medium text-slate-400">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-50">
        <span>Média de 7.4 tarefas/dia útil</span>
        <a
          href="#"
          className="font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Ver histórico detalhado
        </a>
      </div>
    </div>
  );
};
