// Class (ClassId, GradeId, TeacherId, SectionName)
// Grade (GradeId, GradeNumber, Grade)

export type ReportCard = Record<"classId" | "date" | "reportCardId" | "teacherId", string>

export type ReportCardDetails = { gradeOutOf100: number } & Record<
	"reportCardId" | "reportDetailsId" | "studentId",
	string
>
