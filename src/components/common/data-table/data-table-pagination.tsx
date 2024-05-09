//#region Import
import Button from "@/components/ui/button"
import Select from "@/components/ui/select"
import { Table } from "@tanstack/react-table"
import LucideChevronLeft from "~icons/lucide/chevron-left"
import LucideChevronRight from "~icons/lucide/chevron-right"
import LucideChevronsLeft from "~icons/lucide/chevrons-left"
import LucideChevronsRight from "~icons/lucide/chevrons-right"
//#endregion

interface DataTablePaginationProps<TData> {
	table: Table<TData>
}

export default function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
	return (
		<div className='flex items-center justify-between border-t p-3'>
			<div className='flex items-center space-x-2'>
				<p className='text-sm font-medium'>Rows per page</p>
				<Select
					onValueChange={(value) => {
						table.setPageSize(Number(value))
					}}
					value={`${table.getState().pagination.pageSize}`}>
					<Select.Trigger className='h-8 w-[70px]'>
						<Select.Value placeholder={table.getState().pagination.pageSize} />
					</Select.Trigger>
					<Select.Content side='top'>
						{[10, 20, 30, 40, 50].map((pageSize) => (
							<Select.Item key={pageSize} value={`${pageSize}`}>
								{pageSize}
							</Select.Item>
						))}
					</Select.Content>
				</Select>
			</div>

			<div className='flex items-center space-x-6 lg:space-x-8'>
				<div className='flex w-[100px] items-center justify-center text-sm font-medium'>
					Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
				</div>
				<div className='flex items-center space-x-2'>
					<Button
						className='hidden h-8 w-8 p-0 lg:flex'
						disabled={!table.getCanPreviousPage()}
						onClick={() => table.setPageIndex(0)}
						variant='outline'>
						<span className='sr-only'>Go to first page</span>
						<LucideChevronsLeft className='h-4 w-4' />
					</Button>
					<Button
						className='h-8 w-8 p-0'
						disabled={!table.getCanPreviousPage()}
						onClick={() => table.previousPage()}
						variant='outline'>
						<span className='sr-only'>Go to previous page</span>
						<LucideChevronLeft className='h-4 w-4' />
					</Button>
					<Button
						className='h-8 w-8 p-0'
						disabled={!table.getCanNextPage()}
						onClick={() => table.nextPage()}
						variant='outline'>
						<span className='sr-only'>Go to next page</span>
						<LucideChevronRight className='h-4 w-4' />
					</Button>
					<Button
						className='hidden h-8 w-8 p-0 lg:flex'
						disabled={!table.getCanNextPage()}
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						variant='outline'>
						<span className='sr-only'>Go to last page</span>
						<LucideChevronsRight className='h-4 w-4' />
					</Button>
				</div>
			</div>
		</div>
	)
}
