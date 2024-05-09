//#region Import
import * as z from "zod"
//#endregion

const studentSchema = z.object({
	address: z.string().max(50, { message: "Maximum 50 Characters allowed" }),
	city: z.string().max(200, { message: "Maximum 200 Characters allowed" }),
	country: z.string().max(200, { message: "Maximum 300 Characters allowed" }),
	dateOfBirth: z
		.string()
		.refine((val) => !val?.length || /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z?$/.test(val)),
	firstName: z.string().trim().max(50, { message: "Maximum 50 characters allowed" }),
	lastName: z.string().max(50, { message: "Maximum 50 characters allowed" }),
	middleName: z.string().max(50, { message: "Maximum 50 characters allowed" }),
	phone: z.string().refine((val) => !val?.length || /^[0-9]*$/.test(val), {
		message: "Invalid Phone Number",
	}),
})

export default studentSchema

export type StudentSchemaType = z.infer<typeof studentSchema>
