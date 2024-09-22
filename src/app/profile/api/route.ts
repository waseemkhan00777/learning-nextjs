export async function GET() {
  return new Response("<h1>Profile API route</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
