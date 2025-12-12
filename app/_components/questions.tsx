import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Are my orders cooked fresh when i place an order?",
    answer: "Yes, all orders are cooked fresh to perfection. ",
  },
  {
    question: "Do you guys accept cashless payments?",
    answer:
      "Yes, our business accepts cashless payments. We accept all major credit cards, debit cards, and even Apple Pay. ",
  },
  {
    question: "How long does it take to get my order delivered?",
    answer:
      "As soon as we receiving your order, we cook it fresh to perfection and then deliver it to you within 30mins of placing your order. ",
  },
  {
    question: "Do you have vegetarian or vegan options?",
    answer:
      "Yes, we offer a variety of vegetarian options and can accommodate vegan requests. Please let our staff know if you have any dietary preferences.",
  },
  {
    question: "Do you offer catering or private events?",
    answer:
      "Yes, we offer catering and can host private events for special occasions. Contact us to discuss your event and menu options.",
  },
  {
    question: "Are your ingredients fresh?",
    answer:
      "Yes. We use fresh, high-quality ingredients and prepare our dishes daily to ensure the best flavor and quality in every meal.",
  },
];

export default function QNA() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight ">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10 dark:divide-white/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left ">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 ">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
