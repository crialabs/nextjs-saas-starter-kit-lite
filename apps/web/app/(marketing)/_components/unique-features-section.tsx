import { Button } from '@kit/ui/button';
import { Trans } from '@kit/ui/trans';
import { CheckCircle2 } from 'lucide-react';

export function UniqueFeaturesSection() {
  return (
    <section className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Conversion Section */}
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              <Trans i18nKey="marketing:uniqueFeatures.conversion.title" />
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              <Trans i18nKey="marketing:uniqueFeatures.conversion.description" />
            </p>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="relative isolate overflow-hidden rounded-2xl bg-gray-900 px-6 py-16 sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24 lg:py-32">
            <div className="mx-auto max-w-3xl lg:mx-0 lg:flex-auto lg:py-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <Trans i18nKey="marketing:uniqueFeatures.partnership.title" />
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                <Trans i18nKey="marketing:uniqueFeatures.partnership.description" />
              </p>
              
              <ul className="mt-10 grid grid-cols-1 gap-4 text-base leading-7 text-gray-300 sm:grid-cols-2">
                {[
                  'support',
                  'dedicatedManager',
                  'consulting',
                  'humanSupport',
                ].map((benefit, index) => (
                  <li key={index} className="flex gap-x-3">
                    <CheckCircle2 className="h-6 w-5 flex-none text-white" />
                    <span>
                      <Trans i18nKey={`marketing:uniqueFeatures.partnership.benefits.${benefit}`} />
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 flex">
                <Button
                  variant="secondary"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  <Trans i18nKey="marketing:uniqueFeatures.partnership.cta" />
                </Button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-16">
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
