(() => {
  const dashboard = document.querySelector("[data-coding-dashboard]");
  if (!dashboard) return;

  const status = dashboard.querySelector("[data-dashboard-status]");
  const refreshButton = dashboard.querySelector("[data-dashboard-refresh]");
  const numberFormat = new Intl.NumberFormat();
  let loading = false;

  const setStat = (name, value) => {
    const element = dashboard.querySelector(`[data-stat="${name}"]`);
    if (element) element.textContent = value == null ? "—" : String(value);
  };

  const fetchJson = async (url, options = {}) => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(url, { ...options, signal: controller.signal });
      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      return await response.json();
    } finally {
      window.clearTimeout(timeout);
    }
  };

  const fetchText = async (url) => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      return await response.text();
    } finally {
      window.clearTimeout(timeout);
    }
  };

  const fetchDeepMlJson = async (url) => {
    const text = await fetchText(`https://r.jina.ai/http://${url}`);
    const jsonStart = text.indexOf("{");
    if (jsonStart < 0) throw new Error("Deep-ML returned an invalid response");
    return JSON.parse(text.slice(jsonStart));
  };

  const formatCount = (value) => numberFormat.format(Math.max(0, Number(value) || 0));

  const getActivity = (calendarValue) => {
    let calendar = calendarValue;
    if (typeof calendar === "string") {
      try {
        calendar = JSON.parse(calendar);
      } catch {
        return null;
      }
    }
    if (!calendar || typeof calendar !== "object") return null;

    const activeDates = Object.entries(calendar)
      .filter(([, count]) => Number(count) > 0)
      .map(([timestamp]) => new Date(Number(timestamp) * 1000).toISOString().slice(0, 10))
      .sort();
    if (!activeDates.length) return { activeDays: 0, currentStreak: 0, longestStreak: 0 };

    const dateSet = new Set(activeDates);
    const today = new Date();
    const todayUtc = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
    const todayKey = todayUtc.toISOString().slice(0, 10);
    const yesterday = new Date(todayUtc);
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);
    let current = dateSet.has(todayKey) ? todayUtc : yesterday;
    let currentStreak = 0;
    while (dateSet.has(current.toISOString().slice(0, 10))) {
      currentStreak += 1;
      current.setUTCDate(current.getUTCDate() - 1);
    }

    let longestStreak = 0;
    let streak = 0;
    let previous = null;
    activeDates.forEach((date) => {
      const dateValue = new Date(`${date}T00:00:00Z`);
      if (previous && dateValue - previous === 86400000) {
        streak += 1;
      } else {
        streak = 1;
      }
      longestStreak = Math.max(longestStreak, streak);
      previous = dateValue;
    });

    return { activeDays: activeDates.length, currentStreak, longestStreak };
  };

  const loadLeetCodeStats = async () => {
    const data = await fetchJson("https://leetcode-api-faisalshohag.vercel.app/harrycapy");
    if (!Number.isFinite(Number(data.totalSolved))) throw new Error("Stats are unavailable");

    const easy = Number(data.easySolved) || 0;
    const medium = Number(data.mediumSolved) || 0;
    const hard = Number(data.hardSolved) || 0;
    const solved = Number(data.totalSolved);
    setStat("leetcode-solved", formatCount(solved));
    setStat("leetcode-easy", formatCount(easy));
    setStat("leetcode-medium", formatCount(medium));
    setStat("leetcode-hard", formatCount(hard));
    setStat("leetcode-rank", `#${formatCount(data.ranking)}`);

    const activity = getActivity(data.submissionCalendar);
    if (activity) {
      setStat("leetcode-active-days", formatCount(activity.activeDays));
      setStat("leetcode-streak", formatCount(activity.currentStreak));
      setStat("leetcode-best-streak", `Best (12 mo): ${formatCount(activity.longestStreak)} days`);
    } else {
      setStat("leetcode-active-days", "Unavailable");
      setStat("leetcode-streak", "Unavailable");
      setStat("leetcode-best-streak", "Best (12 mo): unavailable");
    }
  };

  const loadLeetCodeContest = async () => {
    const data = await fetchJson("https://alfa-leetcode-api.onrender.com/harrycapy/contest");
    if (!Number.isFinite(Number(data.contestRating))) throw new Error("Contest stats are unavailable");
    setStat("leetcode-rating", Math.round(Number(data.contestRating)));
    setStat("leetcode-rank", `#${formatCount(data.contestGlobalRanking)}`);
    setStat("leetcode-contests", `${formatCount(data.contestAttend)} contests · ${data.contestBadges?.name || "rated"}`);
  };

  const loadCodeforces = async () => {
    const [userData, contestData] = await Promise.all([
      fetchJson("https://codeforces.com/api/user.info?handles=Tanjiro563"),
      fetchJson("https://codeforces.com/api/user.rating?handle=Tanjiro563"),
    ]);
    if (userData.status !== "OK" || !userData.result?.[0]) throw new Error("Profile stats are unavailable");
    const user = userData.result[0];
    const rating = Number(user.rating);
    const maxRating = Number(user.maxRating);
    const rank = user.rank || user.title || "Unrated";
    setStat("codeforces-rating", Number.isFinite(rating) ? formatCount(rating) : "Unrated");
    setStat("codeforces-rank", `${rank} · max ${Number.isFinite(maxRating) ? formatCount(maxRating) : "—"}`);
    const contests = contestData.status === "OK" && Array.isArray(contestData.result) ? contestData.result.length : 0;
    setStat("codeforces-contests", `${formatCount(contests)} contests`);
  };

  const loadCodeChef = async () => {
    const profile = await fetchText("https://r.jina.ai/http://www.codechef.com/users/harshit_563");
    const ratingSection = profile.slice(profile.lastIndexOf("CodeChef Rating DSA Rating"));
    const rating = ratingSection.match(/CodeChef Rating DSA Rating\s+([\d,]+)/i);
    const highestRating = ratingSection.match(/Highest Rating\s+([\d,]+)/i);
    const globalRank = ratingSection.match(/\[\*\*([\d,]+)\*\*\]\([^)]+\)\s*Global Rank/i);
    const countryRank = ratingSection.match(/\[\*\*([\d,]+)\*\*\]\([^)]+\)\s*Country Rank/i);
    const stars = ratingSection.match(/(★+)\s*\n\s*\[/);
    const solved = profile.match(/Total Problems Solved:\s*([\d,]+)/i);
    const contests = profile.match(/No\.\s*of Contests Participated:\s*\*\*([\d,]+)\*\*/i);

    if (!rating || !solved || !contests) throw new Error("Profile stats could not be parsed");

    const currentRating = Number(rating[1].replace(/,/g, ""));
    const solvedCount = Number(solved[1].replace(/,/g, ""));
    const contestCount = Number(contests[1].replace(/,/g, ""));
    if (![currentRating, solvedCount, contestCount].every(Number.isFinite)) {
      throw new Error("Profile stats contained invalid numbers");
    }

    setStat("codechef-rating", `${formatCount(currentRating)}${stars ? ` ${stars[1]}` : ""}`);
    const ranks = [];
    if (globalRank) ranks.push(`#${formatCount(globalRank[1].replace(/,/g, ""))} global`);
    if (countryRank) ranks.push(`#${formatCount(countryRank[1].replace(/,/g, ""))} India`);
    if (highestRating) ranks.push(`peak ${formatCount(highestRating[1].replace(/,/g, ""))}`);
    setStat("codechef-rank", ranks.length ? ranks.join(" · ") : "Rank unavailable");
    setStat("codechef-summary", `${formatCount(solvedCount)} solved · ${formatCount(contestCount)} contests`);
  };

  const loadTensorTonic = async () => {
    const profile = await fetchText("https://r.jina.ai/http://www.tensortonic.com/profile/harshit_");
    const problemsSection = profile.match(/### Problems Solved\s+([\d,]+)\s+[\d,]+\s+([\d,]+)\/[\d,]+\s+Easy\s+([\d,]+)\/[\d,]+\s+Medium\s+([\d,]+)\/[\d,]+\s+Hard/i);
    const activitySection = profile.match(/### Submission Activity\s+Contribution history\s+([\d,]+)\s+Submissions\s+([\d,]+)\s+Current Streak\s+([\d,]+)\s+Max Streak/i);
    const badgesSection = profile.match(/### Badges\s+([\d,]+)\/([\d,]+)/i);

    if (!problemsSection || !activitySection || !badgesSection) {
      throw new Error("Profile stats could not be parsed");
    }

    const [solved, easy, medium, hard] = problemsSection.slice(1).map((value) => Number(value.replace(/,/g, "")));
    const [submissions, currentStreak, maxStreak] = activitySection.slice(1).map((value) => Number(value.replace(/,/g, "")));
    const [earnedBadges, totalBadges] = badgesSection.slice(1).map((value) => Number(value.replace(/,/g, "")));
    if (![solved, easy, medium, hard, submissions, currentStreak, maxStreak, earnedBadges, totalBadges].every(Number.isFinite)) {
      throw new Error("Profile stats contained invalid numbers");
    }

    setStat("tensortonic-solved", `${formatCount(solved)} solved`);
    setStat("tensortonic-difficulty", `Easy ${formatCount(easy)} · Medium ${formatCount(medium)} · Hard ${formatCount(hard)}`);
    setStat("tensortonic-activity", `${formatCount(submissions)} submissions · ${formatCount(currentStreak)} day streak · ${formatCount(maxStreak)} best`);
    setStat("tensortonic-badges", `${formatCount(earnedBadges)}/${formatCount(totalBadges)} badges`);
    setStat("tensortonic-platform", `${formatCount(solved)} solved · ${formatCount(currentStreak)} day streak`);
  };

  const loadDeepMl = async () => {
    const profileId = "2xpUsaUzFrO2orjHHGSjGh4v1gv1";
    const [leaderboard, contestData] = await Promise.all([
      fetchDeepMlJson(`api.deep-ml.com/leaderboard/${profileId}`),
      fetchDeepMlJson(`api.deep-ml.com/user/${profileId}/elo-history`),
    ]);
    if (!Number.isFinite(Number(leaderboard.rank)) || !Number.isFinite(Number(leaderboard.flameScore))) {
      throw new Error("Leaderboard stats are unavailable");
    }
    if (contestData.status !== "success" || !Number.isFinite(Number(contestData.data?.current_elo))) {
      throw new Error("Contest stats are unavailable");
    }

    const analyticsResponse = await fetchDeepMlJson(
      `api.deep-ml.com/user/${profileId}/analytics?heat=${encodeURIComponent(leaderboard.flameScore)}`
    );
    const analytics = analyticsResponse.data;
    const counts = analytics?.difficultyCounts;
    const solvedCounts = analytics?.solvedCounts;
    if (
      analyticsResponse.status !== "success"
      || !Number.isFinite(Number(analytics.totalSolved))
      || !counts
      || !solvedCounts
      || !["easy", "medium", "hard"].every((difficulty) => Number.isFinite(Number(counts[difficulty])))
    ) {
      throw new Error("Problem stats are unavailable");
    }

    const solved = Number(analytics.totalSolved);
    const easy = Number(counts.easy);
    const medium = Number(counts.medium);
    const hard = Number(counts.hard);
    const solvedByType = solvedCounts;
    setStat("deepml-solved", `${formatCount(solved)} solved`);
    setStat("deepml-rank", `Rank #${formatCount(leaderboard.rank)} · Level ${formatCount(leaderboard.level)}`);
    setStat("deepml-xp", `${formatCount(leaderboard.flameScore)} XP`);
    setStat(
      "deepml-elo",
      `Elo ${formatCount(contestData.data.current_elo)} · ${formatCount(contestData.data.rated_contests_count)} rated`
    );
    setStat("deepml-difficulty", `Problems: Easy ${formatCount(easy)} · Medium ${formatCount(medium)} · Hard ${formatCount(hard)}`);
    setStat(
      "deepml-types",
      `${formatCount(solvedByType.problems)} problems · ${formatCount(solvedByType.labs)} labs · ${formatCount(solvedByType.math)} math · ${formatCount(solvedByType.projects)} projects`
    );
  };

  const loadGitHubProfile = async () => {
    const data = await fetchJson("https://api.github.com/users/Harshit-563", {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!Number.isFinite(Number(data.public_repos))) throw new Error("Profile stats are unavailable");
    setStat("github-platform", formatCount(data.public_repos));
  };

  const renderGitHubHeatmap = (contributions) => {
    const heatmap = dashboard.querySelector("[data-github-heatmap]");
    const monthLabels = dashboard.querySelector("[data-github-months]");
    if (!heatmap || !Array.isArray(contributions) || !contributions.length) {
      throw new Error("Contribution history is unavailable");
    }

    const contributionTotal = contributions.reduce((total, day) => total + (Number(day.count) || 0), 0);
    const activeDays = contributions.filter((day) => Number(day.count) > 0).length;
    setStat("github-contributions", formatCount(contributionTotal));
    setStat("github-active-days", formatCount(activeDays));

    const firstDate = new Date(`${contributions[0].date}T00:00:00Z`);
    const leadingDays = firstDate.getUTCDay();
    const weekCount = Math.ceil((leadingDays + contributions.length) / 7);
    heatmap.style.setProperty("--cd-week-count", String(weekCount));
    const weeks = Array.from({ length: weekCount }, () => {
      const week = document.createElement("span");
      week.className = "coding-dashboard__week";
      return week;
    });

    for (let index = 0; index < leadingDays; index += 1) {
      const blank = document.createElement("span");
      blank.className = "coding-dashboard__heat-cell coding-dashboard__heat-cell--blank";
      weeks[0].append(blank);
    }

    contributions.forEach((day, index) => {
      const cell = document.createElement("span");
      const level = Math.max(0, Math.min(4, Number(day.level) || (day.count ? Math.min(4, Math.ceil(day.count / 3)) : 0)));
      const date = new Date(`${day.date}T00:00:00Z`);
      cell.className = `coding-dashboard__heat-cell level-${level}`;
      cell.title = `${formatCount(day.count)} contributions on ${date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}`;
      cell.setAttribute("aria-hidden", "true");
      weeks[Math.floor((leadingDays + index) / 7)].append(cell);
    });

    heatmap.replaceChildren(...weeks);
    const monthNames = [];
    contributions.forEach((day) => {
      const date = new Date(`${day.date}T00:00:00Z`);
      if (date.getUTCDate() === 1 || monthNames.length === 0) {
        const label = document.createElement("span");
        label.textContent = date.toLocaleDateString(undefined, { month: "short", timeZone: "UTC" });
        monthNames.push(label);
      }
    });
    if (monthLabels) monthLabels.replaceChildren(...monthNames.slice(-12));
  };

  const loadGitHubContributions = async () => {
    const data = await fetchJson("https://github-contributions-api.jogruber.de/v4/Harshit-563?y=last");
    renderGitHubHeatmap(data.contributions);
  };

  const load = async () => {
    if (loading) return;
    loading = true;
    refreshButton.disabled = true;
    refreshButton.textContent = "Refreshing…";
    status.textContent = "Loading public profile data…";

    const sources = [
      ["LeetCode problem stats", loadLeetCodeStats],
      ["LeetCode contest stats", loadLeetCodeContest],
      ["Codeforces", loadCodeforces],
      ["CodeChef", loadCodeChef],
      ["TensorTonic", loadTensorTonic],
      ["Deep-ML", loadDeepMl],
      ["GitHub profile", loadGitHubProfile],
      ["GitHub contributions", loadGitHubContributions],
    ];
    const results = await Promise.allSettled(sources.map(([, loadSource]) => loadSource()));
    const unavailable = results
      .map((result, index) => (result.status === "rejected" ? sources[index][0] : null))
      .filter(Boolean);
    const requiredSolveSources = ["LeetCode problem stats", "CodeChef", "TensorTonic", "Deep-ML"];
    if (requiredSolveSources.some((source) => unavailable.includes(source))) {
      setStat("all-platform-solves", "Unavailable");
    } else {
      const solvedTotals = ["leetcode-solved", "codechef-summary", "tensortonic-solved", "deepml-solved"]
        .map((name) => {
          const value = dashboard.querySelector(`[data-stat="${name}"]`)?.textContent || "";
          const total = value.match(/[\d,]+/);
          return total ? Number(total[0].replace(/,/g, "")) : Number.NaN;
        });
      setStat(
        "all-platform-solves",
        solvedTotals.every(Number.isFinite) ? formatCount(solvedTotals.reduce((total, count) => total + count, 0)) : "Unavailable"
      );
    }

    if (unavailable.includes("Deep-ML")) {
      setStat("deepml-solved", "Unavailable");
      setStat("deepml-rank", "Rank unavailable");
      setStat("deepml-xp", "XP unavailable");
      setStat("deepml-elo", "Contest stats unavailable");
      setStat("deepml-difficulty", "Problem stats unavailable");
      setStat("deepml-types", "Stats unavailable");
    }

    status.textContent = unavailable.length
      ? `Some live data could not be loaded: ${unavailable.join(", ")}. Profile links remain available.`
      : `Live stats updated ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.`;
    refreshButton.disabled = false;
    refreshButton.textContent = "Refresh stats";
    loading = false;
  };

  refreshButton.addEventListener("click", load);
  load();
})();
