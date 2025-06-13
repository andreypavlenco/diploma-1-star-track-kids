'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { GoX } from 'react-icons/go'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { useAuthContext } from '@/app/providers/AuthProvider'
import { UserRole } from '@/graphql/generated/output'
import { useSingIn, useSingUp } from '@/features/auth/hook'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/ui-kit/ui/select'
import { useApolloClient } from '@apollo/client'
import toast from 'react-hot-toast'

interface IFormInput {
  email: string
  password: string
  role: UserRole
}

export default function SignUpDialog() {
  const router = useRouter()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>()

  const { createUser, loading, error } = useSingUp()
  const { loginUser } = useSingIn()
  const { setProfile } = useAuthContext()
  const client = useApolloClient()

  const [showPassword, setShowPassword] = useState(false)

  const handlePendingInvitation = () => {
    const pendingToken = localStorage.getItem('pendingInvitationToken')
    if (pendingToken) {
      localStorage.removeItem('pendingInvitationToken')
      toast.success('Запрошення знайдено — приєднуємось...')
      router.replace(`/invitation/accept?token=${pendingToken}`)
    } else {
      router.replace('/')
    }
  }

  const onSubmit: SubmitHandler<IFormInput> = async values => {
    const toastId = toast.loading('Реєстрація...')
    try {
      const result = await createUser({
        variables: { data: values }
      })

      if (!result.data?.createUser) {
        toast.error('Не вдалося створити користувача', { id: toastId })
        return
      }

      const { data: loginData } = await loginUser({
        variables: {
          data: {
            email: values.email,
            password: values.password
          }
        }
      })

      if (!loginData?.loginUser) {
        toast.error('Створено, але не вдалося увійти', { id: toastId })
        return
      }

      setProfile(loginData.loginUser)
      await client.refetchQueries({ include: ['FindProfile'] })

      toast.success('Успішна реєстрація та вхід!', { id: toastId })
      handlePendingInvitation()
    } catch (err) {
      console.error('SignUp error:', err)
      toast.error('Сталася помилка при реєстрації', { id: toastId })
    }
  }

  return (
    <AlertDialog
      defaultOpen
      onOpenChange={open => {
        if (!open) router.back()
      }}
    >
      <AlertDialogTrigger asChild />
      <AlertDialogContent className='animate-fadeInZoom max-w-md rounded-xl border border-gray-200 bg-gradient-to-b from-white via-white to-green-50 p-6 shadow-xl'>
        <AlertDialogHeader className='relative mb-4'>
          <h2 className='flex items-center gap-2 text-xl font-semibold text-green-700'>
            <span className='text-2xl'>🔓</span> Вхід у систему
          </h2>
          <AlertDialogCancel
            className='bg-gray-250 absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-800 shadow-sm transition hover:bg-gray-400 hover:text-black focus-visible:ring-2 focus-visible:ring-green-400'
            aria-label='Закрити'
          >
            <GoX size={18} />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='grid gap-1'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='you@example.com'
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
          </div>

          <div className='relative grid gap-1'>
            <Label htmlFor='password'>Пароль</Label>
            <Input
              id='password'
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              className='pr-10'
            />
            <button
              type='button'
              onClick={() => setShowPassword(p => !p)}
              className='absolute top-7 right-2 text-gray-500 hover:text-gray-700'
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </button>
            {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
          </div>

          <div className='grid gap-1'>
            <Label htmlFor='role'>Роль</Label>
            <Controller
  name='role'
  control={control}
  rules={{ required: 'Role is required' }}
  render={({ field }) => (
    <Select onValueChange={field.onChange} value={field.value}>
      <SelectTrigger
        id='role'
        className='rounded-md border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400'
      >
        <SelectValue placeholder='Оберіть роль' />
      </SelectTrigger>

      <SelectContent
        className='z-50 mt-1 rounded-lg border border-green-200 bg-white shadow-xl'
        sideOffset={4}
      >
        <SelectGroup className='py-1'>
          <SelectItem
            value={UserRole.Parent}
            className='cursor-pointer px-4 py-2 text-sm text-gray-800 hover:bg-green-50 hover:text-green-700 focus:bg-green-100 focus:text-green-800'
          >
            👨‍👩‍👧‍👦 Батько/Мати
          </SelectItem>
          <SelectItem
            value={UserRole.Child}
            className='cursor-pointer px-4 py-2 text-sm text-gray-800 hover:bg-green-50 hover:text-green-700 focus:bg-green-100 focus:text-green-800'
          >
            🧒 Дитина
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )}
/>

           
            {errors.role && <p className='text-sm text-red-500'>{errors.role.message}</p>}
          </div>

          {error && <p className='text-sm text-red-500'>{error.message}</p>}

          <Button
            type='submit'
            disabled={loading}
            className='w-full bg-gradient-to-r from-green-400 to-lime-500 font-semibold text-white hover:opacity-90'
          >
            {loading ? 'Реєстрація…' : 'Зареєструватись'}
          </Button>
        </form>

        <AlertDialogFooter />
      </AlertDialogContent>
    </AlertDialog>
  )
}
