import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from './markdown-styles.module.css';   



interface MarkdownRendererProps {
  markdown: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  return (
    <div className={styles.reactMarkDown}> 
    <div className="markdown-container">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      <style jsx>{`
        .markdown-container {
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        pre {
          background: #f6f8fa;
          padding: 1rem;
          border-radius: 5px;
          overflow-x: auto;
        }
        code {
          background: #f0f0f0;
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: "Courier New", monospace;
        }
      `}</style>
    </div>
    </div>
  );
};

export default MarkdownRenderer;
