import { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import { fetchContributions } from "../services/api.js";

export default function GithubCalendar() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchContributions("AngelMontesR").then((calendar) => {
      const contributions = calendar.weeks
        .flatMap((week) => week.contributionDays)
        .map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level:
            day.contributionCount === 0 ? 0 :
            day.contributionCount < 5 ? 1 :
            day.contributionCount < 10 ? 2 :
            day.contributionCount < 20 ? 3 : 4,
        }));

      setData(contributions);
      setTotal(calendar.totalContributions);
    });
  }, []);

  return (
    <section style={{
      backgroundColor: "#0d1117",
      color: "white",
      padding: "24px",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    }}>
      <h2 style={{ textAlign: "center", fontSize: "20px", marginBottom: "16px" }}>
        Actividad de GitHub ({total} contribuciones en los últimos 12 meses)
      </h2>

      <ActivityCalendar
        data={data}
        colorScheme="dark"
        theme={{
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
      />
    </section>
  );
}
