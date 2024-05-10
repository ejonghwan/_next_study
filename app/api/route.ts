import { NextRequest, NextResponse } from "next/server"
import { fetchTotos } from "@/data/firestore";

// 모든 할일 가져오기
export const GET = async (request: NextRequest) => {

    const fetchedTodos = await fetchTotos();

    console.log('???', fetchedTodos)

    const res = {
        message: 'hhh',
        data: fetchedTodos,
    }
    return NextResponse.json(res, { status: 201 })
}

