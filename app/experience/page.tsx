import { redirect } from "next/navigation";
import { siteConfig } from "@/content/site";

export default function Page() {
  redirect(siteConfig.links.resume);
}
