//#region Import
import Dialog from "@/components/ui/dialog"
import { lazy, useState } from "react"

const AddStudentDialogContent = lazy(() => import("./add-student-dialog-content"))
//#endregion

interface AddStudentDialogProps {
	/**
	 * Trigger Button/Element for triggering Dilaog
	 */
	children: React.ReactNode
}

const AddStudentDialog = ({ children }: AddStudentDialogProps) => {
	const [open, setOpen] = useState(false)

	return (
		<Dialog onOpenChange={setOpen} open={open}>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>
			<Dialog.Content
				className='h-[813px] w-[382px] sm:h-[626.6px] sm:w-[746px]'
				onInteractOutside={(e) => e.preventDefault()}
				title='Add Student'>
				<AddStudentDialogContent closeDialog={() => setOpen(false)} />
			</Dialog.Content>
		</Dialog>
	)
}

export default AddStudentDialog
