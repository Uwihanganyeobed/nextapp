import NextResponse, { NextRequest } from "next/server";
import db from "@/lib/db";
import { User } from "@/types/user";

export async function GET(req: NextRequest,
    {params}: {params:Promise<{id:string}>}
) {
    const {id} = await params;
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?",[id]);
    return NextResponse.json(rows as User[]);
}

export async function PUT(req: NextRequest,
    {params}: {params:Promise<{id:string}>}
) {
    const {id} = await params;
    const body:User = await req.json();
    await db.query("UPDATE users SET name =?, email=? WHERE id =?"
        ,[body.name, body.email, id]);
    return NextResponse.json({message:"User updated successfully"});
}

export async function DELETE(req: NextRequest,
    {params}: {params:Promise<{id:string}>}
) {
    const {id} = await params;
    await db.query("DELETE FROM users WHERE id = ?",[id]);
    return NextResponse.json({message:"User deleted successfully"});
}