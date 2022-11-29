import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does Hamlet manage my property?',
      answer:
        'Yes, we manage your property end-to-end, from application through to end-of-tenancy.',
    },
    {
      question: 'Do you offer discounts for multiple properties',
      answer: 'Absolutely, get in touch with us to discuss volume pricing.',
    },
    {
      question: 'How do you screen residents?',
      answer:
        'We conduct identity and income verification, background checks, character checks and credit checks.',
    },
  ],
  [
    {
      question: 'How do I pay for Hamlet?',
      answer:
        'We set up a direct debit payment which is billed monthly.',
    },
    {
      question:
        'Where do rent payments go?',
      answer:
        'All rent monies are reconciled in an audited Trust Account and transferred directly to homeowners. No fees are deducted from rent.',
    },
    {
      question:
        'How do I sign up for home improvements?',
      answer:
        'You can get started in the Hamlet app, just fill out a homeowner application.',
    },
  ],
  [
    {
      question: 'Can I transfer an active tenancy?',
      answer:
        "Absolutely, just give us the details and we'll take care of it for you. If you're with another property manager we'll handle any break costs.",
    },
    {
      question: 'Where does Hamlet operate?',
      answer:
        'Hamlet is currently operating in Auckland.',
    },
    {
      question: 'When is Hamlet launching?',
      answer: 'Hamlet is coming to Auckland in February 2022',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If these don't answer your question then please get in touch with us!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
