'use client'

import { useRouter } from 'next/navigation'
import { GoX } from 'react-icons/go'

import { SignUpForm } from '@/features/auth/components/sign-up/form'
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTrigger
} from '@/shared/ui-kit/ui/alert-dialog'

export default function SignUpDialog() {
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
				<SignUpForm />
				<AlertDialogFooter />
			</AlertDialogContent>
		</AlertDialog>
	)
}
