'use client'

import { useRouter } from 'next/navigation'
import { GoX } from 'react-icons/go'

import { SignInForm } from '@/features/auth/components/sign-in/form'
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTrigger
} from '@/shared/ui-kit/ui/alert-dialog'

export default function SignInDialog() {
	const router = useRouter()
	return (
		<AlertDialog
			defaultOpen
			onOpenChange={open => {
				if (!open) router.back()
			}}
		>
			<AlertDialogTrigger asChild />

			<AlertDialogContent className='animate-fadeInZoom max-w-md'>
				<AlertDialogHeader className='relative mb-2'>
					<AlertDialogCancel className='text-foreground/70 hover:bg-muted/30 focus-visible:ring-ring absolute top-2 right-2 rounded-full p-1 focus-visible:ring-2'>
						<GoX size={20} />
					</AlertDialogCancel>
				</AlertDialogHeader>
				<SignInForm />
				<AlertDialogFooter />
			</AlertDialogContent>
		</AlertDialog>
	)
}
