export async function fetchContributions(username) {
  const to = new Date();
  const from = new Date();
  from.setFullYear(to.getFullYear() - 1);

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
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const json = await response.json();
  return json.data.user.contributionsCollection.contributionCalendar;
}
