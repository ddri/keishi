"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Music, Mail, Phone, MapPin, Send, ExternalLink, Users, Briefcase } from "lucide-react"
import Header from "@/components/header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    inquiryType: 'General',
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInquiryTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: type
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-zinc-800 px-4 py-2 rounded-full mb-8">
              <span className="text-xs tracking-widest text-zinc-300 uppercase">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              CONTACT
            </h1>
            <p className="text-xl md:text-2xl font-light text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect for collaborations, bookings, press inquiries, or general correspondence
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              
              {/* Contact Information */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight">
                    Let's
                    <br />
                    <span className="text-zinc-400">Connect</span>
                  </h2>
                  <p className="text-lg text-zinc-300 font-light leading-relaxed mb-8">
                    Whether you're interested in collaborations, booking performances, media inquiries, 
                    or simply want to discuss music, I'd love to hear from you.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-400 uppercase tracking-wide">Email</div>
                      <div className="text-white font-light">contact@keishiurata.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-400 uppercase tracking-wide">Management</div>
                      <div className="text-white font-light">management@keishiurata.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-400 uppercase tracking-wide">Press & Media</div>
                      <div className="text-white font-light">press@keishiurata.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-400 uppercase tracking-wide">Location</div>
                      <div className="text-white font-light">Tokyo, Japan</div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-light mb-4 tracking-wide">Response Times</h3>
                  <div className="space-y-3 text-sm text-zinc-400">
                    <div className="flex justify-between">
                      <span>General Inquiries</span>
                      <span className="text-zinc-300">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Collaboration Requests</span>
                      <span className="text-zinc-300">3-5 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Press & Media</span>
                      <span className="text-zinc-300">Same day</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="bg-zinc-950 border-zinc-800">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h3 className="text-2xl font-light mb-4 tracking-wide">Send a Message</h3>
                      <p className="text-zinc-400 font-light">
                        Fill out the form below and I'll get back to you as soon as possible.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Inquiry Type */}
                      <div>
                        <Label htmlFor="inquiryType" className="text-sm font-light tracking-wide text-zinc-300 mb-3 block">
                          INQUIRY TYPE
                        </Label>
                        <div className="flex flex-wrap gap-3">
                          {[
                            { value: "general", label: "General" },
                            { value: "collaboration", label: "Collaboration" },
                            { value: "booking", label: "Booking" },
                            { value: "press", label: "Press & Media" }
                          ].map((type) => (
                            <Badge
                              key={type.value}
                              variant={formData.inquiryType === type.value ? "default" : "outline"}
                              className={`cursor-pointer px-4 py-2 ${
                                formData.inquiryType === type.value
                                  ? "bg-white text-black"
                                  : "border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                              }`}
                              onClick={() => handleInquiryTypeChange(type.value)}
                            >
                              {type.label}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Name & Email */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-sm font-light tracking-wide text-zinc-300 mb-3 block">
                            NAME *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-500"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm font-light tracking-wide text-zinc-300 mb-3 block">
                            EMAIL *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-500"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <Label htmlFor="subject" className="text-sm font-light tracking-wide text-zinc-300 mb-3 block">
                          SUBJECT *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-500"
                          placeholder="Brief subject line"
                          required
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message" className="text-sm font-light tracking-wide text-zinc-300 mb-3 block">
                          MESSAGE *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-500 min-h-[120px]"
                          placeholder="Your message..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-white text-black hover:bg-zinc-200 font-light tracking-wide py-6"
                      >
                        <Send className="h-4 w-4 mr-3" />
                        SEND MESSAGE
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Links */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
                <span className="text-xs tracking-widest text-zinc-400 uppercase">Connect Online</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
                Follow &
                <br />
                <span className="text-zinc-400">Listen</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Spotify", description: "Latest releases and playlists", url: "#" },
                { name: "Apple Music", description: "Complete discography", url: "#" },
                { name: "YouTube", description: "Official videos and live performances", url: "#" },
                { name: "SoundCloud", description: "Experimental tracks and demos", url: "#" }
              ].map((platform) => (
                <Card key={platform.name} className="bg-zinc-900 border-zinc-800 hover:border-zinc-600 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-white to-zinc-400 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-lg font-light mb-2 tracking-wide">{platform.name}</h3>
                    <p className="text-sm text-zinc-400 font-light mb-4">{platform.description}</p>
                    <Button variant="outline" size="sm" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800">
                      Visit
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
                <span className="text-xs tracking-widest text-zinc-400 uppercase">Common Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
                Frequently
                <br />
                <span className="text-zinc-400">Asked</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Are you available for film scoring projects?",
                  answer: "Yes, I'm selective about film projects but always open to discussing interesting opportunities. Please include project details, timeline, and budget considerations in your inquiry."
                },
                {
                  question: "Do you offer music production mentorship?",
                  answer: "I occasionally take on mentorship roles for promising electronic music artists. Applications are reviewed quarterly, and positions are extremely limited."
                },
                {
                  question: "Can I license your music for commercial use?",
                  answer: "Licensing inquiries should be directed to my management team. Please specify the intended use, duration, and geographic scope for accurate licensing terms."
                },
                {
                  question: "Do you perform live concerts?",
                  answer: "I perform select live shows annually, typically at major electronic music festivals or special events. Booking inquiries should be submitted at least 6 months in advance."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-zinc-950 border-zinc-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-light mb-4 tracking-wide">{faq.question}</h3>
                    <p className="text-zinc-400 font-light leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-6 h-6 bg-gradient-to-br from-white to-zinc-400 rounded-sm flex items-center justify-center">
                  <Music className="h-3 w-3 text-black" />
                </div>
                <span className="text-lg font-light tracking-wider">KEISHI URATA</span>
              </div>
              <p className="text-zinc-400 max-w-md font-light leading-relaxed">
                Legendary Japanese composer and pioneer of electronic music in anime and media. Creator of the iconic
                Akira soundtrack and over 400 musical works.
              </p>
            </div>
            <div>
              <h4 className="text-white font-light mb-6 tracking-wide">NAVIGATION</h4>
              <ul className="space-y-3 text-zinc-400 font-light">
                <li>
                  <Link href="/discography" className="hover:text-white transition-colors tracking-wide">
                    Discography
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors tracking-wide">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors tracking-wide">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white transition-colors tracking-wide">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-light mb-6 tracking-wide">PLATFORMS</h4>
              <ul className="space-y-3 text-zinc-400 font-light">
                <li>
                  <Link href="#" className="hover:text-white transition-colors tracking-wide">
                    Spotify
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors tracking-wide">
                    Apple Music
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors tracking-wide">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors tracking-wide">
                    SoundCloud
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-16 pt-8 text-center text-zinc-500 font-light tracking-wide">
            <p>&copy; {new Date().getFullYear()} KEISHI URATA. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 