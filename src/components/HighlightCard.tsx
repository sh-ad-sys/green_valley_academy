import Link from "next/link";

interface HighlightCardProps {
  title: string;
  icon?: React.ReactNode;
  href?: string; // optional link
}

export default function HighlightCard({ title, icon, href }: HighlightCardProps) {
  const cardContent = (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center flex flex-col items-center cursor-pointer">
      <div className="iconWrapper mb-4">{icon}</div>
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
    </div>
  );

  // Wrap with Link if href is provided
  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
}
