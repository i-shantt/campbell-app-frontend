import type { NextApiRequest, NextApiResponse } from 'next';

/*
interface OpenAIResponse {
  choices?: { text: string }[];
  error?: string;
}
*/

interface VertextSearch {
  text: string ;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { prompt } = req.body;
  console.log ("######## completion api prompt: " + prompt)

  if (!prompt || typeof prompt !== 'string') {
    res.status(400).json({ error: 'Prompt is required and must be a string' });
    return;
  }

  try {
/*
    const response = await fetch('http://127.0.0.1:8080/load_gemini_follow-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
      body: JSON.stringify({
        followupprompt: prompt,
      }),
    });
*/
    const response = await fetch('http://127.0.0.1:8000/load_search_results', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
      body: JSON.stringify({
        "vais_search_query": "Custom",
        "custom_query": prompt
      }),
    });


    const data = await response.text();
    console.log ("######## completion api response from server: " + data)
    if (response.ok) {
      console.log ("######## completion api response from server - 200 " + data)
      res.status(200).json({text: data});

    } else {
      console.log ("completion api 500 response from server 1: ")
      
      res.status(500).json({ error: data || 'Failed to fetch completion' });
    }
  } catch (error) {
    console.log ("completion api 500 response from server: ")

    res.status(500).json({ error: 'Failed to fetch completion' });
  }
}

