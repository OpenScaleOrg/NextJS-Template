'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Star } from '@mui/icons-material'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const testimonials = [
    {
        text: "Saved me thousands on photo shoots. I can now launch products faster and smarter.",
        author: 'Sneha B.',
        title: 'Etsy Seller',
    },
    {
        text: "It feels like having a full photography studio in my browser. The 3D realism is unbelievable.",
        author: 'Riya M.',
        title: 'Streetwear Brand Owner',
    },
    {
        text: "The 2D mockups look better than some real photos I've paid for.",
        author: 'Kirti K.',
        title: 'Freelance Graphic Designer',
    },
]

const Testimonials = () => {
    const [index, setIndex] = useState<number>(0)

    const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length)
    const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <div className="w-full px-4 py-12 max-w-5xl mx-auto text-center overflow-hidden">
            <div className="relative overflow-hidden max-w-[896px] mx-auto">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="min-w-full max-w-[896px] h-[448px] rounded-2xl md:p-16 p-12 shadow-lg border flex flex-col items-center justify-center mx-auto bg-[color:var(--card)] text-[color:var(--card-foreground)] border-[color:var(--border)]"
                        >
                            <div className='rounded-[16px] w-16 h-16 flex justify-center items-center bg-[linear-gradient(135deg,#A855F7_0%,#EC4899_100%)]'>
                                <Image src='/icons/quotes.svg' width={32} height={32} alt='hyper realistic' className='w-8 h-8' />
                            </div>
                            <p className="md:text-[32px] sm:text-[20px] text-[16px] font-bold mb-4 mt-5">{testimonial.text}</p>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="text-yellow-400 h-5 w-5" />
                                ))}
                            </div>
                            <p className="font-bold text-[20px] mt-5"> - {testimonial.author}</p>
                            <p className="text-[14px] text-[color:var(--muted-foreground)]">{testimonial.title}</p>
                        </div>
                    ))}
                </div>

                {/* Arrows */}
                <button
                    title='Previous Testimonial'
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-[color:var(--card)] border border-[color:var(--border)] shadow-md rounded-full p-2"
                >
                    <ChevronLeft className="w-5 h-5 text-[color:var(--foreground)]" />
                </button>
                <button
                    title='Next Testimonial'
                    type='button'
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[color:var(--card)] border border-[color:var(--border)] shadow-md rounded-full p-2"
                >
                    <ChevronRight className="w-5 h-5 text-[color:var(--foreground)]" />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={cn(
                            'w-3 h-3 rounded-full cursor-pointer transition',
                            index === i ? 'bg-[color:var(--primary)]' : 'bg-[color:var(--muted-foreground)]'
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default Testimonials
