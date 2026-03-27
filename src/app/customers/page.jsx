import SearchComponent from "../component/SearchComponent";
import CustomerCard from "../component/CustomerCardComponent";

async function fetchCustomers() {
  const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/customers", {
    cache: 'no-store' 
  });
  const data = await res.json();
  return data.payload; 
}

export default async function CustomerPage({ searchParams }) {
  const allCustomers = await fetchCustomers();
  const params = await searchParams;
  const query = params?.query?.toLowerCase() || "";
  const filteredCustomers = allCustomers?.filter((customer) => {
    const fullName = `${customer.firstName} ${customer.lastName}`.toLowerCase();
    return fullName.includes(query);
  });

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
          List of All Customer
        </h1>
        <SearchComponent placeholder="Search customers..." />
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50/50 border-b border-gray-100">
          <span className="w-1/3 text-xs font-bold text-slate-500 uppercase">Customer Name</span>
          <span className="w-1/4 text-xs font-bold text-slate-500 uppercase">Birthdate</span>
          <span className="w-1/4 text-xs font-bold text-slate-500 uppercase">Amount Spent</span>
          <span className="w-1/6 text-right text-xs font-bold text-slate-500 uppercase">Action</span>
        </div>

        <div className="divide-y divide-gray-50">
          {filteredCustomers?.length > 0 ? (
            filteredCustomers.map((c) => (
              <CustomerCard key={c.customerId} customer={c} />
            ))
          ) : (
            <p className="p-10 text-center text-gray-400">
              No customers found for &quot;{query}&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}