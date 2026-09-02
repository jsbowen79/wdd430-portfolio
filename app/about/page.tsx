import ContactCard from "@/components/ContactCard";

export default function About() {
  return (
    <main className="max-w-4x1 mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <ContactCard
        fullName="Joseph Bowen"
        city="Commerce City"
        state="Colorado"
        country="USA"
        email="jsbowen79@outlook.com"
        phone="720-401-4721"
      />
      <p className="text-1g text-gray-700">
        I am 47 years old. I spent over 16 years in Law Enforcement, but I am
        transitioning careers after a work related injury. I am attending BYU
        Pathways at BYU Idaho to obtain my Bachelor&rsquo;s degree in Computer
        programming. I have 4 children. I enjoy programming, gaming, and outdoor
        recreation such as 4x4 driving.
      </p>
    </main>
  );
}
