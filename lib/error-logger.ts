import { createClient } from "@/lib/supabase/server";

export async function logApiError(
  route: string,
  method: string,
  statusCode: number,
  errorMessage: string,
  stack?: string
) {
  try {
    const supabase = await createClient();
    await supabase.from("errors").insert({
      route,
      method,
      status_code: statusCode,
      error_message: errorMessage,
      stack: stack ?? null,
    });
  } catch {
    // Don't let error logging cause more errors
    console.error("[error-logger] Failed to log error:", errorMessage);
  }
}
