import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, X, Loader2, CheckCircle } from 'lucide-react';
import {
  useMyAppointments,
  useCreateAppointment,
  useCancelAppointment,
  useAvailableSlots,
  useAppointmentStats,
} from '@/hooks/useStudentAppointments';
import { formatDistanceToNow } from 'date-fns';
import type { AppointmentType } from '@/types';

export default function StudentBookAppointment() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentType, setAppointmentType] = useState<AppointmentType>('consultation');
  const [purpose, setPurpose] = useState('');
  const [notes, setNotes] = useState('');

  const { data: appointmentsData, isLoading } = useMyAppointments();
  const { data: stats } = useAppointmentStats();
  const { data: slotsData } = useAvailableSlots(
    selectedDate?.toISOString().split('T')[0] || ''
  );
  const createMutation = useCreateAppointment();
  const cancelMutation = useCancelAppointment();

  const handleBookAppointment = async () => {
    if (!selectedDate || !selectedTime || !purpose) {
      alert('Please fill all required fields');
      return;
    }

    try {
      await createMutation.mutateAsync({
        date: selectedDate.toISOString().split('T')[0],
        time: selectedTime,
        type: appointmentType,
        purpose,
        notes,
      });

      // Reset form
      setSelectedTime('');
      setPurpose('');
      setNotes('');

      alert('Appointment request submitted successfully!');
    } catch (error: any) {
      alert(error.response?.data?.message || 'Failed to create appointment');
    }
  };

  const handleCancel = async (id: string) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) return;

    try {
      await cancelMutation.mutateAsync({ id });
      alert('Appointment cancelled successfully');
    } catch (error) {
      alert('Failed to cancel appointment');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500 text-white';
      case 'pending':
        return 'bg-yellow-500 text-white';
      case 'rejected':
        return 'bg-red-500 text-white';
      case 'cancelled':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Book Appointment</h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-2xl font-bold">{stats?.total || 0}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-2xl font-bold text-yellow-600">{stats?.pending || 0}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Confirmed</p>
          <p className="text-2xl font-bold text-green-600">{stats?.confirmed || 0}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Upcoming</p>
          <p className="text-2xl font-bold text-blue-600">
            {stats?.upcomingCount || 0}
          </p>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Booking Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request New Appointment</h2>

          <div className="space-y-4">
            {/* Date Picker */}
            <div>
              <Label>Select Date *</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border mt-2"
              />
            </div>

            {/* Time Slots */}
            <div>
              <Label>Available Time Slots *</Label>
              <div className="grid grid-cols-3 gap-2 mt-2 max-h-48 overflow-y-auto">
                {slotsData?.slots
                  ?.filter((slot) => slot.available)
                  .map((slot) => (
                    <Button
                      key={slot.time}
                      variant={selectedTime === slot.time ? 'default' : 'outline'}
                      onClick={() => setSelectedTime(slot.time)}
                      className="text-sm"
                      size="sm"
                    >
                      {slot.time}
                    </Button>
                  ))}
              </div>
              {slotsData?.slots?.filter((s) => s.available).length === 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  No slots available for this date
                </p>
              )}
            </div>

            {/* Appointment Type */}
            <div>
              <Label>Appointment Type *</Label>
              <Select
                value={appointmentType}
                onValueChange={(val) => setAppointmentType(val as AppointmentType)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="follow-up">Follow-up</SelectItem>
                  <SelectItem value="document-review">Document Review</SelectItem>
                  <SelectItem value="visa-guidance">Visa Guidance</SelectItem>
                  <SelectItem value="application-help">Application Help</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Purpose */}
            <div>
              <Label>Purpose *</Label>
              <Textarea
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder="Describe the purpose of your appointment..."
                className="mt-1"
                rows={3}
              />
            </div>

            {/* Notes */}
            <div>
              <Label>Additional Notes</Label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any additional information..."
                className="mt-1"
                rows={2}
              />
            </div>

            <Button
              onClick={handleBookAppointment}
              disabled={createMutation.isPending}
              className="w-full"
            >
              {createMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Submit Request
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* My Appointments */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">My Appointments</h2>

          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {appointmentsData?.appointments?.map((appointment) => (
              <Card key={appointment._id} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
                      <Badge variant="outline">{appointment.type}</Badge>
                    </div>
                    <p className="font-semibold">{appointment.purpose}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                      <span className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {new Date(appointment.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {appointment.time}
                      </span>
                    </div>
                    {appointment.notes && (
                      <p className="text-sm text-gray-600 mt-2 italic">
                        Note: {appointment.notes}
                      </p>
                    )}
                    {appointment.adminNotes && (
                      <p className="text-sm text-gray-600 mt-2 bg-blue-50 p-2 rounded">
                        <strong>Admin Note:</strong> {appointment.adminNotes}
                      </p>
                    )}
                    {appointment.meetingLink && (
                      <a
                        href={appointment.meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline mt-2 block"
                      >
                        Join Meeting →
                      </a>
                    )}
                  </div>
                  {(appointment.status === 'pending' ||
                    appointment.status === 'confirmed') && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleCancel(appointment._id)}
                      disabled={cancelMutation.isPending}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}

            {appointmentsData?.appointments?.length === 0 && (
              <Card className="p-8 text-center text-gray-500">
                <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No appointments found</p>
                <p className="text-sm">Book your first appointment above</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
