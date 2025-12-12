import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative bg-black ">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <div className="mt-32">
              <div className="relative rounded-full px-3 py-1 font-stretch-50% text-3xl font-bold font-serif ">
                About Us
              </div>
            </div>
            <p className="mt-8 text-lg font-serif  text-pretty ">
              At IgnisBites, we believe the best meals are the ones that feel
              like home. Our kitchen is built on time-honored recipes, fresh
              ingredients, and a genuine love for bringing people together
              around the table. Every dish is prepared with care, served with
              warmth, and made to be enjoyed in a space where guests feel
              comfortable, welcomed, and valued. Whether you’re stopping by for
              a quiet dinner or sharing a meal with family and friends, we
              strive to make every visit feel familiar, comforting, and
              memorable.
            </p>
            {/* <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-gray-900 dark:text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            width={2000}
            height={2000}
            alt=""
            src="https://73yl0jkqaw.ufs.sh/f/8f6da40e-8b89-466f-b127-a042bdb14ade-7nyh5c.jpg"
            className="aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full dark:bg-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
