//#region Import
import type { Student } from "@/features/students/types"

import Dialog from "@/components/ui/dialog"
import { lazy } from "react"

const ViewStudentDialogContent = lazy(() => import("./view-student-dialog-content"))
//#endregion

interface ViewStudentDialogProps extends Pick<Student, "studentId"> {
	/**
	 * Trigger Button/Element for triggering Dilaog
	 */
	children: React.ReactNode
}

const ViewStudentDialog = ({ children, studentId }: ViewStudentDialogProps) => (
	<Dialog>
		<Dialog.Trigger asChild>{children}</Dialog.Trigger>
		<Dialog.Content className='h-[764px] w-[400px] sm:h-[532px] sm:w-[600px]' title='View Student'>
			<ViewStudentDialogContent studentId={studentId} />
		</Dialog.Content>
	</Dialog>
)

export default ViewStudentDialog
