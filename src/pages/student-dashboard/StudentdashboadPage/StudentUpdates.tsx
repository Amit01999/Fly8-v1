import { Bell } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const StudentUpdates = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Updates & Notifications</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Recent Updates
          </CardTitle>
          <CardDescription>
            Stay informed about your applications, tasks, and important
            deadlines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-3 w-full mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <UpdateItem
                title="University of Toronto Application"
                description="Your application has been submitted successfully"
                date="May 15, 2025"
                time="2h ago"
                type="success"
              />
              <UpdateItem
                title="Document Verification Pending"
                description="Please upload your transcripts to complete verification"
                date="May 14, 2025"
                time="1d ago"
                type="warning"
              />
              <UpdateItem
                title="Education Loan Approved"
                description="Your loan application has been approved"
                date="May 12, 2025"
                time="3d ago"
                type="success"
              />
              <UpdateItem
                title="Accommodation Options"
                description="New student housing options are available near your university"
                date="May 10, 2025"
                time="5d ago"
                type="info"
              />
            </TabsContent>

            <TabsContent value="applications" className="space-y-4">
              <UpdateItem
                title="University of Toronto Application"
                description="Your application has been submitted successfully"
                date="May 15, 2025"
                time="2h ago"
                type="success"
              />
              <UpdateItem
                title="Oxford University"
                description="Your application is under review by the admissions committee"
                date="May 8, 2025"
                time="1w ago"
                type="info"
              />
            </TabsContent>

            <TabsContent value="tasks" className="space-y-4">
              <UpdateItem
                title="Document Verification Pending"
                description="Please upload your transcripts to complete verification"
                date="May 14, 2025"
                time="1d ago"
                type="warning"
              />
              <UpdateItem
                title="IELTS Test Booking"
                description="Remember to book your IELTS test for next month"
                date="May 9, 2025"
                time="6d ago"
                type="warning"
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

interface UpdateItemProps {
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'success' | 'warning' | 'info' | 'error';
}

const typeIcons = {
  success: (
    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
      ✓
    </div>
  ),
  warning: (
    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
      !
    </div>
  ),
  info: (
    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
      i
    </div>
  ),
  error: (
    <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
      ⨯
    </div>
  ),
};

const UpdateItem = ({
  title,
  description,
  date,
  time,
  type,
}: UpdateItemProps) => {
  return (
    <div className="flex gap-4 p-4 border rounded-lg">
      {typeIcons[type]}
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-muted-foreground">{date}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentUpdates;
