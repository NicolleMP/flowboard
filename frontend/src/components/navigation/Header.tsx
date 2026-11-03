import { Search, Bell } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-16 border-b border-slate-200 bg-[#e8f1fd] backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
      <div className="relative w-96">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar tarefas, projetos ou atalhos..."
          className="w-full bg-slate-50/80 border border-slate-200/60 rounded-xl pl-9 pr-12 py-2 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Notificações */}
        <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
          <Bell className="w-5 h-5" />
        </button>

        {/* Avatar */}
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
          alt="Imagem teste"
          className="w-8 h-8 rounded-full object-cover border border-slate-200"
        />
      </div>
    </header>
  );
};
