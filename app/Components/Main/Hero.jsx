import HeroContent from "../sub/HeroContent";

function Hero() {
  return (
    <div className="flex relative flex-col h-full w-full">
      <video
        className="rotate-180  absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="assets/vidoes/blackhole.webm" type="video/webm" />

      </video>
        <HeroContent />
    </div>
  );
}

export default Hero;
