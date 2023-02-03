import { EndPoints } from "@/types/cms-types";
import { MicroCMS } from "microcms-lib";

export const endPoints = new MicroCMS<EndPoints>({
  service: process.env.MICRO_CMS_SERVICE_NAME,
  apiKey: process.env.MICRO_CMS_API_KEY
})