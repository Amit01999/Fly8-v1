import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Users,
  School,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/layout/PageHeader';
import PageContainer from '@/components/layout/PageContainer';

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, you would send the data to your backend here
      console.log('Form submitted:', data);

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help with your global education journey"
        background="gradient"
        centerText={true}
      />

      <PageContainer className="pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information Cards */}
          {[
            {
              icon: <Mail className="text-primary" />,
              title: 'Email Us',
              content: 'contact@fly8.global',
              details: "We'll respond within 24 hours",
            },
            {
              icon: <Phone className="text-primary" />,
              title: 'Call Us',
              content: '+8801686395927',
              details: 'Mon-Fri from 9am to 6pm',
            },
            {
              icon: <MapPin className="text-primary" />,
              title: 'Visit Us',
              content: '123 Global Avenue, San Francisco',
              details: 'CA 94105, United States',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-all duration-300 border-t-4 border-t-primary">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg font-medium text-primary">
                    {item.content}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="overflow-hidden">
              <div className="p-6 sm:p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
                <h2 className="text-2xl font-bold mb-1">Send us a message</h2>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Fill out the form below.
                </p>
              </div>
              <CardContent className="p-6 sm:p-8">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 text-center"
                  >
                    <p className="text-lg font-medium">
                      Message sent successfully!
                    </p>
                    <p className="mt-1">
                      We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        {...register('name', { required: 'Name is required' })}
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        placeholder="john@example.com"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        {...register('subject', {
                          required: 'Subject is required',
                        })}
                        className={errors.subject ? 'border-destructive' : ''}
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        rows={6}
                        {...register('message', {
                          required: 'Message is required',
                        })}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ and Additional Details */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="overflow-hidden mb-8">
              <div className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
                <h2 className="text-xl font-bold">Quick Links</h2>
              </div>
              <CardContent className="p-4">
                <ul className="space-y-2">
                  {[
                    {
                      icon: <MessageSquare size={18} />,
                      text: 'Frequently Asked Questions',
                    },
                    { icon: <Users size={18} />, text: 'Student Community' },
                    { icon: <School size={18} />, text: 'University Partners' },
                    { icon: <Globe size={18} />, text: 'Global Offices' },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="flex items-center p-2 hover:bg-muted/50 rounded-md transition-colors"
                      >
                        <span className="mr-3 text-primary">{item.icon}</span>
                        <span>{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Our Offices</h3>

                <div className="space-y-4">
                  {[
                    {
                      city: 'San Francisco',
                      country: 'United States',
                      flag: '🇺🇸',
                    },
                    { city: 'London', country: 'United Kingdom', flag: '🇬🇧' },
                    { city: 'Toronto', country: 'Canada', flag: '🇨🇦' },
                    { city: 'Sydney', country: 'Australia', flag: '🇦🇺' },
                  ].map((office, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="text-2xl mr-3">{office.flag}</span>
                      <div>
                        <p className="font-medium">{office.city}</p>
                        <p className="text-sm text-muted-foreground">
                          {office.country}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </PageContainer>
    </>
  );
};

export default Contact;
