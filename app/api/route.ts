import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
    const res = {
        message: 'hhh',
        data: 'zzz',
    }
    return NextResponse.json(res, { status: 201 })
}

