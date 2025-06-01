'use client'

import {
	AlertDialogCancel,
	AlertDialogTrigger
} from '@radix-ui/react-alert-dialog'
import { GoX } from 'react-icons/go'

import { SignInForm } from '@/features/auth/sing-in/form'
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader
} from '@/shared/ui-kit/ui/alert-dialog'

export default function SingIn() {
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
						<SignInForm />
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter></AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
