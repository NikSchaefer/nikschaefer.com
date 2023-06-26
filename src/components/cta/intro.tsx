import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Intro() {
	return (
		<div className="mx-auto w-[95%] grid grid-cols-12">
			<div className="col-span-1 relative flex flex-col items-center justify-center gap-7">
				<div className="h-full">
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: "100%" }}
						transition={{ duration: 0.4, delay: 0.3 }}
						viewport={{ once: true }}
						className="w-[3px] h-full from-primary/0 via-primary to-primary/0 bg-gradient-to-b rounded"
					/>
				</div>
				<div className="text-primary absolute -bottom-12 hover:rotate-12 transition-transform duration-300">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.2, delay: 0.7 }}
						viewport={{ once: true }}
						className="w-fit relative"
					>
						<span className="absolute left-0 w-full top-0 h-full bg-primary/50 blur-[18px]" />
						<Code2 color="white" className="shadow-lg" size={35} />
					</motion.div>
				</div>
			</div>
			<div className="hidden sm:flex col-span-1 relative h-full justify-center items-center">
				<img className="-translate-x-9" src="/line.svg" />
			</div>
			<div className="col-span-10 px-5 py-[11rem] ">
				<h5 className="mb-4 h6 text-primary border border-primary rounded-full w-fit px-3 py-1">
					What's Next?
				</h5>
				<motion.h1
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2, delay: 0.7 }}
					viewport={{ once: true }}
				>
					<span className="text-primary font-semibold">
						Get In Touch
					</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2, delay: 0.8 }}
					viewport={{ once: true }}
					className="mt-4 text-white"
				>
					Want to say hi? Feel free to drop me a line. I'm always open
					to discussing new opportunities, creative ideas, or just
					connecting. Or{" "}
					<Link className="underline-effect" href="/about">
						learn more about me
					</Link>
					.
				</motion.p>
				<a
					href="mailto:nikkschaefer@gmail.com"
					aria-label="Get in touch"
					className="relative my-5 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
				>
					<span className="w-full h-full bg-gradient-to-br from-blue-400 via-primary to-pink-500 group-hover:from-blue-400 group-hover:via-primary group-hover:to-pink-500 absolute"></span>
					<span className="relative px-6 py-3 transition-all ease-out bg-secondary rounded-md group-hover:bg-opacity-0 duration-400">
						<span className="relative text-white">Say Hello</span>
					</span>
				</a>
			</div>
		</div>
	);
}
