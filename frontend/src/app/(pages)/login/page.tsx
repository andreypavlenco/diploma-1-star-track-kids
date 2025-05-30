'use client'

import {
	AlertDialogCancel,
	AlertDialogTrigger
} from '@radix-ui/react-alert-dialog'
import { GoX } from 'react-icons/go'

import { LoginForm } from '@/shared/ui-kit/login-form'
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from '@/shared/ui-kit/ui/alert-dialog'

export default function LoginPage() {
	return (
		<AlertDialog defaultOpen>
			<AlertDialogTrigger asChild></AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<div className='flex justify-end'>
						<AlertDialogCancel>
							<GoX size='30px' />
						</AlertDialogCancel>
					</div>
					<AlertDialogDescription>
						<LoginForm />
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter></AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
