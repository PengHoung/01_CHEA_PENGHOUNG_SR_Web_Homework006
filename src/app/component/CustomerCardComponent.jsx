import { Eye, Calendar } from "lucide-react";

export default function CustomerCard({ customer }) {
  const fullName = `${customer.firstName} ${customer.lastName}`;

  return (
    <div className="flex items-center justify-between p-6 bg-white border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors">
      <div className="w-1/3">
        <h3 className="font-bold text-slate-800">{fullName}</h3>
        <p className="text-gray-400 text-[10px] uppercase">
          ID: {customer.customerId.substring(0, 8)}...
        </p>
      </div>

      <div className="w-1/4 flex items-center gap-2 text-slate-500">
        <Calendar size={16} className="text-gray-300" />
        <span className="text-sm font-medium">{customer.birthDate}</span>
      </div>

      <div className="w-1/4">
        <span className="text-emerald-500 font-black text-lg">
          ${customer.moneySpent.toFixed(2)}
        </span>
      </div>

      <div className="w-1/6 flex justify-end">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all">
          <Eye size={14} />
          View Profile
        </button>
      </div>
    </div>
  );
}