const activities = [
  {
    id: 1,
    user: "Nicolle",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    action: "moveu",
    target: "Checkout Mobile",
    to: "Concluído",
    toBg: "bg-emerald-100 text-emerald-700",
    time: "Há 18 min",
  },
  {
    id: 2,
    user: "Lucas Gomes",
    initials: "LG",
    action: "comentou em",
    target: "Redesign Plataforma",
    time: "Há 42 min",
  },
  {
    id: 3,
    user: "Carla Rocha",
    initials: "CR",
    action: "adicionou tag",
    tag: "Webhook",
    target: "em Stripe",
    time: "Há 2 horas",
  },
  {
    id: 4,
    user: "Diego Santos",
    initials: "DS",
    action: "criou o card",
    target: "Design System v2.0",
    time: "Há 4 horas",
  },
];

export const RecentActivities = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold text-slate-800">
            Atividades Recentes
          </h2>
          <span className="text-xs bg-slate-100 font-semibold text-slate-600 px-2 py-0.5 rounded-full">
            Feed
          </span>
        </div>
        <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">
          Atualizar
        </button>
      </div>

      <div className="space-y-4 pt-2">
        {activities.map((act) => (
          <div key={act.id} className="flex items-start gap-3">
            {act.avatar ? (
              <img
                src={act.avatar}
                alt={act.user}
                className="w-8 h-8 rounded-full object-cover mt-0.5"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mt-0.5">
                {act.initials}
              </div>
            )}
            <div className="flex-1 text-xs">
              <p className="text-slate-700">
                <span className="font-bold text-slate-900">{act.user}</span>{" "}
                {act.action}{" "}
                <span className="font-semibold text-indigo-600">
                  {act.target}
                </span>
                {act.to && (
                  <span
                    className={`ml-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${act.toBg}`}
                  >
                    {act.to}
                  </span>
                )}
                {act.tag && (
                  <span className="ml-1 px-1 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium">
                    {act.tag}
                  </span>
                )}
              </p>
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                {act.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
