import { Button } from '@kit/ui/button';
import { Trans } from '@kit/ui/trans';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <Trans i18nKey="marketing:hero.title" />
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
            <Trans i18nKey="marketing:hero.subtitle" />
          </p>
          
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            <Trans i18nKey="marketing:hero.description" />
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="#contact" className="flex items-center gap-2">
                <Trans i18nKey="marketing:hero.cta" />
              </Link>
            </Button>
            
            <div className="text-sm text-muted-foreground">
              <Trans i18nKey="marketing:hero.supportText" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      </div>
    </section>
  );
}
