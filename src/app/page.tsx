// import Image from "next/image";

export default function Home() {
  return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<ul>
					<li><a href="/11">Test1</a></li>
					<li><a href="/12">Test2</a></li>
					<li><a href="/13">Test3</a></li>
				</ul>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
