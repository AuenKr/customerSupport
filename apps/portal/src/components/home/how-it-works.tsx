import { Check, Upload, Code, Bot } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-primary" />,
      title: "1. Upload Your Data",
      description: "Add your company information, FAQs, product details, and support documentation.",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "2. Train Your AI",
      description: "Our system automatically processes your data and trains a custom AI model for your business.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "3. Embed the Chatbot",
      description: "Copy and paste a simple code snippet to add the chatbot to your website.",
    },
    {
      icon: <Check className="h-10 w-10 text-primary" />,
      title: "4. Go Live",
      description: "Your AI assistant is ready to help your customers 24/7 with accurate, personalized support.",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <Card
          key={index}
          className="border-2 transition-all hover:border-primary/50 hover:shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <CardHeader>
            <div className="mb-4">{step.icon}</div>
            <CardTitle>{step.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{step.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}