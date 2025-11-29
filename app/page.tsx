import SVGMaskVideo from "@/components/svg-mask-video";

export default function Home() {
  return (
    <div>
      <div className="min-h-svh"></div>
      <SVGMaskVideo />
      <div className="min-h-svh bg-background z-[-1]"></div>
      <div className="min-h-svh relative z-10 bg-background"></div>
    </div>
  );
}
