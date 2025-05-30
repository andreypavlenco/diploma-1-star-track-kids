import {
  Body,
  Head,
  Heading,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import { Html } from '@react-email/html'
import * as React from 'react'

interface InvitationTemplateProps {
  domain: string
  token: string
}

export function InvitationTemplate({ domain, token }: InvitationTemplateProps) {
  const acceptLink = `${domain}/invitation/accept?token=${token}`

  return (
    <Html>
      <Head />
      <Preview>Підтвердіть приєднання до кімнати</Preview>
      <Tailwind>
        <Body className="max-w-2xl mx-auto p-6 bg-slate-50">
          <Section className="text-center mb-8">
            <Heading className="text-3xl text-black font-bold">
              Запрошення до кімнати
            </Heading>
            <Text className="text-base text-black mb-4">
              Вас запросили приєднатися до кімнати в нашому застосунку. Щоб прийняти запрошення та отримати доступ, натисніть на кнопку:
            </Text>
            <Link
              href={acceptLink}
              className="inline-flex justify-center items-center rounded-full text-sm font-medium text-white bg-[#18B9AE] px-5 py-2"
            >
              Прийняти запрошення
            </Link>
          </Section>

          <Section className="text-center mt-8">
            <Text className="text-gray-600">
              Якщо у вас виникли запитання чи проблеми, будь ласка, напишіть нам на{' '}
              <Link
                href="and.pavel.java@gmail.com"
                className="text-[#18B9AE] underline"
              >
               and.pavel.java@gmail.com
              </Link>
              .
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
