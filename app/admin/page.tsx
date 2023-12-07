import Calendar from "@/app/ui/admin/Calendar";

export default function Admin() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-4xl text-tertiary my-6">Manage Sunshine</h1>
      <Calendar />
    </div>
  );
}
