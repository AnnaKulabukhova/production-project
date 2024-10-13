import { buildSelector } from "@/shared/lib/store";
import type { JsonSettings } from "../../types/jsonSettings";

const defaultJson: JsonSettings = {}

export const [useJsonSettings, getJsonSettings] = buildSelector((state) => state.user.authData?.jsonSettings ?? defaultJson)