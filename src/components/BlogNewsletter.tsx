import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, Mail } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Scholarships for International Students in 2025',
    excerpt:
      'Discover fully-funded opportunities at prestigious universities worldwide.',
    image:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'April 2, 2025',
    readTime: '5 min read',
    tag: 'Scholarships',
  },
  {
    id: 2,
    title: 'Student Visa Guide: Common Pitfalls and How to Avoid Them',
    excerpt:
      'Expert tips to navigate the complex visa application process successfully.',
    image:
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'March 28, 2025',
    readTime: '7 min read',
    tag: 'Visa Tips',
  },
  {
    id: 3,
    title: 'Life After Graduation: Career Paths for International Students',
    excerpt:
      'How to leverage your international degree for global career success.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'March 21, 2025',
    readTime: '6 min read',
    tag: 'Career Advice',
  },
];

const BlogNewsletter = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h2 className="heading-lg mb-4">Latest from Our Blog</h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Expert insights and student success stories to guide your
                educational journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full border-0 shadow-md">
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                          {post.tag}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span className="mr-3">{post.date}</span>
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <a
                        href="#"
                        className="text-primary inline-flex items-center text-sm font-medium"
                      >
                        Read more <ArrowRight size={16} className="ml-1" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="rounded-full">
                View All Articles <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Mail size={32} className="text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">
                Stay Informed
              </h3>
              <p className="text-white/90 mb-6 text-center">
                Get the latest updates on scholarships, application deadlines,
                and educational opportunities.
              </p>

              <form className="mt-auto">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Subscribe to Newsletter
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
