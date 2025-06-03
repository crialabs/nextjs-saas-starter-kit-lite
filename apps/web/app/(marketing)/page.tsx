import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon, LayoutDashboard } from 'lucide-react';

import {
  CtaButton,
  FeatureCard,
  FeatureGrid,
  FeatureShowcase,
  FeatureShowcaseIconContainer,
  Hero,
  Pill,
} from '@kit/ui/marketing';
import { Trans } from '@kit/ui/trans';

import { withI18n } from '~/lib/i18n/with-i18n';

import {
  ContactSection,
  HeroSection,
  SecurePlatformSection,
  UniqueFeaturesSection,
  WhyChooseUsSection,
} from './_components';

function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUsSection />
      <UniqueFeaturesSection />
      <SecurePlatformSection />
      <ContactSection />
    </main>
  );
}

export default withI18n(Home);
