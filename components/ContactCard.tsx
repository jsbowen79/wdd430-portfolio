interface ContactCardProps {
  fullName: string;
  city: string;
  state: string;
  country: string;
  email: string;
  phone: string;
}

export default function ContactCard({
  fullName,
  city,
  state,
  country,
  email,
  phone,
}: ContactCardProps) {
  return (
    <article className="p-4 border-2 border-green-500 bg-gray-100 rounded">
      <h1 className="text-xl font-bold m-3">{fullName}</h1>
      <p className="text-gray-700 m-3">
        {city}, {state} {country}
      </p>
      <p className="text-gray-700 m-3">Email: {email}</p>
      <p className="text-gray-700 m-3">Phone: {phone}</p>
    </article>
  );
}
