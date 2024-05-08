//#region Import
import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table"

import DataTablePagination from "./data-table-pagination"
import Table from "./table"
//#endregion

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

export default function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		columns,
		data,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	})

	return (
		<div className='flex h-full flex-col justify-between gap-4'>
			<div className='flex-1 rounded-md border'>
				<Table>
					<Table.Header>
						{table.getHeaderGroups().map((headerGroup) => (
							<Table.Row key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<Table.Head key={header.id}>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
										</Table.Head>
									)
								})}
							</Table.Row>
						))}
					</Table.Header>
					<Table.Body>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<Table.Row data-state={row.getIsSelected() && "selected"} key={row.id}>
									{row.getVisibleCells().map((cell) => (
										<Table.Cell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Table.Cell>
									))}
								</Table.Row>
							))
						) : (
							<Table.Row>
								<Table.Cell className='h-24 text-center' colSpan={columns.length}>
									No results.
								</Table.Cell>
							</Table.Row>
						)}
					</Table.Body>
				</Table>
			</div>

			<DataTablePagination table={table} />
		</div>
	)
}
