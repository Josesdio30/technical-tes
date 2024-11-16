'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HeroSection() {
  const autoplayPlugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  const images = [
    "https://cms.vocagame.com/uploads/Gopay_Coins_Payment_Banner_copy_0bd8b4e74e.webp",
    "https://cms.vocagame.com/uploads/booyah_pass_baner_copy_1_22b87a4f40.webp",
    "https://cms.vocagame.com/uploads/starlight_oktoberbaner_copy_1_bdc66cc940.webp",
    "https://cms.vocagame.com/uploads/baner_vw_pubgm_copy_1_7bbe79bcea.webp"
  ];

  return (
    <div className="w-full flex justify-center py-10">
      <Carousel
        plugins={[autoplayPlugin.current]}
        className="w-full max-w-full md:max-w-7xl"  // Set max width to full on mobile, 7xl on medium screens and up
        onMouseEnter={autoplayPlugin.current.stop}
        onMouseLeave={autoplayPlugin.current.reset}
      >
        <CarouselContent className="flex space-x-4">
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-gray-800 rounded-lg shadow-lg border-none">
                  <CardContent
                    className="flex items-center justify-center w-full h-48 md:h-80 p-6"  // Adjust height for mobile (h-48) and larger screens (h-80)
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "12px",
                    }}
                  >
                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2" />
      </Carousel>
    </div>
  )
}