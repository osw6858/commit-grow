'use client';

import React, { useState } from 'react';

const OllamaChat: React.FC = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setIsLoading(true);
        try {
            const res = await fetch('/api/ollama', {
                method: 'POST',
                body: JSON.stringify({ message: input }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'API request failed');
            }

            const data = await res.json();
            setResponse(data.message.content);
        } catch (error) {
            console.error('Error:', error);
            // @ts-ignore
            setResponse(`Error occurred: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Ollama Chat</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Ollama something..."
                    className="w-full p-2 border border-gray-300 rounded"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                    disabled={isLoading}
                >
                    {isLoading ? 'Thinking...' : 'Send'}
                </button>
            </form>
            {response && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    <h2 className="font-semibold mb-2">Response:</h2>
                    <div>{response}</div>
                </div>
            )}
        </div>
    );
};

export default OllamaChat;