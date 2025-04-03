import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function displayCurrentLocale(locale: string) {
  switch (locale) {
    case "en-US":
      return "A";
    case "ja":
      return "あ";
    case "zh-CN":
      return "简";
    case "zh-TW":
      return "繁";
  }
}

export async function parseMarkdown(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .use(remarkGfm)
    .use(rehypeSanitize)
    .process(markdown);

  return result;
}
