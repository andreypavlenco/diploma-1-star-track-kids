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
        variables: { data: { 
          title: values.title, 
          description: values.description ?? '', 
          starCost: Number(values.starCost)
        } }
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
        <Button variant='outline'>Create Reward</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className='flex justify-end'>
          <AlertDialogCancel asChild>
            <Button variant='ghost' size='icon'>
              <GoX size={20} />
            </Button>
          </AlertDialogCancel>
        </AlertDialogHeader>

        <AlertDialogDescription asChild>
          <Card>
            <CardHeader>
            
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <div className='grid gap-2'>
                  <Label htmlFor='title'>Title</Label>
                  <Input
                    id='title'
                    placeholder='Enter reward title'
                    {...register('title', {
                      required: 'Title is required',
                      minLength: { value: 3, message: 'Minimum 3 characters' },
                      maxLength: { value: 100, message: 'Maximum 100 characters' }
                    })}
                  />
                  {errors.title && (
                    <p className='text-red-500'>{errors.title.message}</p>
                  )}
                </div>

                <div className='grid gap-2'>
                  <Label htmlFor='description'>Description</Label>
                  <Input
                    id='description'
                    placeholder='Optional description'
                    {...register('description', {
                      maxLength: { value: 500, message: 'Maximum 500 characters' }
                    })}
                  />
                  {errors.description && (
                    <p className='text-red-500'>{errors.description.message}</p>
                  )}
                </div>

                <div className='grid gap-2'>
                  <Label htmlFor='starCost'>Star Cost</Label>
                  <Input
                    id='starCost'
                    type='number'
                    placeholder='Enter star cost'
                    {...register('starCost', {
                      required: 'Star cost is required',
                      min: { value: 1, message: 'Minimum 1 star' },
                      max: { value: 1000, message: 'Maximum 1000 stars' },
                      valueAsNumber: true
                    })}
                  />
                  {errors.starCost && (
                    <p className='text-red-500'>{errors.starCost.message}</p>
                  )}
                </div>

                <Button
                  type='submit'
                  disabled={loading}
                  className='w-full'
                >
                  {loading ? 'Creating…' : 'Create'}
                </Button>
                {error && (
                  <p className='text-sm text-red-500'>{error.message}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </AlertDialogDescription>
        <AlertDialogFooter />
      </AlertDialogContent>
    </AlertDialog>
  );
}
