"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  File,
  Folder,
  FolderOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { FileNode } from "@/lib/portfolio-data";

interface FileTreeProps {
  node: FileNode;
  level?: number;
  selectedFile?: string;
  onFileSelect: (fileId: string, content: string) => void;
}

export function FileTree({
  node,
  level = 0,
  selectedFile,
  onFileSelect,
}: FileTreeProps) {
  const [isExpanded, setIsExpanded] = useState(level < 2); // Auto-expand first two levels

  const handleClick = () => {
    if (node.type === "folder") {
      setIsExpanded(!isExpanded);
    } else if (node.content) {
      onFileSelect(node.id, node.content);
    }
  };

  const isSelected = selectedFile === node.id;

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-1 px-2 py-1 text-sm cursor-pointer hover:bg-sidebar-accent/50 rounded-sm transition-colors",
          isSelected && "bg-sidebar-accent text-sidebar-accent-foreground",
          "select-none",
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={handleClick}
      >
        {node.type === "folder" && (
          <div className="flex items-center">
            {isExpanded ? (
              <ChevronDown className="h-3 w-3 mr-1" />
            ) : (
              <ChevronRight className="h-3 w-3 mr-1" />
            )}
            {isExpanded ? (
              <FolderOpen className="h-4 w-4 mr-2 text-blue-500" />
            ) : (
              <Folder className="h-4 w-4 mr-2 text-blue-500" />
            )}
          </div>
        )}
        {node.type === "file" && (
          <File className="h-4 w-4 mr-2 ml-4 text-gray-500" />
        )}
        <span className="truncate">{node.name}</span>
      </div>

      {node.type === "folder" && isExpanded && node.children && (
        <div>
          {node.children.map((child) => (
            <FileTree
              key={child.id}
              node={child}
              level={level + 1}
              selectedFile={selectedFile}
              onFileSelect={onFileSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
