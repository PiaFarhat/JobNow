import Image from "next/image";

export default function HeroMobileDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <Image
        src="/icons/jobnow-decoration-search.svg"
        alt=""
        width={52}
        height={52}
        draggable={false}
        className="absolute left-[14%] top-[7%] h-[52px] w-[52px] select-none"
      />

      <Image
        src="/icons/jobnow-decoration-stats.svg"
        alt=""
        width={55}
        height={55}
        draggable={false}
        className="absolute right-[10%] top-[12%] h-[55px] w-[55px] select-none"
      />

      <Image
        src="/icons/jobnow-decoration-shield.svg"
        alt=""
        width={54}
        height={54}
        draggable={false}
        className="absolute left-[11%] top-[34%] h-[54px] w-[54px] select-none"
      />
    </div>
  );
}