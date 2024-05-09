//#region Import
import Dialog from "@/components/ui/dialog"
import { lazy, useState } from "react"

const AddTeacherDialogContent = lazy(() => import("./add-teacher-dialog-content"))
//#endregion

interface AddTeacherDialogProps {
	/**
	 * Trigger Button/Element for triggering Dilaog
	 */
	children: React.ReactNode
}

const AddTeacherDialog = ({ children }: AddTeacherDialogProps) => {
	const [open, setOpen] = useState(false)

	return (
		<Dialog onOpenChange={setOpen} open={open}>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>
			<Dialog.Content
				className='h-[813px] w-[382px] sm:h-[626.6px] sm:w-[746px]'
				onInteractOutside={(e) => e.preventDefault()}
				title='Add Teacher'>
				<AddTeacherDialogContent closeDialog={() => setOpen(false)} />
			</Dialog.Content>
		</Dialog>
	)
}

export default AddTeacherDialog
