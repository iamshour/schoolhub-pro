//#region Import
import Button from "@/components/ui/button"
//#endregion

interface AddStudentDialogContentProps {
	/**
	 * Callback function used to close the dialog
	 */
	closeDialog: () => void
}

const AddStudentDialogContent = ({ closeDialog }: AddStudentDialogContentProps) => {
	return (
		<div>
			<div>Add Student Dialog Content</div>

			<Button onClick={closeDialog}>Close</Button>
		</div>
	)
}

export default AddStudentDialogContent
