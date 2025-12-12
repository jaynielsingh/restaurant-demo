import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Wagyu Burger ",
    href: "#",
    price: "$40",
    description:
      "Special burger is made with the finest ingredients and has been cooked to perfection. Wagyu beef patty, lettuce, tomato, onion, and cheese.",
    options: "8 colors",
    imageSrc:
      "https://ns5fo2cpxl.ufs.sh/f/YVp23E8WAEj4BS3U7KyfVFm9e7xSrGAcW4C1wIHPYLakOX68",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Chicken Fried Rice",
    href: "#",
    price: "$15",
    description:
      "Chicken Fried Rice is a dish that is made with chicken, rice, and vegetables.",
    options: "Black",
    imageSrc:
      "https://ns5fo2cpxl.ufs.sh/f/YVp23E8WAEj4rUIyj4DL8wiS9mghF7odLZVeGa5XABWnMjqI",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 3,
    name: "Club Sandwich",
    href: "#",
    price: "$10",
    description:
      "Club Sandwich is a sandwich that is made with bread, meat, cheese, and vegetables. ",
    options: "White",
    imageSrc:
      "https://ns5fo2cpxl.ufs.sh/f/YVp23E8WAEj4VUs2Nupi4ycgLMXdERs1SpJoeFuBY5axhU7I",
    imageAlt: "Front of plain white t-shirt.",
  },
  {
    id: 4,
    name: "Salad",
    href: "#",
    price: "$15",
    description:
      "Salad is a salad that is made with lettuce, tomatoes, cucumbers, and cheese.",
    options: "Charcoal",
    imageSrc:
      "https://ns5fo2cpxl.ufs.sh/f/YVp23E8WAEj4RGC6jQ9v4bUXFZJ7GePoDwOA1chqap92tYVj",
    imageAlt: "Front of plain dark gray t-shirt.",
  },
  {
    id: 5,
    name: "Egg & Shrimp Noodle Bowl",
    href: "#",
    price: "$20",
    description:
      "Egg & Shrimp Noodle Bowl is a dish that is made with egg, shrimp, noodles, and vegetables.",
    options: "Charcoal",
    imageSrc:
      "https://ns5fo2cpxl.ufs.sh/f/YVp23E8WAEj46O2CHTvhaAp8EiqK4X1zBQ5MbkYU2vRFfT7o",
    imageAlt:
      "Three shirts arranged on table in mustard, dark gray, and olive.",
  },
  {
    id: 6,
    name: "Italian Chicken Pasta",
    href: "#",
    price: "$20",
    description:
      "Italian Pasta is a pasta dish that is made with pasta, tomatoes, and cheese.",
    options: "3 colors",
    imageSrc:
      "https://ns5fo2cpxl.ufs.sh/f/YVp23E8WAEj4JESvtOGzldVfWmSbqOCPj4n92N8YcHXGEhRQ",
    imageAlt:
      "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
  },
];

export default function Menu() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="mx-auto font-serif mb-10 max-w-2xl py-20 text-center">
          <h2 className="text-3xl py-10 font-bold tracking-tight md:text-4xl">
            Our Top Menu
          </h2>
          <p className="mt-3 text-base-content/70">
            These are the top 5 dishes we recommend. We’ve got a few favorites
            here, but we’re always adding new favorites to our menu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-800 "
            >
              <Image
                width={1000}
                height={1000}
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-3/4 w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
              />
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-md font-bold font-serif tracking-tight text-balance">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm font-serif tracking-wide ">
                  {product.description}
                </p>
                <div className="flex flex-1 flex-col justify-end">
                  {/* <p className="text-sm text-gray-500 italic">{product.options}</p> */}
                  <p className="text-base font-medium">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-32 flex items-center justify-center  gap-x-6">
          <a
            href="#"
            className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:text-black hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}
