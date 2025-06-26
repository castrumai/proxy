export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const makeWebhookUrl = "https://hook.us1.make.com/abc123"; // Make webhook'un
  const apiKey = "d934fa3e-8b2e-47f6-a92d-1a7e56c0f171"; // API Key

  try {
    const response = await fetch(makeWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-make-apikey": apiKey
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.text();
    res.status(200).send("OK");
  } catch (err) {
    res.status(500).send("FAILED");
  }
}
