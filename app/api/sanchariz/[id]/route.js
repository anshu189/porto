import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import MongoDBService from "@/lib/dbConnect"; // Ensure this file exports your MongoDBService class

// GET /api/sanchariz/[id]
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const service = new MongoDBService();
    const post = await service.findData({ _id: new ObjectId(String(id))    }, "Sanchariz");
    if (!post) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// PATCH /api/sanchariz/[id] - Partial update
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const service = new MongoDBService();
    const result = await service.updateData({ _id: new ObjectId(String(id)) }, body, "Sanchariz");
    if (!result || result.modifiedCount === 0) {
      return NextResponse.json({ success: false, error: "Post not found or not updated" }, { status: 404 });
    }
    const updatedPost = await service.findData({ _id: new ObjectId(id) }, "Sanchariz");
    return NextResponse.json({ success: true, data: updatedPost }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// DELETE /api/sanchariz/[id]
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const service = new MongoDBService();
    const result = await service.deleteData({ _id: new ObjectId(String(id)) }, "Sanchariz");
    if (!result || result.deletedCount === 0) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
