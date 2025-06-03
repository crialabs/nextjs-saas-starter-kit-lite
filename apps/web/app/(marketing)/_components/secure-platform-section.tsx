import { ShieldCheck, Lock, Server, Globe } from 'lucide-react';
import { Trans } from '@kit/ui/trans';

const features = [
  {
    name: 'marketing:securePlatform.features.0',
    description: 'marketing:securePlatform.descriptions.0',
    icon: ShieldCheck,
  },
  {
    name: 'marketing:securePlatform.features.1',
    description: 'marketing:securePlatform.descriptions.1',
    icon: Lock,
  },
  {
    name: 'marketing:securePlatform.features.2',
    description: 'marketing:securePlatform.descriptions.2',
    icon: Server,
  },
  {
    name: 'marketing:securePlatform.features.3',
    description: 'marketing:securePlatform.descriptions.3',
    icon: Globe,
  },
];

export function SecurePlatformSection() {
  return (
    <section className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            <Trans i18nKey="marketing:securePlatform.title" />
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <Trans i18nKey="marketing:securePlatform.description" />
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            <Trans i18nKey="marketing:securePlatform.subtitle" />
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <Trans i18nKey={feature.name} />
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                    <Trans i18nKey={feature.description} />
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-white/10 hover:ring-gray-900/20 dark:hover:ring-white/20">
            <Trans i18nKey="marketing:securePlatform.note" />{' '}
            <a href="#contact" className="font-semibold text-primary">
              <Trans i18nKey="marketing:securePlatform.contactLink" /> <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
