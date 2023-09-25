import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import headset from "../public/img/headset-shadow.webp";
import user1 from "../public/img/human-avatar.jpg";
import Image from 'next/image';

export default function Home() {
  const users = [
    {
      name: "Image 1",
      link: user1
    },
    {
      name: "Image 2",
      link: user1
    },
    {
      name: "Image 3",
      link: user1
    },
    {
      name: "Image 4",
      link: user1
    },
    {
      name: "Image 5",
      link: user1
    },
  ];

  return (
    <Container>
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex items-center border-dotted border-r-2">
            <div>
              <div className='flex gap-2'>
                <span className="rounded-full bg-destructive px-2 py-1 text-xs font-semibold text-white uppercase items-center flex">new</span>
                <p className='text-lg uppercase font-semibold text-slate-600 flex items-center'>popular picks</p>
              </div>
              <h1 className='uppercase font-bold text-8xl'>Smart HeadSet.</h1>
              <div className="flex -space-x-2 overflow-hidden">
                {users.map((user, i) => (
                  <Image className="inline-block h-12 w-12 my-10 mx-2 rounded-full ring-2 ring-white" src={user.link} alt={user.name} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <Image src={headset} alt='headset with shadow' />
          </div>
        </div>
      </div>
    </Container>
  )
}
