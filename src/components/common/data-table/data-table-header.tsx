import SearchBar from "../search-bar"

interface DataTableHeaderProps extends React.ComponentPropsWithoutRef<typeof SearchBar> {
	children: React.ReactNode
}

const DataTableHeader = ({ children, ...searchBarProps }: DataTableHeaderProps) => {
	return (
		<header className='flex w-full items-center justify-between rounded-md border p-3'>
			<SearchBar {...searchBarProps} />

			{children}
		</header>
	)
}

export default DataTableHeader
