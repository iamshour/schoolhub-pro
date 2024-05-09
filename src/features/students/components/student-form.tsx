//#region Import
import Footer from "@/components/common/footer"
import Form from "@/components/ui/form"
import Input from "@/components/ui/input"
import SimplePhoneInput from "@/components/ui/simple-phone-input"
import Textarea from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type UseFormReturn } from "react-hook-form"

import type { Student } from "../types"

import studentSchema, { type StudentSchemaType } from "../constants/student-schema"
//#endregion

interface StudentFormProps {
	children: React.ReactNode

	defaultValues?: StudentSchemaType

	onSubmit: (data: Partial<Student>, form: UseFormReturn<StudentSchemaType>) => void
}

const StudentForm = ({ children, defaultValues, onSubmit }: StudentFormProps) => {
	const form = useForm<StudentSchemaType>({
		defaultValues,
		resolver: zodResolver(studentSchema),
	})

	const onFormSubmit = (studentData: StudentSchemaType) => onSubmit(studentData, form)

	return (
		<Form {...form}>
			<form
				className='flex h-full w-full flex-col justify-between overflow-y-auto p-2'
				onSubmit={form.handleSubmit(onFormSubmit)}>
				<div className='h-full'>
					<div className='w-full space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0'>
						<Form.Field
							control={form.control}
							name='firstName'
							render={({ field }) => (
								<Form.Item label='First name'>
									<Input placeholder='Type first name' {...field} />
								</Form.Item>
							)}
						/>
						<Form.Field
							control={form.control}
							name='middleName'
							render={({ field }) => (
								<Form.Item label='Middle name'>
									<Input placeholder='Type middle name' {...field} />
								</Form.Item>
							)}
						/>
						<Form.Field
							control={form.control}
							name='lastName'
							render={({ field }) => (
								<Form.Item label='Last name'>
									<Input placeholder='Type last name' {...field} />
								</Form.Item>
							)}
						/>
						<Form.Field
							control={form.control}
							name='phone'
							render={({ field }) => (
								<Form.Item label='Phone'>
									<SimplePhoneInput {...field} className='w-[340px]' placeholder='Type phone number' />
								</Form.Item>
							)}
						/>

						<Form.Field
							control={form.control}
							name='city'
							render={({ field }) => (
								<Form.Item label='City'>
									<Input placeholder='Type City' {...field} />
								</Form.Item>
							)}
						/>

						<Form.Field
							control={form.control}
							name='country'
							render={({ field }) => (
								<Form.Item label='Country'>
									<Input placeholder='Type Country' {...field} />
								</Form.Item>
							)}
						/>

						<Form.Field
							control={form.control}
							name='dateOfBirth'
							render={({ field }) => (
								<Form.Item label='Date of Birth'>
									<Input placeholder='Type date of birth' type='date' {...field} value={field.value as any} />
								</Form.Item>
							)}
						/>

						<Form.Field
							control={form.control}
							name='address'
							render={({ field }) => (
								<Form.Item className='col-span-2 max-w-full' label='Address'>
									<Textarea maxLength={500} placeholder='Type your address' rows={3} {...field} />
								</Form.Item>
							)}
						/>
					</div>
				</div>

				<Footer>{children}</Footer>
			</form>
		</Form>
	)
}

export default StudentForm
