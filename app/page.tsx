import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import headset from "../public/img/headset-shadow.webp"
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-6">

          </div>
          <div className="col-span-6">
            <Image src={headset} alt='headset with shadow'/>
          </div>
        </div>
      </div>
    </Container>
  )
}
