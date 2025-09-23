"use client";

import { useState } from "react";
import { FileTree } from "./file-tree";
import { MarkdownRenderer } from "./markdown-renderer";
import { portfolioData, FileNode } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Github, Mail, X, Menu } from "lucide-react";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    const findFile = (node: FileNode): string => {
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

  const getFileNodeById = (fileId: string): FileNode | null => {
    const findFile = (node: FileNode): FileNode | null => {
      if (node.id === fileId) return node;
      if (node.children) {
        for (const child of node.children) {
          const result = findFile(child);
          if (result) return result;
        }
      }
      return null;
    };
    return findFile(portfolioData);
  };

  const activeTab = tabs.find((tab) => tab.id === activeTabId);
  const activeContent = activeTab?.content || "";
  const activeFileNode = activeTab ? getFileNodeById(activeTab.id) : null;

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <div className="h-12 bg-sidebar border-b border-sidebar-border flex items-center justify-between px-3 md:px-4 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex gap-1 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs md:text-sm font-mono text-sidebar-foreground ml-2 md:ml-4 truncate">
            wache
          </span>
        </div>

        <div className="flex items-center gap-1 md:gap-2 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="h-8 w-8 p-0 md:hidden shrink-0"
          >
            <Menu className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open("https://github.com", "_blank")}
            className="h-7 w-7 md:h-8 md:w-8 p-0 shrink-0"
          >
            <Github className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              window.open("mailto:ryannguyenc@gmail.com", "_blank")
            }
            className="h-7 w-7 md:h-8 md:w-8 p-0 shrink-0"
          >
            <Mail className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-7 w-7 md:h-8 md:w-8 p-0 shrink-0"
          >
            {isDark ? (
              <Sun className="h-3 w-3 md:h-4 md:w-4" />
            ) : (
              <Moon className="h-3 w-3 md:h-4 md:w-4" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`w-80 bg-sidebar border-r border-sidebar-border flex flex-col fixed md:relative z-50 md:z-auto h-full md:h-auto transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-200 ease-in-out`}
        >
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
        <div className="flex-1 flex flex-col min-w-0">
          {/* Tab Bar */}
          <div className="h-10 bg-card border-b border-border flex items-center overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1 px-2 md:px-4">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`flex items-center gap-2 px-3 py-1 border-t border-l border-r border-border cursor-pointer group whitespace-nowrap flex-shrink-0 ${
                    activeTabId === tab.id
                      ? "bg-background border-b-background"
                      : "bg-card border-b-border hover:bg-background/50"
                  }`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  <span className="text-xs md:text-sm font-mono">
                    {tab.name}
                  </span>
                  {tabs.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeTab(tab.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 hover:bg-red-500/20 rounded p-0.5 transition-all flex-shrink-0"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto bg-background">
            <div className="w-full px-4 py-8 pb-16 md:px-8 md:py-8 md:pb-8">
              <div className="w-full max-w-[calc(100vw-2rem)] md:max-w-4xl mx-auto">
                <MarkdownRenderer
                  content={activeContent}
                  images={activeFileNode?.images}
                  projectName={activeFileNode?.name?.replace(".md", "")}
                  githubUrl={activeFileNode?.githubUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
