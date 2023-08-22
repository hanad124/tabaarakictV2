import loadingSpinner from "@/public/assets/loading-spinner.svg";
import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-screen relative z-30 bg-background flex justify-center items-center">
      <Image
        src={loadingSpinner}
        width={300}
        height={300}
        alt="loading spinner"
      />
    </div>
  );
}
