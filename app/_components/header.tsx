"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50 min-h-max">
        <nav
          aria-label="Global"
          className="flex items-center justify-between m-10 p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
              width={1000}
              height={1000}
                alt=""
                src="https://ns5fo2cpxl.ufs.sh/f/YVp23E8WAEj4qpYUqKgAymKQov7hEurt1d5RCefW8UL6XYGx"
                className="h-32 rounded-full w-auto "
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 dark:text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold "
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm/6 font-semibold "
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-black dark:sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="https://ns5fo2cpxl.ufs.sh/f/YVp23E8WAEj4qpYUqKgAymKQov7hEurt1d5RCefW8UL6XYGx"
                  className="h-20 rounded-full w-auto "
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:text-black hover:bg-gray-50 "
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden h-screen w-full pt-14">
        <Image
          width={1000}
          height={1000}
          alt=""
          src="https://ns5fo2cpxl.ufs.sh/f/YVp23E8WAEj42FzIADU3A48GwD5IvRY9xoJbnKNdThHC6Z7B"
          className="absolute opacity-60 inset-0 -z-10 size-full w-full h-full object-center object-cover "
        />

        <div className="mx-auto max-w-7xl mt-64 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h2 className="text-5xl font-extrabold font-serif tracking-tight text-balance">
                Where Flavor Meets Experience
              </h2>
              {/* <p className="mt-8 font-serif text-lg font-medium text-pretty">
                From handcrafted dishes to unforgettable moments, IgnisBites
                brings people together—starting with a beautifully designed
                website.
              </p> */}
              <div className=" mt-32 flex items-center justify-center  gap-x-6">
                <Link
                  href="/menu"
                  className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:text-black hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Explore Our Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
