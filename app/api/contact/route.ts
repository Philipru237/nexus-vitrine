import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const json = (status: number, body: Record<string, unknown>) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: NextRequest) {
  const endpoint = process.env.NEXUS_PIPELINE_INQUIRY_API_URL;
  const origin = process.env.NEXUS_PIPELINE_INQUIRY_ORIGIN;
  if (!endpoint || !origin) {
    return json(503, { error: "Le formulaire est temporairement indisponible." });
  }

  const length = Number(request.headers.get("content-length") || "0");
  if (length > 16_384) return json(413, { error: "Demande trop volumineuse." });

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json(400, { error: "Format de demande invalide." });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: origin },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(9000),
    });
    const result = await response.json().catch(() => ({}));
    return json(response.status, result);
  } catch {
    return json(503, { error: "Impossible de transmettre la demande. Réessayez plus tard." });
  }
}
