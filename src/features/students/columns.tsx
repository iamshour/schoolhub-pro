"use client"

import Button from "@/components/ui/button"
import Dropdown from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import LucideEllipsis from "~icons/lucide/ellipsis"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
	amount: number
	email: string
	id: string
	status: "failed" | "pending" | "processing" | "success"
}

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "status",
		header: "Status",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "amount",
		header: "Amount",
	},

	{
		cell: ({ row }) => {
			const payment = row.original

			return (
				<Dropdown>
					<Dropdown.Trigger asChild>
						<Button className='h-8 w-8 p-0' variant='ghost'>
							<span className='sr-only'>Open menu</span>
							<LucideEllipsis className='h-4 w-4' />
						</Button>
					</Dropdown.Trigger>
					<Dropdown.Content align='end'>
						<Dropdown.Label>Actions</Dropdown.Label>
						<Dropdown.Item onClick={() => navigator.clipboard.writeText(payment.id)}>Copy payment ID</Dropdown.Item>
						<Dropdown.Separator />
						<Dropdown.Item>View customer</Dropdown.Item>
						<Dropdown.Item>View payment details</Dropdown.Item>
					</Dropdown.Content>
				</Dropdown>
			)
		},
		id: "actions",
	},
]
