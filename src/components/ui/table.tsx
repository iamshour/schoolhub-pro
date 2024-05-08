//#region Import
import cn from "@/utils/cn"
//#endregion

const Table = ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
	<div className='relative w-full overflow-auto'>
		<table className={cn("w-full caption-bottom text-sm", className)} {...props} />
	</div>
)

const TableHeader = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
	<thead className={cn("[&_tr]:border-b", className)} {...props} />
)

const TableBody = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
	<tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
)

const TableFooter = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
	<tfoot
		className={cn("border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0", className)}
		{...props}
	/>
)

const TableRow = ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
	<tr
		className={cn(
			"border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
			className
		)}
		{...props}
	/>
)

const TableHead = ({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
	<th
		className={cn(
			"h-12 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400 [&:has([role=checkbox])]:pr-0",
			className
		)}
		{...props}
	/>
)

const TableCell = ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
	<td className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
)

const TableCaption = ({ className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) => (
	<caption className={cn("mt-4 text-sm text-slate-500 dark:text-slate-400", className)} {...props} />
)

Table.Header = TableHeader
Table.Body = TableBody
Table.Footer = TableFooter
Table.Row = TableRow
Table.Head = TableHead
Table.Cell = TableCell
Table.Caption = TableCaption

export default Table
