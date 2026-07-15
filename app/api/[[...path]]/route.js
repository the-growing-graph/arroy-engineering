import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

let cachedClient = null;
async function getDb() {
  if (cachedClient) return cachedClient.db(process.env.DB_NAME || 'arroyo_site');
  cachedClient = new MongoClient(process.env.MONGO_URL);
  await cachedClient.connect();
  return cachedClient.db(process.env.DB_NAME || 'arroyo_site');
}

function cors(res) {
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return res;
}

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 204 }));
}

export async function GET(request, { params }) {
  const p = (await params).path || [];
  const route = p.join('/');
  if (route === '' || route === 'health') {
    return cors(NextResponse.json({ ok: true, service: 'arroyo-engineering' }));
  }
  if (route === 'contacts') {
    try {
      const db = await getDb();
      const items = await db.collection('contacts').find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(100).toArray();
      return cors(NextResponse.json({ items }));
    } catch (e) {
      return cors(NextResponse.json({ items: [], error: e.message }, { status: 200 }));
    }
  }
  return cors(NextResponse.json({ error: 'Not found' }, { status: 404 }));
}

export async function POST(request, { params }) {
  const p = (await params).path || [];
  const route = p.join('/');
  try {
    const body = await request.json();
    if (route === 'contact' || route === 'quote') {
      if (!body.name || !body.email || !body.phone) {
        return cors(NextResponse.json({ error: 'Missing required fields' }, { status: 400 }));
      }
      const doc = {
        id: uuidv4(),
        ...body,
        createdAt: new Date().toISOString(),
        source: route === 'quote' ? 'quote_popup' : 'contact_form',
      };
      try {
        const db = await getDb();
        await db.collection('contacts').insertOne(doc);
      } catch (e) {
        // still return success so UX not blocked when DB is unavailable
        console.error('DB write failed:', e.message);
      }
      return cors(NextResponse.json({ ok: true, id: doc.id }));
    }
    return cors(NextResponse.json({ error: 'Not found' }, { status: 404 }));
  } catch (e) {
    return cors(NextResponse.json({ error: e.message }, { status: 500 }));
  }
}
