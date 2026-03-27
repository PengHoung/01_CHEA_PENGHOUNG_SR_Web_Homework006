import { Eye } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }) {
  const displayImage = product.imageUrl ? product.imageUrl : "/pc.jpg";

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-4 hover:shadow-xl transition-all group">
      <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-50">
        <Image
          width={400} 
          height={400}
          src={displayImage} 
          alt={product.name} 
          unoptimized
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
        />
  
        {!product.imageUrl && (
          <span className="absolute top-2 left-2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded-lg">
            Default Pic
          </span>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-bold text-slate-800 truncate">{product.name}</h3>
        <p className="text-pink-500 font-black text-xl">${product.price}</p>
        <p className="text-gray-400 text-xs line-clamp-2 h-8">{product.description}</p>
      </div>

      <button className="w-full mt-4 bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-pink-500 transition-colors">
        <Eye size={16} />
        View Product
      </button>
    </div>
  );
}