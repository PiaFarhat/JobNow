import Image from "next/image";

export default function HeroDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <Image
        src="/icons/jobnow-decoration-search.svg"
        alt=""
        width={84}
        height={84}
        draggable={false}
        className="
          absolute left-[15.09%] top-[24.1%]
          h-[84px] w-[84px]
          select-none
        "
      />

      <Image
        src="/icons/jobnow-decoration-stats.svg"
        alt=""
        width={89}
        height={89}
        draggable={false}
        className="
          absolute right-[12.6%] top-[41.41%]
          h-[89px] w-[89px]
          select-none
        "
      />

      <Image
        src="/icons/jobnow-decoration-shield.svg"
        alt=""
        width={87}
        height={87}
        draggable={false}
        className="
          absolute left-[10.45%] top-[62.48%]
          h-[87px] w-[87px]
          select-none
        "
      />
    </div>
  );
}