'use client'

import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogTrigger
} from '@radix-ui/react-alert-dialog'
import { useState } from 'react'
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
import { Button } from '@/shared/ui-kit/ui/button'

export default function AuthDialog() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant='outline'>Show Dialog</Button>
			</AlertDialogTrigger>
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
