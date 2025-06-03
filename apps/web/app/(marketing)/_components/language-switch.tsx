'use client';

import dynamic from 'next/dynamic';
import { Button } from '@kit/ui/button';
import { Languages } from 'lucide-react';

// This component will only be rendered on the client side
export const LanguageSwitch = dynamic(
  () => import('./language-switch-client').then((mod) => mod.LanguageSwitchClient),
  {
    ssr: false,
    loading: () => (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <span className="sr-only">Loading language switcher</span>
      </Button>
    ),
  }
);
