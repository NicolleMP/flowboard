import {
  LayoutDashboard,
  Folder,
  CheckCircle2,
  Kanban,
  Settings,
  ChevronsUpDown,
  SlidersHorizontal,
} from "lucide-react";

import Logo from "../../assets/Logo_FlowBoard.png";

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#e8f1fd] border-r border-slate-200 flex flex-col justify-between p-4 z-20">
      {/* LOGO */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 px-10">
          <img
            src={Logo}
            alt="FlowBoard Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        <button className="w-full flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span>Meu Workspace</span>
          </div>
          <ChevronsUpDown className="w-4 h-4 text-slate-600" />
        </button>

        {/* Navigation Links */}
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-200/50 transition-all"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#404040] hover:bg-slate-50 hover:text-slate-900 transition-all"
          >
            <Folder className="w-4 h-4 text-slate-600" />
            Projetos
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#404040] hover:bg-slate-50 hover:text-slate-900 transition-all"
          >
            <CheckCircle2 className="w-4 h-4 text-slate-600" />
            Minhas Tarefas
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#404040] hover:bg-slate-50 hover:text-slate-900 transition-all"
          >
            <Kanban className="w-4 h-4 text-slate-600" />
            Kanban
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#404040] hover:bg-slate-50 hover:text-slate-900 transition-all"
          >
            <Settings className="w-4 h-4 text-slate-600" />
            Configurações
          </a>
        </nav>
      </div>

      {/* Perfil */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            alt="Imagem teste"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#404040] leading-tight">
              Nome Teste
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Product Lead
            </span>
          </div>
        </div>
        <button className="text-slate-600 hover:text-slate-600 p-1">
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
