import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    const resp = await request.json();
    const {email, lastName, firstName, company, message} = resp;
    console.log(resp);
    return NextResponse.json({email, lastName, firstName, company, message});
}

export async function GET(request:Request){
    return NextResponse.json(request.body);
}