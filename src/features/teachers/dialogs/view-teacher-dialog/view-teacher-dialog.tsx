//#region Import
import Dialog from "@/components/ui/dialog"
import { lazy } from "react"

const ViewTeacherDialogContent = lazy(() => import("./view-teacher-dialog-content"))
//#endregion

interface ViewTeacherDialogProps extends React.PropsWithChildren {
	teacherId: string
}

const ViewTeacherDialog: React.FC<ViewTeacherDialogProps> = ({ children, teacherId }) => (
	<Dialog>
		<Dialog.Trigger asChild>{children}</Dialog.Trigger>
		<Dialog.Content className='h-[764px] w-[400px] sm:h-[532px] sm:w-[600px]' title='View Teacher'>
			<ViewTeacherDialogContent teacherId={teacherId} />
		</Dialog.Content>
	</Dialog>
)

export default ViewTeacherDialog
