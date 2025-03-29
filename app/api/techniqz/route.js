import { NextResponse } from "next/server";
import MongoDBService from "@/lib/dbConnect";

// GET /api/techniqz
export async function GET() {
  try {
    const posts = await new MongoDBService().findAllData({}, "Techniqz");
    return NextResponse.json({ success: true, data: posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// POST /api/techniqz
export async function POST(request) {
  try {
    const body = await request.json();
    const posts = await new MongoDBService().insertData(body, "Techniqz");
    return NextResponse.json({ success: true, data: posts }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
