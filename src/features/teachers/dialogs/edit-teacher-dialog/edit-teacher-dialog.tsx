//#region Import
import Dialog from "@/components/ui/dialog"
import { lazy, useState } from "react"

import { Teacher } from "../../types"

const EditTeacherDialogContent = lazy(() => import("./edit-teacher-dialog-content"))
//#endregion

interface EditTeacherDialogProps extends Pick<Teacher, "teacherId"> {
	/**
	 * Trigger Button/Element for triggering Dilaog
	 */
	children: React.ReactNode
}

const EditTeacherDialog = ({ children, teacherId }: EditTeacherDialogProps) => {
	const [open, setOpen] = useState(false)

	return (
		<Dialog onOpenChange={setOpen} open={open}>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>
			<Dialog.Content
				className='h-[813px] w-[382px] sm:h-[609px] sm:w-[746px]'
				onInteractOutside={(e) => e.preventDefault()}
				title='Edit Teacher'>
				<EditTeacherDialogContent closeDialog={() => setOpen(false)} teacherId={teacherId} />
			</Dialog.Content>
		</Dialog>
	)
}

export default EditTeacherDialog
