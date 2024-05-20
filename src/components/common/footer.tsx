//#region Import
import { twMerge } from "tailwind-merge"
//#endregion

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
	<footer
		className={twMerge(
			"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-4 [&_button]:w-full [&_button]:sm:w-max",
			className
		)}
		{...props}
	/>
)

export default Footer
