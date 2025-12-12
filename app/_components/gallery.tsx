"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function Gallery() {
  const images = useMemo<GalleryImage[]>(
    () => [
      {
        src: "https://ns5fo2cpxl.ufs.sh/f/YVp23E8WAEj48zMWcQFSsVMnzACjBtlWhw2fUg6rbZemiGQT",
        alt: "Chicken ",
      },
      {
        src: "https://ns5fo2cpxl.ufs.sh/f/YVp23E8WAEj4DmwltVjrlNfXuJym0B7Wzc4M61nIoFKdCGOL",
        alt: "Freshly plated meal",
      },
      {
        src: "https://73yl0jkqaw.ufs.sh/f/zTb1MRSZCGlkgxZxrJ9DcUSYvTV6oOwmLbF0EJMAWx7Cny1z",
        alt: "Chef special",
      },
      {
        src: "https://73yl0jkqaw.ufs.sh/f/zTb1MRSZCGlkvjpqcOymtDbPuowcTqORBrdN0vQ2Lz95jeVa",
        alt: "House favorite",
      },
      {
        src: "https://73yl0jkqaw.ufs.sh/f/zTb1MRSZCGlkYRwpXjgewUNXbDqk6OcPgxmTIulKoH2tAz3a",
        alt: "Comfort food, elevated",
      },
      {
        src: "https://73yl0jkqaw.ufs.sh/f/adc16437-79a9-44fa-b26c-6d36f4f2a59c-ajfvn4.jpg",
        alt: "Cozy restaurant atmosphere",
      },
      {
        src: "https://73yl0jkqaw.ufs.sh/f/f70f4748-5ee3-4596-898f-890b8f9c4acc-m0ruip.jpg",
        alt: "Dining experience",
      },
    ],
    []
  );

  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 pt-20 bg-black">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto py-20 mb-10 max-w-2xl text-center">
          <h2 className="text-3xl  py-10 font-bold tracking-tight md:text-4xl">
            A Taste of IgnisBites
          </h2>
          <p className="mt-3 text-base-content/70">
            Warm plates, fresh ingredients, and the kind of atmosphere that
            feels like home. Take a look at what we’re serving.
          </p>
        </div>

        {/* MOBILE: Centered vertical carousel */}
        <div className="flex justify-center md:hidden">
          <div className="carousel carousel-vertical rounded-box h-96 w-80 shadow-lg">
            {images.map((img) => (
              <div key={img.src} className="carousel-item h-full">
                <button
                  type="button"
                  onClick={() => setSelected(img)}
                  className="relative h-full w-full"
                  aria-label={`Open image: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="320px"
                    className="rounded-box object-cover"
                    priority={img.src === images[0]?.src}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: Grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4">
          {images.map((img) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setSelected(img)}
              className="group relative overflow-hidden rounded-2xl shadow-sm"
              aria-label={`Open image: ${img.alt}`}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {/* <p className="text-left text-sm font-medium text-white">
                  {img.alt}
                </p> */}
                <p className="text-left text-xs text-white/80">
                  Tap to view larger
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Modal (DaisyUI) */}
        {selected && (
          <dialog className="modal modal-open">
            <div className="modal-box w-11/12 max-w-4xl p-0 overflow-hidden">
              <div className="flex items-center justify-between bg-black p-4">
                {/* <p className="text-sm font-medium ">{selected.alt}</p> */}
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute mb-10 text-3xl right-4 top-4 z-20 rounded-full bg-black/60 p-3 text-white backdrop-blur transition hover:bg-black/80"
                >
                  ✕
                </button>
              </div>

              <div className="relative max-h-[75vh] w-full bg-black">
                {/* keep a nice responsive “lightbox” area */}
                <div className="relative h-[70vh] w-full">
                  <Image
                    src={selected.src}
                    alt={selected.alt}
                    fill
                    sizes="(min-width: 1024px) 900px, 92vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* <div className="p-4 bg-black">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-base-content/70">
                    Click other photos to explore more.
                  </p>
                  <button
                    className="btn btn-sm"
                    onClick={() => setSelected(null)}
                  >
                    Close
                  </button>
                </div>
              </div> */}
            </div>

            {/* click outside to close */}
            <form method="dialog" className="modal-backdrop">
              <button onClick={() => setSelected(null)}>close</button>
            </form>
          </dialog>
        )}
      </div>
    </section>
  );
}
