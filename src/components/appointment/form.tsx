import { useState } from "react";
import { createAppointment } from "~/server/appointment";
import {
  Button,
  DateTimePicker,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  VFlex,
  Input,
  HFlex,
} from "@ui";

export function AppointmentForm({
  formShow,
  setFormShow,
}: {
  formShow: boolean;
  setFormShow: (show: boolean) => void;
}) {
  const [patientId, setPatientId] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  async function create() {
    const appointment = await createAppointment({
      patientId: +patientId,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    });
    console.log(appointment);
    setFormShow(false);
  }

  return (
    <Dialog open={formShow} onOpenChange={setFormShow}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Appointment</DialogTitle>
        </DialogHeader>
        <VFlex className="gap-4">
          <Input
            placeholder="Patient ID"
            onChange={(e) => setPatientId((e.target as HTMLInputElement).value)}
          />
          <HFlex className="gap-4">
            <DateTimePicker
              label="Start Time"
              date={startTime}
              setDate={setStartTime}
            />
            <DateTimePicker
              label="End Time"
              date={endTime}
              setDate={setEndTime}
            />
          </HFlex>
        </VFlex>
        <DialogFooter>
          <Button onClick={create}>New Appointment</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
