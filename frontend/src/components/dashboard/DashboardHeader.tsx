import { Download } from "lucide-react";

import { ButtonNewTask } from "../ui/ButtonNewTask";

export const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
          WORKSPACE OVERVIEW • Q3 Sprint 01
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mt-1 flex items-center gap-2">
          Bom dia, Nicolle!
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Aqui está o resumo das suas atividades e da sua equipe hoje.
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* Toggle de Período */}
        <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200/80 text-xs font-medium text-slate-600 shadow-sm">
          <button className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 font-semibold transition-all">
            Últimos 7 dias
          </button>
          <button className="px-3 py-1.5 rounded-lg hover:text-slate-900 transition-colors">
            Este mês
          </button>
        </div>

        {/* Botão Exportar */}
        <button
          type="button"
          className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-700 shadow-sm transition-all cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-slate-500" />
          <span>Exportar</span>
        </button>

        {/* Botão Nova Tarefa */}
        <ButtonNewTask />
      </div>
    </div>
  );
};
