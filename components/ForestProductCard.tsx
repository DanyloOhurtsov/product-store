import Image from "next/image";
import type { Product } from "../lib/types";

interface ForestProductCardProps {
  product: Product;
}

export function ForestProductCard({ product }: ForestProductCardProps) {
  return (
    <article className="flex flex-col items-start gap-6 justify-self-stretch max-w-[272px] cursor-pointer group">
      <div
        className="relative flex flex-col justify-center items-start self-stretch overflow-hidden aspect-[4/5] max-h-[340px]"
        style={{ backgroundColor: "#051e12" }}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
      <div className="flex flex-col gap-y-[3px]">
        <h3
          className="text-sm font-medium leading-5 tracking-[-0.35px]"
          style={{ color: "#C9EED6", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {product.title}
        </h3>
        <p
          className="text-[13px] leading-[19.5px] font-normal"
          style={{ color: "#90B39D", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} &bull; {product.rating.toFixed(1)} ({Math.floor(Math.random() * 200 + 20)})
        </p>
      </div>
    </article>
  );
}
