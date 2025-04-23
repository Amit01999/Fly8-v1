import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { School, Mail, Lock, Building, Phone, User } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';
import RoleToggle from '@/components/auth/RoleToggle';

const SignUpUniversity = () => {
  const [formData, setFormData] = useState({
    universityName: '',
    contactName: '',
    email: '',
    password: '',
    phone: '',
    website: '',
    location: '',
    accreditation: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Account created',
        description:
          'Welcome to Fly8! Your university account has been created.',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <AuthLayout>
      <RoleToggle activeRole="university" />
      <Card className="w-full max-w-md">
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2"
          >
            <School className="w-12 h-12 mx-auto text-primary" />
            <h1 className="text-2xl font-bold">Register Your Institution</h1>
            <p className="text-muted-foreground">
              Partner with Fly8 to expand your global reach
            </p>
          </motion.div>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="universityName">Institution Name</Label>
              <div className="relative">
                <Input
                  id="universityName"
                  placeholder="University name"
                  value={formData.universityName}
                  onChange={e =>
                    setFormData({ ...formData, universityName: e.target.value })
                  }
                  className="pl-10"
                  required
                />
                <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactName">Contact Person Name</Label>
              <div className="relative">
                <Input
                  id="contactName"
                  placeholder="Full name"
                  value={formData.contactName}
                  onChange={e =>
                    setFormData({ ...formData, contactName: e.target.value })
                  }
                  className="pl-10"
                  required
                />
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Institutional Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="contact@university.edu"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="pl-10"
                  required
                />
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={e =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="pl-10"
                  required
                />
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1234567890"
                  value={formData.phone}
                  onChange={e =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="pl-10"
                  required
                />
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://"
                  value={formData.website}
                  onChange={e =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={e =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accreditation">Accreditation Details</Label>
              <Input
                id="accreditation"
                placeholder="Enter your institution's accreditation"
                value={formData.accreditation}
                onChange={e =>
                  setFormData({ ...formData, accreditation: e.target.value })
                }
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating account...' : 'Register Institution'}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already registered?{' '}
              <Link
                to="/signin/university"
                className="text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </AuthLayout>
  );
};

export default SignUpUniversity;
