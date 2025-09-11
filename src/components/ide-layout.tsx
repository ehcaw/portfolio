"use client";

import { useState } from "react";
import { FileTree } from "./file-tree";
import { MarkdownRenderer } from "./markdown-renderer";
import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Github, Mail } from "lucide-react";

export function IDELayout() {
  const [selectedFile, setSelectedFile] = useState<string>("about");
  const [selectedContent, setSelectedContent] = useState<string>(
    portfolioData.children?.find((child) => child.id === "about")?.content ||
      "",
  );
  const [isDark, setIsDark] = useState(false);

  const handleFileSelect = (fileId: string, content: string) => {
    setSelectedFile(fileId);
    setSelectedContent(content);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const getFileName = () => {
    const findFile = (node: any): string => {
      if (node.id === selectedFile) return node.name;
      if (node.children) {
        for (const child of node.children) {
          const result = findFile(child);
          if (result) return result;
        }
      }
      return "";
    };
    return findFile(portfolioData) || "about.md";
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <div className="h-12 bg-sidebar border-b border-sidebar-border flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm font-mono text-sidebar-foreground ml-4">
            wache
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open("https://github.com", "_blank")}
            className="h-8 w-8 p-0"
          >
            <Github className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              window.open("mailto:ryannguyenc@gmail.com", "_blank")
            }
            className="h-8 w-8 p-0"
          >
            <Mail className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-8 w-8 p-0"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 bg-sidebar border-r border-sidebar-border flex flex-col">
          <div className="p-3 border-b border-sidebar-border">
            <h2 className="text-sm font-semibold text-sidebar-foreground">
              FILE EXPLORER
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <FileTree
              node={portfolioData}
              selectedFile={selectedFile}
              onFileSelect={handleFileSelect}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="h-10 bg-card border-b border-border flex items-center px-4">
            <div className="flex items-center gap-2 bg-background px-3 py-1 rounded-t-md border-t border-l border-r border-border">
              <span className="text-sm font-mono">{getFileName()}</span>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-8 bg-background">
            <div className="max-w-4xl mx-auto">
              <MarkdownRenderer content={selectedContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
