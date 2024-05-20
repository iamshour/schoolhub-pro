//#region Import
import studentSchema from "@/features/students/constants/student-schema"
import * as z from "zod"
//#endregion

const teacherSchema = studentSchema.extend({})

export default teacherSchema

export type TeacherSchema = z.infer<typeof teacherSchema>
