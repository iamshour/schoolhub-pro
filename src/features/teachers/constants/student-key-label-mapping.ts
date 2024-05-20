import type { Teacher } from "../types"

/**
 * An Object mapping used between a fetched teacers' keys - displayed labels
 */
const teacherKeyLabelMapping: Record<keyof Teacher, string> = {
	address: "Address",
	city: "City",
	country: "Country",
	dateOfBirth: "Date Of Birth",
	firstName: "First Name",
	lastName: "Last Name",
	middleName: "Middle Name",
	phone: "Phone Number",
	teacherId: "Teacher ID",
}

export default teacherKeyLabelMapping
