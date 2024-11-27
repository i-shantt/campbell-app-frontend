"use client"

import React, { useState } from 'react';
import MarkdownRenderer from '../markdown-renderer/markdown-renderer.component';
import SearchComponent from '../search/search.component';
interface ApiResponse {
    choices?: { text: string }[];
    error?: string;
  }

interface VertextSearch {
    text: string ;
    error?: string;
  }
const SearchResults: React.FC = () => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (prompt: string | undefined): Promise<void> => {
      if (!prompt) {
          return;
      }
    setLoading(true);
    setResponse('');
    setError(null);

    try {
      const res = await fetch('/api/completion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        const errorData: ApiResponse = await res.json();
        throw new Error(errorData.error || 'Failed to fetch the completion');
      }

      const data: VertextSearch = await res.json();
      setResponse(data.text);
    } catch (err) {
      setError((err as Error)?.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div style={{ padding: '20px' }}>
      <SearchComponent onSearch={handleSearch} />
      <div style={{ marginTop: '20px' }}>
        <h2>Results</h2>
        <MarkdownRenderer markdown={response || ''}/>
      </div>
    </div>
  );
};

export default SearchResults;
