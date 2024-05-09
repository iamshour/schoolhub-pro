//#region Import
import Dialog from "@/components/ui/dialog"
import { lazy } from "react"

import type { Teacher } from "../../types"

const ViewTeacherDialogContent = lazy(() => import("./view-teacher-dialog-content"))
//#endregion

interface ViewTeacherDialogProps extends Pick<Teacher, "teacherId"> {
	/**
	 * Trigger Button/Element for triggering Dilaog
	 */
	children: React.ReactNode
}

const ViewTeacherDialog = ({ children, teacherId }: ViewTeacherDialogProps) => (
	<Dialog>
		<Dialog.Trigger asChild>{children}</Dialog.Trigger>
		<Dialog.Content className='h-[764px] w-[400px] sm:h-[532px] sm:w-[600px]' title='View Teacher'>
			<ViewTeacherDialogContent teacherId={teacherId} />
		</Dialog.Content>
	</Dialog>
)

export default ViewTeacherDialog
