"use client";

import { useState } from "react";
import { FileTree } from "./file-tree";
import { MarkdownRenderer } from "./markdown-renderer";
import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Github, Mail, X } from "lucide-react";

interface Tab {
  id: string;
  name: string;
  content: string;
}

export function IDELayout() {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: "about",
      name: "about.md",
      content:
        portfolioData.children?.find((child) => child.id === "about")
          ?.content || "",
    },
  ]);
  const [activeTabId, setActiveTabId] = useState<string>("about");
  const [isDark, setIsDark] = useState(false);

  const handleFileSelect = (fileId: string, content: string) => {
    // Check if tab already exists
    const existingTab = tabs.find((tab) => tab.id === fileId);
    if (existingTab) {
      setActiveTabId(fileId);
      return;
    }

    // Get file name
    const fileName = getFileNameById(fileId);

    // Add new tab
    const newTab: Tab = {
      id: fileId,
      name: fileName,
      content: content,
    };

    setTabs((prev) => [...prev, newTab]);
    setActiveTabId(fileId);
  };

  const closeTab = (tabId: string) => {
    const newTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(newTabs);

    // If we closed the active tab, switch to another one
    if (activeTabId === tabId && newTabs.length > 0) {
      setActiveTabId(newTabs[newTabs.length - 1].id);
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const getFileNameById = (fileId: string): string => {
    const findFile = (node: any): string => {
      if (node.id === fileId) return node.name;
      if (node.children) {
        for (const child of node.children) {
          const result = findFile(child);
          if (result) return result;
        }
      }
      return "";
    };
    return findFile(portfolioData) || "untitled";
  };

  const activeTab = tabs.find((tab) => tab.id === activeTabId);
  const activeContent = activeTab?.content || "";

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
              selectedFile={activeTabId}
              onFileSelect={handleFileSelect}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="h-10 bg-card border-b border-border flex items-center px-4 overflow-x-auto">
            <div className="flex items-center gap-1">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`flex items-center gap-2 px-3 py-1 border-t border-l border-r border-border cursor-pointer group ${
                    activeTabId === tab.id
                      ? "bg-background border-b-background"
                      : "bg-card border-b-border hover:bg-background/50"
                  }`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  <span className="text-sm font-mono truncate max-w-[150px]">
                    {tab.name}
                  </span>
                  {tabs.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeTab(tab.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 hover:bg-red-500/20 rounded p-0.5 transition-all"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-8 bg-background">
            <div className="max-w-4xl mx-auto">
              <MarkdownRenderer content={activeContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
