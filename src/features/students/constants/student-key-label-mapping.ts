import { Student } from "../types"

/**
 * An Object mapping used between a fetched students' keys - displayed labels
 */
const studentKeyLabelMapping: Record<keyof Student, string> = {
	address: "Address",
	city: "City",
	classId: "Class ID",
	country: "Country",
	dateOfBirth: "Date Of Birth",
	firstName: "First Name",
	lastName: "Last Name",
	middleName: "Middle Name",
	phone: "Phone Number",
	studentId: "Student ID",
}

export default studentKeyLabelMapping
