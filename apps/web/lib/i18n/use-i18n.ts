'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export type Language = 'en' | 'pt-BR';

interface UseI18nReturn {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

/**
 * Custom hook to handle i18n functionality
 */
export function useI18n(): UseI18nReturn {
  const router = useRouter();
  const pathname = usePathname() || '';

  // Extract language from URL path (e.g., /en/... or /pt-BR/...)
  const language = useMemo<Language>(() => {
    if (typeof window === 'undefined') return 'en'; // Default to 'en' on server
    const langFromPath = pathname.split('/')[1] as Language;
    return ['en', 'pt-BR'].includes(langFromPath) ? langFromPath : 'en';
  }, [pathname]);

  // Function to change the language
  const changeLanguage = useCallback((newLanguage: Language) => {
    if (!pathname) return;
    const newPath = pathname.replace(/^\/(en|pt-BR)/, `/${newLanguage}`);
    
    // Always use router.push for client-side navigation
    if (typeof window !== 'undefined') {
      window.location.href = newPath;
    }
  }, [pathname]);

  return {
    language,
    changeLanguage,
  };
}
