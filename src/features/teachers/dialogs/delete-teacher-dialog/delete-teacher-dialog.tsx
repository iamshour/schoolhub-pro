//#region Import
import AlertDialog from "@/components/ui/alert-dialog"
import Button from "@/components/ui/button"
import { useDeleteTeacherMutation } from "@/features/teachers/api"
import { useState } from "react"
//#endregion

interface DeleteTeacherDialogProps extends React.PropsWithChildren {
	teacherId: string
}

const DeleteTeacherDialog: React.FC<DeleteTeacherDialogProps> = ({ children, teacherId }) => {
	const [open, setOpen] = useState(false)

	const { deleteTeacherMutation, loading } = useDeleteTeacherMutation()

	const onDeleteTeacher = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		deleteTeacherMutation(teacherId).then(() => setOpen(false))
	}

	return (
		<AlertDialog onOpenChange={setOpen} open={open}>
			<AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Header>
					<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
					<AlertDialog.Description>
						This action cannot be undone. This will permanently delete this teacher account and remove any related data
						from our database.
					</AlertDialog.Description>
				</AlertDialog.Header>
				<AlertDialog.Footer>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
					<AlertDialog.Action asChild>
						<Button loading={loading} onClick={onDeleteTeacher}>
							Submit
						</Button>
					</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog>
	)
}

export default DeleteTeacherDialog
