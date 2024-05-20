//#region Import
import Dialog from "@/components/ui/dialog"
import { lazy, useState } from "react"

const EditStudentDialogContent = lazy(() => import("./edit-student-dialog-content"))
//#endregion

interface EditStudentDialogProps extends React.PropsWithChildren {
	studentId: string
}

const EditStudentDialog: React.FC<EditStudentDialogProps> = ({ children, studentId }) => {
	const [open, setOpen] = useState(false)

	return (
		<Dialog onOpenChange={setOpen} open={open}>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>
			<Dialog.Content
				className='h-[813px] w-[382px] sm:h-[609px] sm:w-[746px]'
				onInteractOutside={(e) => e.preventDefault()}
				title='Edit Student'>
				<EditStudentDialogContent closeDialog={() => setOpen(false)} studentId={studentId} />
			</Dialog.Content>
		</Dialog>
	)
}

export default EditStudentDialog
