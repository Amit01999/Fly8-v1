import { Calendar } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const StudentBookAppointment = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Book Appointment</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Schedule a Consultation
            </CardTitle>
            <CardDescription>
              Book a one-on-one session with our education counselors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" className="h-12">
                9:00 AM
              </Button>
              <Button variant="outline" className="h-12">
                10:00 AM
              </Button>
              <Button variant="outline" className="h-12">
                11:00 AM
              </Button>
              <Button variant="outline" className="h-12">
                1:00 PM
              </Button>
              <Button variant="outline" className="h-12">
                2:00 PM
              </Button>
              <Button variant="outline" className="h-12">
                3:00 PM
              </Button>
            </div>
            <Button className="w-full">Book Now</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Available Counselors</CardTitle>
            <CardDescription>
              Select a counselor specializing in your area of interest
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">
                    USA & Canada Specialist
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Select
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Michael Lee</p>
                  <p className="text-sm text-muted-foreground">
                    UK & Europe Specialist
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Select
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">
                    Australia & NZ Specialist
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Select
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentBookAppointment;
