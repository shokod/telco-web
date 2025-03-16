import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Logo } from "@/components/logo"

export default function FallProtectionPage() {
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
            <Link href="/products/ppe" className="text-sm font-medium hover:text-primary">
              PPE
            </Link>
            <Link href="/products/fall-protection" className="text-sm font-medium text-primary">
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
              <span className="text-sm">Fall Protection Equipment</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Fall Protection Equipment</h1>
                <p className="text-lg text-muted-foreground">
                  Comprehensive fall prevention and protection solutions for working at heights safely across the
                  African continent.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                  alt="Fall Protection Equipment"
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
                  <TabsTrigger value="all">All Equipment</TabsTrigger>
                  <TabsTrigger value="harnesses">Harnesses</TabsTrigger>
                  <TabsTrigger value="lanyards">Lanyards</TabsTrigger>
                  <TabsTrigger value="anchors">Anchors</TabsTrigger>
                  <TabsTrigger value="lifelines">Lifelines</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-8">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {/* Full Body Harness */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Full Body Harness"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Full Body Safety Harness</h3>
                      <p className="text-sm text-muted-foreground">SANS 50361 certified with 5-point adjustment</p>
                      <div className="mt-2 font-bold">R1,499.99</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Shock Absorbing Lanyard */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="https://images.pexels.com/photos/8961252/pexels-photo-8961252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Shock Absorbing Lanyard"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Shock Absorbing Lanyard</h3>
                      <p className="text-sm text-muted-foreground">SANS 50354/50355 compliant with energy absorber</p>
                      <div className="mt-2 font-bold">R899.95</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Self-Retracting Lifeline */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="https://images.pexels.com/photos/8961254/pexels-photo-8961254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Self-Retracting Lifeline"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Self-Retracting Lifeline</h3>
                      <p className="text-sm text-muted-foreground">EN 360 certified with quick-activating brake</p>
                      <div className="mt-2 font-bold">R3,295.50</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Roof Anchor */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Roof Anchor"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Reusable Roof Anchor</h3>
                      <p className="text-sm text-muted-foreground">
                        Compatible with wood, metal, and concrete surfaces
                      </p>
                      <div className="mt-2 font-bold">R789.95</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Horizontal Lifeline */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Horizontal Lifeline"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Horizontal Lifeline System</h3>
                      <p className="text-sm text-muted-foreground">EN 795 compliant with tensioner</p>
                      <div className="mt-2 font-bold">R4,250.00</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Fall Arrest Kit */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Fall Arrest Kit"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Complete Fall Arrest Kit</h3>
                      <p className="text-sm text-muted-foreground">
                        Includes harness, lanyard, anchor, and storage bag
                      </p>
                      <div className="mt-2 font-bold">R2,499.99</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Rope Grab */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Rope Grab"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Vertical Rope Grab</h3>
                      <p className="text-sm text-muted-foreground">EN 12841/EN 567 certified with automatic locking</p>
                      <div className="mt-2 font-bold">R1,125.50</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Safety Net */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Safety Net"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Construction Safety Net</h3>
                      <p className="text-sm text-muted-foreground">
                        SANS compliant with border rope and attachment points
                      </p>
                      <div className="mt-2 font-bold">R3,890.00</div>
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

              <TabsContent value="harnesses">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {/* Full Body Harness */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Full Body Harness"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Full Body Safety Harness</h3>
                      <p className="text-sm text-muted-foreground">SANS 50361 certified with 5-point adjustment</p>
                      <div className="mt-2 font-bold">R1,499.99</div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* More harnesses would go here */}
                </div>
              </TabsContent>

              {/* Other tab contents would follow the same pattern */}
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Our Fall Protection</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">SANS/EN Compliant</h3>
                <p className="text-muted-foreground">
                  All our fall protection equipment meets or exceeds South African National Standards and European
                  Norms.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tested & Certified</h3>
                <p className="text-muted-foreground">
                  Rigorously tested to ensure reliability when it matters most, with documented load capacity.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Training Available</h3>
                <p className="text-muted-foreground">
                  We offer comprehensive training on proper use, inspection, and maintenance of fall protection
                  equipment.
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
                <h2 className="text-2xl md:text-3xl font-bold">Need a Custom Fall Protection Solution?</h2>
                <p className="text-primary-foreground/80">
                  Our engineers can design and implement custom fall protection systems for your specific worksite
                  across Africa.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Button variant="secondary">Schedule a Site Assessment</Button>
                  <Button
                    variant="outline"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Contact Our Engineers
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
              <Logo size="sm" />
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
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

