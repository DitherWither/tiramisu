import { H1, TabsContent } from "@ui";
import { Tabs, TabsList, TabsTrigger } from "@ui";
import { AppointmentView } from "~/components/appointment/view";
import { PatientsView } from "~/components/patient/view";

export default async function HomePage() {
  return (
    <>
      <Tabs defaultValue="appointments" className="pt-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
        </TabsList>
        <TabsContent value="appointments">
          <AppointmentView />
        </TabsContent>
        <TabsContent value="patients">
          <PatientsView />
        </TabsContent>
      </Tabs>
    </>
  );
}
