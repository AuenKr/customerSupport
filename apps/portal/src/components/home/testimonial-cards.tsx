import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function TestimonialCards() {
  const testimonials = [
    {
      quote:
        "SupportAI has completely transformed our customer support. We've reduced response times by 80% while maintaining high customer satisfaction.",
      author: "Sarah Johnson",
      role: "Customer Success Manager",
      company: "TechSolutions Inc.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The setup was incredibly easy, and the AI is surprisingly accurate. Our customers love getting instant answers at any time of day.",
      author: "Michael Chen",
      role: "E-commerce Director",
      company: "StyleShop",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "We've seen a 40% reduction in support tickets since implementing SupportAI. It's been a game-changer for our small team.",
      author: "Jessica Williams",
      role: "Founder & CEO",
      company: "GrowthStartup",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="border-2 transition-all hover:border-primary/50 hover:shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <CardHeader>
            <div className="relative h-12">
              <svg
                className="absolute text-primary/10"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.0908 5C8.86794 5 7.0908 6.79086 7.0908 9V15.5C7.0908 17.7091 8.86794 19.5 11.0908 19.5H12.0908C14.3139 19.5 16.0908 17.7091 16.0908 15.5V12.5C16.0908 12.2239 15.867 12 15.5908 12H12.0908V9C12.0908 7.34315 13.434 6 15.0908 6H15.5908C15.867 6 16.0908 5.77614 16.0908 5.5V5C16.0908 4.72386 15.867 4.5 15.5908 4.5H11.0908C8.86794 4.5 7.0908 6.29086 7.0908 8.5V15C7.0908 17.2091 8.86794 19 11.0908 19H12.0908C14.3139 19 16.0908 17.2091 16.0908 15V12C16.0908 11.7239 15.867 11.5 15.5908 11.5H12.0908V8.5C12.0908 6.84315 13.434 5.5 15.0908 5.5H15.5908C15.867 5.5 16.0908 5.27614 16.0908 5V4.5C16.0908 4.22386 15.867 4 15.5908 4H11.0908Z" />
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">{testimonial.quote}</p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}