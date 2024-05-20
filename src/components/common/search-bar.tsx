//#region Import
import LucideSearch from "~icons/lucide/search"

import Input from "../ui/input"
//#endregion

const SearchBar = ({ onChange, value }: Pick<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">) => {
	// TODO: Handle Debounce here...

	return (
		<div className='relative flex-1 md:grow-0'>
			<LucideSearch className='text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4' />
			<Input
				className='bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px]'
				onChange={onChange}
				placeholder='Search...'
				type='search'
				value={value || ""}
			/>
		</div>
	)
}

export default SearchBar
