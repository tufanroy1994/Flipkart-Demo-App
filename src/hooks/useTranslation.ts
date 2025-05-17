import i18nStrings from '../locales/i18nStrings';
import {useAppSelector} from './reduxHooks';

export const useTranslation = () => {
  const selectedLanguage = useAppSelector(
    store => store.LanguageReducer.selectedLanguage,
  );

  const fallbackLanguage = 'en'; // fallback for showing text only

  const t = (key: keyof typeof i18nStrings) => {
    const lang = selectedLanguage ?? fallbackLanguage;
    return i18nStrings[key][lang] || '';
  };

  return {t};
};
