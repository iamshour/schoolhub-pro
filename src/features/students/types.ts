//#region Import
import type { PersonIndentity } from "@/types"
//#endregion

export type Student = PersonIndentity & Record<"classId" | "studentId", string>
