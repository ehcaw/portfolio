"use client";

import { useMemo } from "react";
import { ProjectImages } from "./project-images";

interface MarkdownRendererProps {
  content: string;
  images?: string[];
  projectName?: string;
  githubUrl?: string;
}

export function MarkdownRenderer({
  content,
  images,
  projectName,
  githubUrl,
}: MarkdownRendererProps) {
  const htmlContent = useMemo(() => {
    // Simple markdown parser - you can replace this with a more robust solution like react-markdown
    let html = content
      // Headers
      .replace(
        /^### (.*$)/gim,
        '<h3 class="text-lg font-semibold mt-6 mb-3">$1</h3>',
      )
      .replace(
        /^## (.*$)/gim,
        '<h2 class="text-xl font-semibold mt-8 mb-4">$1</h2>',
      )
      .replace(/^# (.*$)/gim, (match, title) => {
        if (githubUrl) {
          return `<h1 class="text-2xl font-bold mt-8 mb-6">${title} - <a href="${githubUrl}" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline font-medium" target="_blank" rel="noopener noreferrer">github</a></h1>`;
        }
        return `<h1 class="text-2xl font-bold mt-8 mb-6">${title}</h1>`;
      })

      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')

      // Code blocks
      .replace(/```[\s\S]*?```/g, (match) => {
        const code = match.slice(3, -3).trim();
        return `<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code class="font-mono text-sm">${code}</code></pre>`;
      })

      // Inline code
      .replace(
        /`([^`]+)`/g,
        '<code class="bg-muted px-1 py-0.5 rounded text-sm font-mono">$1</code>',
      )

      // Images
      .replace(
        /!\[([^\]]*)\]\(([^)]+)\)/g,
        '<img src="$2" alt="$1" class="max-w-full h-auto rounded-lg my-4 mx-auto block" loading="lazy" />',
      )

      // Links
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline font-medium" target="_blank" rel="noopener noreferrer">$1</a>',
      )

      // Lists
      .replace(
        /^- (.*$)/gim,
        '<ul class="list-disc list-inside ml-4 mb-4"><li>$1</li></ul>',
      )
      .replace(/<\/ul>\s*<ul[^>]*>/g, "") // Merge consecutive lists

      // Horizontal rules
      .replace(/^---$/gim, '<hr class="border-border my-6" />')

      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(
        /^\*([^*].*)\*$/gim,
        '<p class="text-muted-foreground italic text-center my-6">$1</p>',
      );

    // Wrap in paragraph tags
    if (!html.startsWith("<")) {
      html = '<p class="mb-4">' + html + "</p>";
    }

    return html;
  }, [content, githubUrl]);

  // Split content to inject images before final thoughts
  const shouldShowImages = images && images.length > 0;

  if (shouldShowImages) {
    // Look for the last horizontal rule followed by italicized text
    const hrPattern = /<hr[^>]*>/g;
    const matches = [...htmlContent.matchAll(hrPattern)];

    if (matches.length > 0) {
      const lastHrMatch = matches[matches.length - 1];
      const beforeImages = htmlContent.substring(0, lastHrMatch.index);
      const afterImages = htmlContent.substring(lastHrMatch.index!);

      return (
        <div className="prose prose-sm max-w-none">
          <div dangerouslySetInnerHTML={{ __html: beforeImages }} />
          <ProjectImages images={images} projectName={projectName} />
          <div dangerouslySetInnerHTML={{ __html: afterImages }} />
        </div>
      );
    }

    // Fallback: if no HR found, add images at the end
    return (
      <div className="prose prose-sm max-w-none">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <ProjectImages images={images} projectName={projectName} />
      </div>
    );
  }

  return (
    <div
      className="prose prose-sm max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
