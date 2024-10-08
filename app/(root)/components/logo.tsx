import { Globe } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <Globe className="size-12 rotate-[15deg]" />
      <p className="text-[44px]">TODO-GraphQL</p>
    </div>
  );
}
