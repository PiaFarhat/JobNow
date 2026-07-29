import Image from "next/image";

export default function HeroMobileDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <Image
        src="/icons/jobnow-decoration-search.svg"
        alt=""
        width={58}
        height={58}
        draggable={false}
        className="
          absolute left-[16%] top-[17%]
          h-[58px] w-[58px] select-none
          motion-safe:[animation:hero-float_4.2s_ease-in-out_infinite]
          motion-safe:[animation-delay:-0.4s]
        "
      />

      <Image
        src="/icons/jobnow-decoration-stats.svg"
        alt=""
        width={62}
        height={62}
        draggable={false}
        className="
          absolute right-[14%] top-[33%]
          h-[62px] w-[62px] select-none
          motion-safe:[animation:hero-float_4.8s_ease-in-out_infinite]
          motion-safe:[animation-delay:-1.6s]
        "
      />

      <Image
        src="/icons/jobnow-decoration-shield.svg"
        alt=""
        width={60}
        height={60}
        draggable={false}
        className="
          absolute bottom-[13%] left-[40%]
          h-[60px] w-[60px] select-none
          motion-safe:[animation:hero-float_4.5s_ease-in-out_infinite]
          motion-safe:[animation-delay:-2.7s]
        "
      />
    </div>
  );
}