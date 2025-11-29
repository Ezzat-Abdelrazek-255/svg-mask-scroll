import SVGMaskVideo from "@/components/svg-mask-video";

export default function Home() {
  return (
    <div>
      <div className="min-h-svh bg-foreground text-background font-sans uppercase text-[max(3.2rem,12vw)] px-[8vw] leading-[85%] text-center grid place-content-center tracking-tight">
        <h1>Narratives Rule The World</h1>
      </div>
      <SVGMaskVideo />
      <div className="min-h-[125svh] bg-background z-[-1]"></div>
      <div className="min-h-[120svh] bg-foreground text-background font-sans uppercase text-[max(3.2rem,12vw)] leading-[85%] text-center grid place-content-center relative z-10 px-[8vw] tracking-tight pt-[20svh]">
        Stories Shape How We Live
      </div>
    </div>
  );
}
