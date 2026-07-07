import { NextResponse } from "next/server";
import db from "@/lib/db";
import { User } from "@/types/user";

export async function GET() {
    const [rows] = await db.query("SELECT * FROM users");
    return NextResponse.json(rows);
}

export async function POST(request: Request) {
    const body:User = await request.json();
    await db.query("INSERT INTO users (name,email) VALUES (?,?)",[body.name,body.email]);
    return NextResponse.json({message:"User created successfully"});

}