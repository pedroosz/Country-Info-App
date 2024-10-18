import { TCountryFlag } from "@/@types";
import Image from "next/image";

interface CountryFlagProps {
  flag: TCountryFlag;
  width?: number;
  height?: number;
}

export default function CountryFlag(props: CountryFlagProps) {
  return (
    <Image
      src={props.flag.flag}
      width={props.width ?? 32}
      height={props.height ?? 24}
      alt={`Flag of ${props.flag.name}`}
      className="aspect-square rounded-full object-cover w-[32px] h-[32px]"
    />
  );
}
