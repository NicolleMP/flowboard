import { Plus, Calendar } from "lucide-react";

const priorityTasks = [
  {
    id: 1,
    title: "Revisar fluxo de checkout mobile",
    tag: "Alta",
    tagBg: "bg-rose-100 text-rose-700",
    cat: "App Mobile",
    date: "Hoje, 17:00",
  },
  {
    id: 2,
    title: "Validar a segurança do código",
    tag: "Média",
    tagBg: "bg-blue-100 text-blue-700",
    cat: "Stripe",
    date: "Hoje, 19:30",
  },
  {
    id: 3,
    title: "Exportar novos tokens",
    tag: "Normal",
    tagBg: "bg-indigo-100 text-indigo-700",
    cat: "Design System",
    date: "Amanhã",
  },
  {
    id: 4,
    title: "Atualizar documentação de autenticação",
    tag: "Normal",
    tagBg: "bg-indigo-100 text-indigo-700",
    cat: "Backend",
    date: "Quinta-feira",
  },
  {
    id: 5,
    title: "Alinhar metas da próxima sprint",
    tag: "Baixa",
    tagBg: "bg-emerald-100 text-emerald-700",
    cat: "Gestão",
    date: "Sexta-feira",
  },
];

const activeProjects = [
  {
    name: "Layout Plataforma Web",
    progress: 78,
    tasks: "24 de 31 tarefas",
    color: "bg-indigo-600",
  },
  {
    name: "App Mobile iOS & Android",
    progress: 45,
    tasks: "18 de 40 tarefas",
    color: "bg-blue-600",
  },
  {
    name: "Integração Backend",
    progress: 92,
    tasks: "12 de 13 tarefas",
    color: "bg-emerald-600",
  },
  {
    name: "Design System v2.0",
    progress: 60,
    tasks: "15 de 25 tarefas",
    color: "bg-indigo-500",
  },
];

export const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Tarefas Prioritárias */}
      <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-800">
              Tarefas Prioritárias
            </h2>
            <span className="text-xs bg-slate-100 font-semibold text-slate-600 px-2.5 py-0.5 rounded-full">
              5 pendentes
            </span>
          </div>
          <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
            <Plus className="w-3.5 h-3.5" /> Adicionar
          </button>
        </div>

        <div className="space-y-3">
          {priorityTasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 hover:bg-slate-50/80 rounded-xl transition-colors border border-transparent hover:border-slate-100 gap-2"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                />
                <span className="text-sm font-medium text-slate-700">
                  {task.title}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span
                  className={`px-2 py-0.5 rounded-md font-semibold text-[10px] ${task.tagBg}`}
                >
                  {task.tag}
                </span>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium text-[11px]">
                  {task.cat}
                </span>
                <span className="text-slate-400 flex items-center gap-1 ml-1 text-[11px]">
                  <Calendar className="w-3 h-3" />
                  {task.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coluna 3: Projetos Ativos */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-800">
              Projetos Ativos
            </h2>
            <span className="text-xs bg-slate-100 font-semibold text-slate-600 px-2 py-0.5 rounded-full">
              4
            </span>
          </div>
          <a
            href="#"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Ver todos
          </a>
        </div>

        <div className="space-y-5 pt-1">
          {activeProjects.map((project, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${project.color}`}
                  ></span>
                  {project.name}
                </span>
                <span className="font-semibold text-indigo-600">
                  {project.progress}%
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full ${project.color} rounded-full`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <span className="text-[11px] text-slate-400 block">
                {project.tasks}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
