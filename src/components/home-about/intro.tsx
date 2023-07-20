import { Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Intro() {
	return (
		<div className="mx-auto w-[95%] grid grid-cols-12">
			<div className="col-span-1 flex flex-col items-center gap-7">
				<div className="flex items-center justify-center">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.2, delay: 0.5 }}
						viewport={{ once: true }}
						className="w-fit relative"
					>
						<span className="absolute left-0 w-full top-0 h-full bg-primary/50 blur-[18px]" />
						<Code color="white" className="shadow-lg" size={35} />
					</motion.div>
				</div>
				<motion.div
					initial={{ height: 0 }}
					whileInView={{ height: "100%" }}
					transition={{ duration: 0.4, delay: 1.1 }}
					viewport={{ once: true }}
					className="w-[3px] h-full line-effect rounded"
				/>
			</div>
			<div className="col-span-11 px-5 font-semibold pb-[9rem] text-white">
				<motion.h4
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2, delay: 0.7 }}
					viewport={{ once: true }}
					className="mb-4"
				>
					The O(1) of Me
				</motion.h4>
				<motion.h1
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2, delay: 0.9 }}
					viewport={{ once: true }}
				>
					<span className="text-primary">
						Passionate Software Engineer
					</span>{" "}
					driven by curiosity and a deep commitment to pushing the
					boundaries of technology.
				</motion.h1>
			</div>
		</div>
	);
}
