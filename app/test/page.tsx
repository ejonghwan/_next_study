import { title } from "@/components/primitives";
import { Test } from '@/components/test';


const getData = async (): Promise<number> => {
	console.log('get data called')
	await new Promise(fn => setTimeout(fn, 3000))
	return 10
}


export default async function TestPage() {

	// 서버 사이드 안에 클라이언트 사이드를 두는 방식
	// 서버 컴포넌트 : 데이터  처리. 
	// 클라이언트 컴포넌트 :  이벤트나 훅, 애니메이션 처리

	// 서버컴포에서 클라컴포 호출은 그냥 호출하면 되는데 
	// 클라컴포에서 서버컴포 호출은 매개변수로 전달해줘야함.   


	const handleGetData = await getData();

	return (
		<div>
			<h1 className={title()}>Test Page</h1>
			<Test initialCount={handleGetData} >
				<p>서버 컴포넌트에서 쓴 텍스트를 클라이언트에서 가져옴</p>
			</Test>
		</div>
	);
}
