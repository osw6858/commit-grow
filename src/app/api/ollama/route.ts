import { NextRequest, NextResponse } from 'next/server';
import { Ollama } from 'ollama';

const OLLAMA_SERVER = process.env.NEXT_PUBLIC_OLLAMA_SERVER;

export async function POST(req: NextRequest) {
    try {
        // 기본적인 인증 체크
        // if (!req.headers.get('authorization')) {
        //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        // }

        const body = await req.json();
        const { message } = body;

        const ollama = new Ollama({
            host: OLLAMA_SERVER,
        });

        const response = await ollama.chat({
            model: 'llama3.1',
            messages: [{ role: 'user', content: message }],
        });

        return NextResponse.json(response);
    } catch (error) {
        console.error('Server error:', error);
        // @ts-ignore
        return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
    }
}