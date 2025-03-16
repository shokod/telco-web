import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Logo } from "@/components/logo"
import { CheckCircle } from "lucide-react"

export default function PPEPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Logo size="md" />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/products/ppe" className="text-sm font-medium text-primary">
              PPE
            </Link>
            <Link href="/products/fall-protection" className="text-sm font-medium hover:text-primary">
              Fall Protection
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart (0)
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm">Personal Protective Equipment</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Personal Protective Equipment</h1>
                <p className="text-lg text-muted-foreground">
                  Comprehensive protection for workers in hazardous environments with industry-leading PPE solutions.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618090584176-7132b9911657?q=80&w=1974&auto=format&fit=crop"
                  alt="Personal Protective Equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All PPE</TabsTrigger>
                  <TabsTrigger value="head">Head Protection</TabsTrigger>
                  <TabsTrigger value="eye">Eye Protection</TabsTrigger>
                  <TabsTrigger value="hand">Hand Protection</TabsTrigger>
                  <TabsTrigger value="clothing">Protective Clothing</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-8">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {/* Hard Hat */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1969&auto=format&fit=crop"
                        alt="Hard Hat"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Premium Hard Hat</h3>
                      <p className="text-sm text-muted-foreground">
                        ANSI Type II Class E certified for superior impact protection
                      </p>
                      <div className="mt-2 font-bold">$45.99</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Safety Glasses */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="https://images.pexels.com/photos/5691495/pexels-photo-5691495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Safety Glasses"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Anti-Fog Safety Glasses</h3>
                      <p className="text-sm text-muted-foreground">
                        Impact-resistant with UV protection and anti-fog coating
                      </p>
                      <div className="mt-2 font-bold">$24.99</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Work Gloves */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="https://images.pexels.com/photos/4792075/pexels-photo-4792075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Work Gloves"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Cut-Resistant Work Gloves</h3>
                      <p className="text-sm text-muted-foreground">
                        ANSI Cut Level A4 protection with touchscreen compatibility
                      </p>
                      <div className="mt-2 font-bold">$32.50</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Safety Vest */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="https://images.unsplash.com/photo-1622219809260-ce065fc5277e?q=80&w=1974&auto=format&fit=crop"
                        alt="Safety Vest"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">High-Visibility Safety Vest</h3>
                      <p className="text-sm text-muted-foreground">
                        ANSI/ISEA 107 Class 2 compliant with reflective strips
                      </p>
                      <div className="mt-2 font-bold">$19.95</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Ear Protection */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Ear Protection"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Professional Ear Defenders</h3>
                      <p className="text-sm text-muted-foreground">
                        NRR 28dB noise reduction with comfortable padded headband
                      </p>
                      <div className="mt-2 font-bold">$36.75</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Respirator */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Respirator"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Half-Face Respirator</h3>
                      <p className="text-sm text-muted-foreground">
                        Dual cartridge design for protection against dust and fumes
                      </p>
                      <div className="mt-2 font-bold">$54.99</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Safety Boots */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Safety Boots"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Steel Toe Work Boots</h3>
                      <p className="text-sm text-muted-foreground">
                        ASTM F2413-18 certified with slip-resistant outsole
                      </p>
                      <div className="mt-2 font-bold">$129.99</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Face Shield */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Face Shield"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Full Face Shield</h3>
                      <p className="text-sm text-muted-foreground">
                        Clear polycarbonate with adjustable headgear for full face protection
                      </p>
                      <div className="mt-2 font-bold">$28.50</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="head">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {/* Hard Hat */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Hard Hat"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Premium Hard Hat</h3>
                      <p className="text-sm text-muted-foreground">
                        ANSI Type II Class E certified for superior impact protection
                      </p>
                      <div className="mt-2 font-bold">$45.99</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* More head protection items would go here */}
                </div>
              </TabsContent>

              {/* Other tab contents would follow the same pattern */}
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Our PPE</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
                <p className="text-muted-foreground">
                  All our PPE products meet or exceed industry standards and certifications, ensuring maximum
                  protection.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comfort & Durability</h3>
                <p className="text-muted-foreground">
                  Designed for all-day wear with ergonomic features and durable materials that withstand harsh
                  conditions.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Consultation</h3>
                <p className="text-muted-foreground">
                  Our safety specialists can help you select the right PPE for your specific workplace hazards and
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-primary text-primary-foreground p-8 rounded-xl">
              <div className="text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Need Custom PPE Solutions?</h2>
                <p className="text-primary-foreground/80">
                  Contact our team for bulk orders, custom branding, or specialized safety equipment needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Button variant="secondary">Request a Quote</Button>
                  <Button
                    variant="outline"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Contact Sales Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <Logo size="md" />
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TIS Global (Pty) Ltd. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link href="/about" className="text-xs text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/contact" className="text-xs text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

