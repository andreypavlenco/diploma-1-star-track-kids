'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GoX } from 'react-icons/go';

import { CreateRewardInput, useCreateRewardMutation } from '@/graphql/generated/output';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger
} from '@/shared/ui-kit/ui/alert-dialog';
import { Button } from '@/shared/ui-kit/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/shared/ui-kit/ui/card';
import { Input } from '@/shared/ui-kit/ui/input';
import { Label } from '@/shared/ui-kit/ui/label';

type CreateRewardFormProps = {
  onRefreshReward: () => void;
};

export function CreateRewardForm({ onRefreshReward }: CreateRewardFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CreateRewardInput>();

  const [createReward, { loading, error }] = useCreateRewardMutation();

  const onSubmit: SubmitHandler<CreateRewardInput> = async (values) => {
    try {
      const { data } = await createReward({
        variables: {
          data: {
            title: values.title,
            description: values.description ?? '',
            starCost: Number(values.starCost)
          }
        }
      });

      if (data?.createReward) {
        onRefreshReward();
        reset();
        setIsOpen(false);
      }
    } catch (err) {
      console.error((err as Error).message);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button className="rounded-full border border-green-400 bg-gradient-to-r from-green-200 to-lime-200 text-green-800 font-semibold hover:from-green-300 hover:to-lime-300 shadow-sm transition px-4 py-2">
          + Створити винагороду
        </Button>
      </AlertDialogTrigger>

     <AlertDialogContent className="fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 animate-fadeInScale rounded-2xl border bg-white p-6 shadow-2xl">
  <AlertDialogHeader className="flex justify-between items-center mb-4">
    <h3 className="text-xl font-semibold text-gray-800">Нова винагорода</h3>
    <AlertDialogCancel asChild>
        <button
          className="text-gray-500 hover:text-red-500 transition p-1"
          title="Закрити"
        >
          ✖️
        </button>
    </AlertDialogCancel>
  </AlertDialogHeader>

  <AlertDialogDescription asChild>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div className="grid gap-2">
        <Label htmlFor="title" className="text-sm text-gray-700">Назва</Label>
        <Input
          id="title"
          placeholder="Наприклад: 30 хв гри"
          {...register('title', {
            required: 'Назва обовʼязкова',
            minLength: { value: 3, message: 'Мінімум 3 символи' },
            maxLength: { value: 100, message: 'Максимум 100 символів' }
          })}
          className="rounded-md border border-gray-300 px-3 py-2 focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
        />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description" className="text-sm text-gray-700">
          Опис <span className="text-gray-400">(необовʼязково)</span>
        </Label>
        <Input
          id="description"
          placeholder="Що саме отримає користувач"
          {...register('description', {
            maxLength: { value: 500, message: 'Максимум 500 символів' }
          })}
          className="rounded-md border border-gray-300 px-3 py-2 focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="starCost" className="text-sm text-gray-700">Вартість у зірках</Label>
        <Input
          id="starCost"
          type="number"
          placeholder="Наприклад: 10"
          {...register('starCost', {
            required: 'Необхідно вказати вартість',
            min: { value: 1, message: 'Мінімум 1 зірка' },
            max: { value: 1000, message: 'Максимум 1000 зірок' },
            valueAsNumber: true
          })}
          className="rounded-md border border-gray-300 px-3 py-2 focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
        />
        {errors.starCost && (
          <p className="text-sm text-red-500">{errors.starCost.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold py-2 transition"
      >
        {loading ? 'Створення…' : 'Створити'}
      </Button>

      {error && (
        <p className="text-sm text-red-500 text-center">{error.message}</p>
      )}
    </form>
  </AlertDialogDescription>

  <AlertDialogFooter />
</AlertDialogContent>

    </AlertDialog>
  );
}
