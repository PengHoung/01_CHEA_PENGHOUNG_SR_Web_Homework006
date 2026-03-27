import ProductCard from "../component/ProductsCardComponent";
import SearchComponent from "../component/SearchComponent";

async function fetchProducts() {
  const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/products", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.payload;
}

export default async function ProductsPage({ searchParams }) {
  const allProducts = await fetchProducts();
  const params = await searchParams;
  const query = params?.query?.toLowerCase() || "";
  const filteredProducts = allProducts?.filter((product) => {
    const nameToSearch = (product?.productName || product?.name || "").toLowerCase();
    return nameToSearch.includes(query);
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-800 uppercase">List of All Product</h1>
          <p className="text-slate-400">
            Showing {filteredProducts?.length || 0} items from the collection
          </p>
        </div>
        <SearchComponent placeholder="Search products..." />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.productId || item.id} product={item} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 text-lg">
              No products found matching &quot;{query}&quot;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}