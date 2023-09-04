import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full text-center">
      <div className="">
        <p className="text-9xl font-bold text-custom_primary">404!</p>
        <p className="text-custom_secondary text-4xl mt-3"> Page not found </p>
        <p className="text-custom_textColor text-sm mt-3">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button className="mt-7 rounded-full" variant={"default"} size={"lg"}>
            BACK TO THE HOME PAGE
          </Button>
        </Link>
      </div>
    </div>
  );
}
