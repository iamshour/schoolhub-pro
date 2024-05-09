interface DataTableHeaderProps {
	children: React.ReactNode
}

const DataTableHeader = ({ children }: DataTableHeaderProps) => {
	return <header className='flex w-full items-center justify-end rounded-md border p-3'>{children}</header>
}

export default DataTableHeader
