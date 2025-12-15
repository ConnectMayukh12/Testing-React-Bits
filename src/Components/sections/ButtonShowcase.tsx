import { Button } from "@/Components/ui/button";

export const ButtonShowcase = () => {
  return (
    <section className="flex flex-wrap justify-center gap-4 py-8">
      <Button>Default</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </section>
  );
};
