import { Trans } from '@kit/ui/trans';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

export function WhyChooseUsSection() {
  const features = [
    {
      icon: '🚀',
      title: 'marketing:whyChooseUs.features.velocity.title',
      description: 'marketing:whyChooseUs.features.velocity.description',
    },
    {
      icon: '⚡',
      title: 'marketing:whyChooseUs.features.stability.title',
      description: 'marketing:whyChooseUs.features.stability.description',
    },
    {
      icon: '🔒',
      title: 'marketing:whyChooseUs.features.security.title',
      description: 'marketing:whyChooseUs.features.security.description',
    },
    {
      icon: '📈',
      title: 'marketing:whyChooseUs.features.scalability.title',
      description: 'marketing:whyChooseUs.features.scalability.description',
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <Trans i18nKey="marketing:whyChooseUs.title" />
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            <Trans i18nKey="marketing:whyChooseUs.description" />
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl bg-gray-50/50 p-8 text-center dark:bg-gray-800/50"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  <Trans i18nKey={feature.title} />
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                  <Trans i18nKey={feature.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
