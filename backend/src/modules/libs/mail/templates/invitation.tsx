import {
  Body,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
  Link,
} from '@react-email/components'
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
      <Preview>Запрошення приєднатися до StarTaskKids</Preview>
      <Tailwind>
        <Body className="bg-[#f7fdfc] text-black font-sans">
          <Section className="bg-white max-w-xl mx-auto my-10 p-8 rounded-2xl shadow-lg border border-[#e0f2f1]">
            
            {/* Назва або логотип */}
            <Section className="text-center mb-6">
              <Heading className="text-2xl font-extrabold text-[#18B9AE] tracking-tight">
                StarTaskKids
              </Heading>
              <Text className="text-sm text-gray-600 mt-1">
                Гейміфікований трекер завдань для дітей і батьків
              </Text>
            </Section>

            {/* Основне повідомлення */}
            <Section className="text-center mt-6 mb-8">
              <Heading className="text-xl font-semibold text-gray-800 mb-4">
                ✨ Вас запросили до кімнати
              </Heading>
              <Text className="text-base text-gray-700 mb-6">
                Натисніть кнопку нижче, щоб прийняти запрошення до спільної кімнати
                в <strong>StarTaskKids</strong> і почати отримувати зірки за завдання!
              </Text>

              <Link
                href={acceptLink}
                className="inline-block bg-[#18B9AE] text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#15a9a0] transition"
              >
                ✅ Прийняти запрошення
              </Link>
            </Section>

            {/* Підтримка */}
            <Section className="text-center text-sm mt-8 border-t pt-6 border-gray-200">
              <Text className="text-gray-500">
                Якщо у вас виникли питання, зверніться до нас на{' '}
                <Link
                  href="mailto:and.pavel.java@gmail.com"
                  className="text-[#18B9AE] underline"
                >
                  and.pavel.java@gmail.com
                </Link>
              </Text>
            </Section>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
