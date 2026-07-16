import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function LinkedInPage() {
  return (
    <section id="linkedin" className="flex min-h-[60vh] flex-col items-center justify-center">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            LinkedIn
          </h1>
          <p className="text-muted-foreground text-lg">
            林迈正加油开垦那片荒原！
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
