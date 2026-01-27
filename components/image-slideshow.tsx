"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface ImageSlideshowProps {
  images: string[]
  className?: string
  imageClassName?: string
}

export function ImageSlideshow({ images, className, imageClassName }: ImageSlideshowProps) {
  if (!images || images.length === 0) return null

  return (
    <Carousel className={cn("w-full h-full group", className)}>
      <CarouselContent className="-ml-0">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-0 border-none">
            <div className="relative aspect-[4/3] w-full h-full overflow-hidden">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className={cn("object-cover", imageClassName)}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white text-slate-900 border-none" />
          <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white text-slate-900 border-none" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                className="w-1.5 h-1.5 rounded-full bg-white/50 shadow-sm"
              />
            ))}
          </div>
        </>
      )}
    </Carousel>
  )
}
