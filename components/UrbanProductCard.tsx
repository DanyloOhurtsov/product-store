import Image from "next/image";
import { ProductCardProps } from "./ProductCard";

export function UrbanProductCard({
  product,
  fonts,
}: Omit<ProductCardProps, "themeId">) {
  return (
    <article
      className="flex flex-col overflow-hidden border-4 h-full cursor-pointer"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "8px 8px 0 0 #1E1C10",
        maxWidth: 384,
      }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden border-b-4 group/img"
        style={{
          backgroundColor: "#F5F0EA",
          aspectRatio: "1 / 1",
          borderColor: "var(--border)",
        }}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain p-6 transition-transform duration-300 group-hover/img:scale-105"
        />
      </div>
      {/* Description */}
      <div className="flex flex-col flex-1 p-6 sm:p-6">
        <div className="flex items-start justify-between gap-2 mb-2 min-h-[60px]">
          <h2
            className="text-2xl font-bold uppercase leading-[1.875rem] tracking-tighter line-clamp-2"
            style={{ color: "var(--text)", fontFamily: fonts.heading }}
          >
            {product.title}
          </h2>
          <span
            className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold border-black border-2"
            style={{
              backgroundColor: "var(--badge)",
              color: "var(--badge-text)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.23125 11.0833L3.17917 6.98542L0 4.22917L4.2 3.86458L5.83333 0L7.46667 3.86458L11.6667 4.22917L8.4875 6.98542L9.43542 11.0833L5.83333 8.91042L2.23125 11.0833Z"
                fill="#1E1C10"
              />
            </svg>
            {product.rating.toFixed(1)}
          </span>
        </div>
        {product.description && (
          <p
            className="text-base leading-relaxed font-normal line-clamp-3 mb-4 flex-1"
            style={{ color: "var(--text-muted)" }}
          >
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between gap-3 mt-auto pt-6">
          <span
            className="text-3xl font-black leading-9"
            style={{ color: "var(--text)", fontFamily: fonts.heading }}
          >
            $
            {product.price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
          <button
            className="inline-flex items-center leading-5 gap-1.5 px-4 py-3 text-base font-black uppercase border-2 transition-all duration-200 hover:brightness-110 hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#1E1C10] active:translate-y-0 active:shadow-[4px_4px_0_0_#1E1C10]"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              borderColor: "var(--text)",
              boxShadow: "4px 4px 0 0 #1E1C10",
            }}
          >
            Add to Cart
            <Image src="/shoping_cart.svg" alt="" width={20} height={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
