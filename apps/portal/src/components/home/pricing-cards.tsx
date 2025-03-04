import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingCards() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses just getting started.",
      features: [
        "AI chatbot trained on your data",
        "Up to 500 conversations/month",
        "Basic analytics",
        "Email support",
        "1 team member",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$79",
      description: "Ideal for growing businesses with moderate support needs.",
      features: [
        "Everything in Starter",
        "Up to 2,000 conversations/month",
        "Advanced analytics",
        "Priority email support",
        "5 team members",
        "Custom chatbot appearance",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large businesses with complex support requirements.",
      features: [
        "Everything in Pro",
        "Unlimited conversations",
        "Dedicated account manager",
        "Phone support",
        "Unlimited team members",
        "Custom integrations",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`flex flex-col border-2 transition-all hover:shadow-md ${
            plan.popular ? "border-primary" : "hover:border-primary/50"
          } dark:bg-gray-800 dark:border-gray-700`}
        >
          {plan.popular && (
            <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Popular
            </div>
          )}
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold">{plan.price}</span>
              {plan.price !== "Custom" && <span className="ml-1 text-gray-500">/month</span>}
            </div>
            <CardDescription className="mt-2">{plan.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
              {plan.cta}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

