import antdZH from 'antd/lib/locale-provider/zh_CN';
import antdAr from 'antd/lib/locale-provider/ar_EG';
import antdEn from 'antd/lib/locale-provider/en_US';
import antdFr from 'antd/lib/locale-provider/fr_FR';

import zh from './translations/zh';
import en from './translations/en';
import ar from './translations/ar';
import fr from './translations/fr';

export const antMessages = {
  'zh': antdZH,
  'en': antdEn,
  'ar': antdAr,
  'fr': antdFr
};

export const messages = {
  'zh': zh,
  'en': en,
  'ar': ar,
  'fr': fr
};

export const LOCALES_LANGS = {
  'zh': '中文',
  'en': 'English',
  'ar': 'العربية',
  'fr': 'Français',
};

export const DEFAULT_LOCALE = 'en';

