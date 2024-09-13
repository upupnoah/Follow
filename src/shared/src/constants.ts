import type { ElectronAPI } from "@electron-toolkit/preload"
import { env } from "@env"

declare const globalThis: {
  window: Window & {
    electron?: ElectronAPI
    api?: { canWindowBlur: boolean }
  }
}

export const APP_PROTOCOL = import.meta.env.DEV ? "follow-dev" : "follow"
export const DEEPLINK_SCHEME = `${APP_PROTOCOL}://`

// export const WEB_URL = import.meta.env.VITE_VERCEL_URL ?? import.meta.env.VITE_WEB_URL
export const WEB_URL = env.VITE_WEB_URL

export const SYSTEM_CAN_UNDER_BLUR_WINDOW = globalThis?.window?.electron
  ? globalThis?.window.api?.canWindowBlur
  : false
