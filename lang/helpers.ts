import { moment } from 'obsidian';
import en from './locale/en';
import ja from './locale/ja';

const localeMap: { [key: string]: any } = {
	en,
	ja,
};

export function t(str: keyof typeof en, vars?: { [key: string]: string }): string {
	const locale = moment.locale();
	const translations = localeMap[locale] || localeMap.en;
	let translation = translations[str] || en[str] || str;

	if (vars) {
		for (const key in vars) {
			translation = translation.replace(new RegExp(`\{${key}\}`, 'g'), vars[key]);
		}
	}

	return translation;
}
