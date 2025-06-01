'use client'

import {
	AlertDialogCancel,
	AlertDialogTrigger
} from '@radix-ui/react-alert-dialog'
import { GoX } from 'react-icons/go'

import { SignUpForm } from '@/features/auth/sing-up/form'
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader
} from '@/shared/ui-kit/ui/alert-dialog'

export default function SingUp() {
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
						<SignUpForm />
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter></AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
