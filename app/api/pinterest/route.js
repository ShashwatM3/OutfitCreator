import { NextResponse } from 'next/server';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');
    if (!query) {
        return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const accessToken = process.env.PINTEREST_ACCESS_TOKEN;
    const endpoint = `https://api.pinterest.com/v5/search/pins?query=${encodeURIComponent(query)}&limit=4`;

    try {
        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch Pinterest data');
        }

        const data = await response.json();
        const images = data.items.map(item => item.media.images.original.url).slice(0, 4);

        return NextResponse.json({ images });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
