'use client';

import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@kit/ui/button';
import type { Language } from '../../../lib/i18n/use-i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@kit/ui/dropdown-menu';
import { Languages } from 'lucide-react';

const languages: Array<{ code: Language; name: string }> = [
  { code: 'en', name: 'English' },
  { code: 'pt-BR', name: 'Português (BR)' },
];

function getCurrentLanguage(pathname: string): Language {
  if (!pathname) return 'en';
  const langFromPath = pathname.split('/')[1] as Language;
  return ['en', 'pt-BR'].includes(langFromPath) ? langFromPath : 'en';
}

export function LanguageSwitchClient() {
  const pathname = usePathname() || '';
  const currentLanguage = getCurrentLanguage(pathname);
  
  const changeLanguage = useCallback((newLanguage: Language) => {
    if (!pathname) return;
    const newPath = pathname.replace(/^\/(en|pt-BR)/, `/${newLanguage}`);
    window.location.href = newPath;
  }, [pathname]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Languages className="h-4 w-4" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={currentLanguage === lang.code ? 'bg-accent' : ''}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
