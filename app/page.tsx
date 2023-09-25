import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import headset from "../public/img/headset-shadow.webp";
import user1 from "../public/img/human-avatar.jpg";
import user2 from "../public/img/human-avatar-2.jpg";
import user3 from "../public/img/human-avatar-3.jpg";
import user4 from "../public/img/human-avatar-4.jpg";
import user5 from "../public/img/human-avatar-5.jpg";
import Image from 'next/image';
import ProductList from "@/components/ProductList"

export default function Home() {
  const users = [
    {
      name: "Image 1",
      link: user1
    },
    {
      name: "Image 2",
      link: user2
    },
    {
      name: "Image 3",
      link: user3
    },
    {
      name: "Image 4",
      link: user4
    },
    {
      name: "Image 5",
      link: user5
    },
  ];

  const products = [
    {
      id: "1",
      category: "Earphone",
      name: "Bluetooth earphone",
      price: "N3,000",
      images: ["/img/earphones_a_1.webp"],
    },
    {
      id: "1",
      category: "Earphone",
      name: "Bluetooth earphone",
      price: "N3,000",
      images: ["/img/earphones_a_1.webp"],
    },
    {
      id: "1",
      category: "Earphone",
      name: "Bluetooth earphone",
      price: "N3,000",
      images: ["/img/earphones_a_1.webp"],
    },
    {
      id: "1",
      category: "Earphone",
      name: "Bluetooth earphone",
      price: "N3,000",
      images: ["/img/earphones_a_1.webp"],
    },
    {
      id: "1",
      category: "Earphone",
      name: "Bluetooth earphone",
      price: "N3,000",
      images: ["/img/earphones_a_1.webp"],
    },
    {
      id: "1",
      category: "Earphone",
      name: "Bluetooth earphone",
      price: "N3,000",
      images: ["/img/earphones_a_1.webp"],
    },
    {
      id: "1",
      category: "Earphone",
      name: "Bluetooth earphone",
      price: "N3,000",
      images: ["/img/earphones_a_1.webp"],
    },
    {
      id: "1",
      category: "Earphone",
      name: "Bluetooth earphone",
      price: "N3,000",
      images: ["/img/earphones_a_1.webp"],
    },
    {
      id: "1",
      category: "Earphone",
      name: "Bluetooth earphone",
      price: "N3,000",
      images: ["/img/earphones_a_1.webp"],
    },
    {
      id: "1",
      category: "Earphone",
      name: "Bluetooth earphone",
      price: "N3,000",
      images: ["/img/earphones_a_1.webp"],
    },
  ]

  return (
    <Container>
      <div>
        <div className="grid grid-cols-12">
          <div className="md:col-span-6 order-1 col-span-12 flex items-center  md:px-0 px-5">
            <div>
              <div className='flex gap-2 flex-col'>
              <div className='flex gap-2'>
                <span className="rounded-full bg-destructive px-2 py-1 text-xs font-semibold text-white uppercase items-center flex">new</span>
                <p className='text-lg uppercase font-semibold text-slate-600 flex items-center'>popular picks</p>
              </div>
              <h1 className='uppercase font-bold md:text-8xl text-6xl'>Smart HeadSet.</h1>
              </div>
              <div className="mt-3 text-md font-medium">
                  <span className="text-slate-600  hover:cursor-pointer flex md:pr-0 pr-20 text-lg">Listen to people talk about their favourite product.</span>
              </div>
              <div className="flex -space-x-2 overflow-hidden">
                {users.map((user, i) => (
                  <Image className="inline-block h-12 w-12 mt-5 mb-2 mx-2 rounded-full ring-2 object-cover ring-white" src={user.link} alt={user.name} key={i} />
                ))}
              </div>
              <div className="mt-3 text-sm font-medium">
                <a href="#" className="text-blue-500">+ 198 others</a>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12">
            <Image src={headset} alt='headset with shadow' />
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} />
        </div>
      </div>
    </Container>
  );
}
