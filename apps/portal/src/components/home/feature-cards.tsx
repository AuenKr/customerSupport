import { Bot, MessageSquare, Settings, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureCards() {
  const features = [
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI-Powered Chatbot",
      description: "Our advanced AI understands context and provides accurate answers based on your company data.",
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Easy Integration",
      description: "Add our chatbot to your website with a simple embed code. No coding knowledge required.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Knowledge Base Training",
      description: "Upload your FAQs, documentation, and company information to train your custom AI assistant.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "24/7 Availability",
      description: "Provide instant support to your customers around the clock without hiring a large support team.",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="border-2 transition-all hover:border-primary/50 hover:shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <CardHeader>
            <div className="mb-4">{feature.icon}</div>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

