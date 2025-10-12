export async function fetchContributions(username) {
  const to = new Date();
  const from = new Date();
  from.setFullYear(to.getFullYear() - 1);

  const token = import.meta.env.PUBLIC_GITHUB_TOKEN;
  console.log("Token:", import.meta.env.PUBLIC_GITHUB_TOKEN ? "✅ Detectado" : "❌ No detectado");

  if (!token) {
    throw new Error("Falta el token de GitHub. Agrega PUBLIC_GITHUB_TOKEN en tu archivo .env");
  }

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection(from: "${from.toISOString()}", to: "${to.toISOString()}") {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();



  if (!response.ok || json.errors) {
    throw new Error(
      `GitHub API error: ${json.errors?.[0]?.message || response.status}`
    );
  }

  return json.data.user.contributionsCollection.contributionCalendar;
}
