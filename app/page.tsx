"use client"

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useEffect } from "react";


interface Test {
	a: string;
	b: number;
}

// const aa = ({ a, b }: Test) => {
const aa = ({ a, b }: { a: string, b: number }) => {
	console.log('a?', a)
}
aa({ a: '1', b: 3 })



interface Aa {
	a: string;
}
interface Bb {
	c: number;
}
// const bb = ({ a }: { a: string }, b: { c: number }) => {
const bb = (a: Aa, b: Bb) => {
	console.log('b?', a, b)
}
bb({ a: 'aa' }, { c: 33 })


interface Data {
	a: string; 
	b: number;
	c: { d: string; }
}
const cc = (data: Data[]) => {
	console.log(data)
}
cc([{ a: 'aa', b: 3, c: { d: 'dd' } }])



const obj = {
	a: {
		b: { c : 'str'}
	}
}


// const objValue = obj.a.b['c'] //이런 경우는 타입을 
const objVal = obj.a.b as { [k in string]: any };
const key = 'c'
console.log('objValue', objVal[key])
// (obj as { [ k in string ]: any })[key] //이런식으로 해야함



export default function Home() {

	console.log(123123)

	useEffect(() => {
		console.log(123123)
	}, [])

	return (
		<div>
			root page
		</div>
		// 기존소스 
		// <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
		// 	<div className="inline-block max-w-lg text-center justify-center">
		// 		<h1 className={title()}>Make&nbsp;</h1>
		// 		<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
		// 		<br />
		// 		<h1 className={title()}>
		// 			websites regardless of your design experience.
		// 		</h1>
		// 		<h2 className={subtitle({ class: "mt-4" })}>
		// 			Beautiful, fast and modern React UI library.
		// 		</h2>
		// 	</div>

		// 	<div className="flex gap-3">
		// 		<Link
		// 			isExternal
		// 			href={siteConfig.links.docs}
		// 			className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
		// 		>
		// 			Documentation
		// 		</Link>
		// 		<Link
		// 			isExternal
		// 			className={buttonStyles({ variant: "bordered", radius: "full" })}
		// 			href={siteConfig.links.github}
		// 		>
		// 			<GithubIcon size={20} />
		// 			GitHub
		// 		</Link>
		// 	</div>

		// 	<div className="mt-8">
		// 		<Snippet hideSymbol hideCopyButton variant="flat">
		// 			<span>
		// 				Get started by editing <Code color="primary">app/page.tsx</Code>
		// 			</span>
		// 		</Snippet>
		// 	</div>
		// </section>
	);
}
