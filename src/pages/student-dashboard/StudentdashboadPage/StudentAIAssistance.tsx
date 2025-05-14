import { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const StudentAIAssistance = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitted:', message);
    setMessage('');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">AI Assistance</h1>

      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Ask anything about your education journey
          </CardTitle>
          <CardDescription>
            Our AI assistant can help you with university selection, application
            process, visa requirements, and more.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] overflow-auto border rounded-md p-4 mb-4 bg-muted/30">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-primary/20 text-primary p-2 rounded-full">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">
                    Hello! I'm your AI assistant. How can I help you with your
                    education journey today?
                  </p>
                </div>
              </div>
              {/* More messages would appear here */}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Textarea
              placeholder="Type your message here..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="min-h-[60px]"
            />
            <Button type="submit" size="icon" className="shrink-0">
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Your conversations are saved to help improve our AI assistant.
        </CardFooter>
      </Card>
    </div>
  );
};

export default StudentAIAssistance;
