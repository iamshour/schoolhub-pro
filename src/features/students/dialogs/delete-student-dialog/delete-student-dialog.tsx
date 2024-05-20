//#region Import
import AlertDialog from "@/components/ui/alert-dialog"
import Button from "@/components/ui/button"
import { useDeleteStudentMutation } from "@/features/students/api"
import { useState } from "react"
//#endregion

interface DeleteStudentDialogProps extends React.PropsWithChildren {
	studentId: string
}

const DeleteStudentDialog: React.FC<DeleteStudentDialogProps> = ({ children, studentId }) => {
	const [open, setOpen] = useState(false)

	const { deleteStudentMutation, loading } = useDeleteStudentMutation()

	const onDeleteStudent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		deleteStudentMutation(studentId).then(() => setOpen(false))
	}

	return (
		<AlertDialog onOpenChange={setOpen} open={open}>
			<AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Header>
					<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
					<AlertDialog.Description>
						This action cannot be undone. This will permanently delete this student account and remove any related data
						from our database.
					</AlertDialog.Description>
				</AlertDialog.Header>
				<AlertDialog.Footer>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
					<AlertDialog.Action asChild>
						<Button loading={loading} onClick={onDeleteStudent}>
							Submit
						</Button>
					</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog>
	)
}

export default DeleteStudentDialog
