'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import type { User } from '@supabase/supabase-js';

import { PersonalAccountDropdown } from '@kit/accounts/personal-account-dropdown';
import { useSignOut } from '@kit/supabase/hooks/use-sign-out';
import { useUser } from '@kit/supabase/hooks/use-user';
import { Button } from '@kit/ui/button';
import { If } from '@kit/ui/if';
import { Trans } from '@kit/ui/trans';

import { LanguageSwitch } from './language-switch';
import featuresFlagConfig from '~/config/feature-flags.config';
import pathsConfig from '~/config/paths.config';

const ModeToggle = dynamic(() =>
  import('@kit/ui/mode-toggle').then((mod) => ({
    default: mod.ModeToggle,
  })),
);

const paths = {
  home: pathsConfig.app.home,
};

const features = {
  enableThemeToggle: featuresFlagConfig.enableThemeToggle,
};

export function SiteHeaderAccountSection({
  user,
}: React.PropsWithChildren<{
  user: User | null;
}>) {
  if (!user) {
    return <AuthButtons />;
  }

  return <SuspendedPersonalAccountDropdown user={user} />;
}

function SuspendedPersonalAccountDropdown(props: { user: User | null }) {
  const signOut = useSignOut();
  const user = useUser(props.user);
  const userData = user.data ?? props.user ?? null;

  if (userData) {
    return (
      <PersonalAccountDropdown
        showProfileName={false}
        paths={paths}
        features={features}
        user={userData}
        signOutRequested={() => signOut.mutateAsync()}
      />
    );
  }

  return <AuthButtons />;
}

function AuthButtons() {
  return (
    <div className="flex items-center space-x-2">
      <If condition={features.enableThemeToggle}>
        <ModeToggle />
      </If>

      <LanguageSwitch />

      <Button asChild variant="outline">
        <Link href={pathsConfig.auth.signIn}>
          <Trans i18nKey="auth:signIn" />
        </Link>
      </Button>

      <Button asChild>
        <Link href={pathsConfig.auth.signUp}>
          <Trans i18nKey="auth:signUp" />
        </Link>
      </Button>
    </div>
  );
}
