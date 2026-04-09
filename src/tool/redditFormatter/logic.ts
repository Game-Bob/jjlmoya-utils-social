export interface FormatterOptions {
  fixParagraphs: boolean;
  removeSpaces: boolean;
  removeInvisible: boolean;
  removeLinks: boolean;
}

export function processText(text: string, options: FormatterOptions): string {
  let result = text;
  if (options.removeInvisible) {
    result = result.replace(/[\u200B-\u200D\uFEFF]/g, '');
  }
  if (options.removeSpaces) {
    result = result.replace(/ {2,}/g, ' ');
  }
  if (options.removeLinks) {
    result = result.replace(/https?:\/\/[^\s]+/g, '');
  }
  if (options.fixParagraphs) {
    result = result.replace(/\n{2,}/g, '\n');
    result = result.replace(/\n/g, '\n\n');
  }
  return result.trim();
}
