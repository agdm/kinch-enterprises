"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    location: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const serviceAreas = ["New York", "New Jersey", "Connecticut", "Georgia", "Florida"]

  const services = [
    "Real Estate Development",
    "General Construction",
    "Project Management",
    "Custom Design",
    "HVAC Design",
    "Remodeling & Renovation",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 mb-6">
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Let&apos;s Build Something Great Together</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to start your next project? Get in touch with our team to discuss how we can bring your vision to
              life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Request a Quote</CardTitle>
                  <p className="text-slate-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Project Location *</Label>
                        <Select onValueChange={(value) => handleInputChange("location", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceAreas.map((area, index) => (
                              <SelectItem key={index} value={area}>
                                {area}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please describe your project, timeline, budget range, and any specific requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Phone</p>
                      <a href="tel:404-840-5723" className="text-slate-600 hover:text-orange-500">
                        (404) 840-5723
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <a href="mailto:urielkinch@gmail.com" className="text-slate-600 hover:text-orange-500">
                        urielkinch@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Address</p>
                      <p className="text-slate-600">
                        61 Hickory Hill Road
                        <br />
                        Simsbury, Connecticut
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Business Hours</p>
                      <p className="text-slate-600">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
                        <br />
                        Sunday: By appointment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">We proudly serve clients across the Northeast and Southeast:</p>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.map((area, index) => (
                      <Badge key={index} variant="outline" className="border-orange-200 text-orange-700">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm mb-3">For urgent project matters or emergencies:</p>
                  <a href="tel:404-840-5723" className="text-orange-500 hover:text-orange-600 font-medium">
                    (404) 840-5723
                  </a>
                  <p className="text-slate-500 text-xs mt-2">Available 24/7 for existing project emergencies</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">Common questions about our services and process</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">What types of projects do you handle?</h3>
                  <p className="text-slate-600 text-sm">
                    We handle real estate development, general construction, project management, custom design, HVAC
                    design, and remodeling projects across commercial, residential, and non-profit sectors.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">What is your typical project timeline?</h3>
                  <p className="text-slate-600 text-sm">
                    Project timelines vary based on scope and complexity. We provide detailed schedules during the
                    planning phase and maintain regular communication throughout the project.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Do you provide free consultations?</h3>
                  <p className="text-slate-600 text-sm">
                    Yes, we offer free initial consultations to discuss your project requirements, timeline, and provide
                    preliminary cost estimates.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Are you licensed and insured?</h3>
                  <p className="text-slate-600 text-sm">
                    Yes, Kinch Enterprises is fully licensed and insured in all states where we operate. We maintain
                    comprehensive liability and workers&apos; compensation coverage.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">How do you ensure project quality?</h3>
                  <p className="text-slate-600 text-sm">
                    We implement rigorous quality control processes, regular inspections, and maintain open
                    communication with clients throughout every phase of the project.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Do you work with sustainable materials?</h3>
                  <p className="text-slate-600 text-sm">
                    Absolutely. Sustainability is core to our mission. We prioritize eco-friendly materials and
                    energy-efficient solutions in all our projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
