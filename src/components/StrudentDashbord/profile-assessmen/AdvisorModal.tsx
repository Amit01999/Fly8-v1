import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import AdvisorSection from './AdvisorSection';

interface AdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'chat' | 'appointment';
}

export default function AdvisorModal({
  isOpen,
  onClose,
  defaultTab = 'chat',
}: AdvisorModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Connect with Our Advisors
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Get expert guidance for your study abroad journey
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <AdvisorSection />
        </div>
      </DialogContent>
    </Dialog>
  );
}
