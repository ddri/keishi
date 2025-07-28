import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Badge } from "./ui/badge"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    inquiryType: 'general',
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
    // You could add form submission logic here
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
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
  )
}