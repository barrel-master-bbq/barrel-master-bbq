import Image from "next/image";
import logo from "@/public/logo.png";

export default function MapLoading() {
  return (
    <div
      className="flex items-center justify-center w-full"
      style={{ height: "400px" }}
    >
      <Image
        src={logo}
        alt="Loading map..."
        width={200}
        height={200}
        placeholder="blur"
        priority
        className="animate-pulse opacity-80"
      />
    </div>
  );
}
