import { Button } from '@kit/ui/button';
import { Input } from '@kit/ui/input';
import { Label } from '@kit/ui/label';
import { Textarea } from '@kit/ui/textarea';
import { Trans } from '@kit/ui/trans';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <Trans i18nKey="marketing:contact.title" />
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            <Trans i18nKey="marketing:contact.description" />
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-800/50 sm:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Trans i18nKey="marketing:contact.form.name" />
                  </Label>
                  <div className="mt-1">
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      placeholder={String(
                        <Trans i18nKey="marketing:contact.form.namePlaceholder" />
                      )}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Trans i18nKey="marketing:contact.form.email" />
                  </Label>
                  <div className="mt-1">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder={String(
                        <Trans i18nKey="marketing:contact.form.emailPlaceholder" />
                      )}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Trans i18nKey="marketing:contact.form.subject" />
                  </Label>
                  <div className="mt-1">
                    <Input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Trans i18nKey="marketing:contact.form.message" />
                  </Label>
                  <div className="mt-1">
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  type="submit"
                  className="w-full justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <Trans i18nKey="marketing:contact.form.submit" />
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-10 lg:mt-0">
            <div className="space-y-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 p-8 dark:from-gray-800 dark:to-gray-800/50">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                <Trans i18nKey="marketing:contact.info.title" />
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                <Trans i18nKey="marketing:contact.info.description" />
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <Trans i18nKey="marketing:contact.info.address" />
                  </p>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <Trans i18nKey="marketing:contact.info.phone" />
                  </p>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <Trans i18nKey="marketing:contact.info.email" />
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                  <Trans i18nKey="marketing:contact.hours.title" />
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <Trans i18nKey="marketing:contact.hours.description" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
