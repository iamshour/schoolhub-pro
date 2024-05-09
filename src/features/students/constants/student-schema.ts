//#region Import
import type { Country } from "react-phone-number-input"

import { isPossiblePhoneNumber } from "react-phone-number-input"
import * as z from "zod"
//#endregion

const studentSchema = z.object({
	address: z.string().max(50, { message: "Maximum 50 Characters allowed" }),
	city: z.string().max(200, { message: "Maximum 200 Characters allowed" }),
	country: z.custom<Country | string>((val) => !!val, "Required"),
	dateOfBirth: z.date(),
	firstName: z.string().trim().max(50, { message: "Maximum 50 characters allowed" }),
	lastName: z.string().max(50, { message: "Maximum 50 characters allowed" }),
	middleName: z.string().max(50, { message: "Maximum 50 characters allowed" }),
	phone: z.string().refine((val) => !val?.length || isPossiblePhoneNumber(val), {
		message: "Invalid Phone Number",
	}),
})

export default studentSchema

export type StudentSchemaType = z.infer<typeof studentSchema>
