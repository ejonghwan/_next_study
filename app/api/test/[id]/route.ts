// import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {

    // const searchParams = useSearchParams();
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query')



    const res = {
        message: 'test list',
        data: {
            id: params.id,
            title: 'test title',
            isDone: false,
            query: query
        }
    }

    // 이것도 이거 끝나고 보자!
    // https://www.youtube.com/watch?v=WlxcujsvcIY

    // http://localhost:3000/api/test/123?query=ghhh
    // res
    // {
    //     "message": "test list",
    //     "data": {
    //         "id": "123",
    //         "title": "test title",
    //         "isDone": false,
    //         "query": "ghhh"
    //     }
    // }

    return NextResponse.json(res, { status: 200 })
}