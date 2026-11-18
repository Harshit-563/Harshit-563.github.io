---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2022-10-24
type: landing

design:
  spacing: '6rem'

sections:
  # ================= BIO SECTION =================
  - block: resume-biography-3
    content:
      username: me
      text: ''
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle
      columns: '2'

  # ================= ABOUT / PROJECT FOCUS =================
  - block: markdown
    content:
      title: '👋 About Me'
      subtitle: ''
      text: |-
        I’m an AI/ML Engineer with a software engineering foundation and hands-on experience building machine learning systems, NLP tools, LLM-powered applications, and backend services.

        My work focuses on practical AI engineering: building retrieval systems, agentic workflows, and production-ready ML solutions that connect research with real-world impact. I enjoy working across the stack — from data preparation and model design to API integration and deployment.

        I’m especially interested in Generative AI, RAG, agentic AI, and scalable AI products that solve meaningful problems.

        I’m currently looking for opportunities to build and ship AI systems that create measurable value.
    design:
      columns: '1'

  # ================= CODING & TECH ACTIVITY =================
  - block: markdown
    id: coding-activity
    content:
      title: 'Coding & Tech Activity Dashboard'
      subtitle: ''
      text: |-
        <div class="coding-dashboard" data-coding-dashboard>
          <div class="coding-dashboard__toolbar">
            <p class="coding-dashboard__intro">A live snapshot of my problem-solving practice, contests, and open-source activity.</p>
            <button class="coding-dashboard__refresh" type="button" data-dashboard-refresh>Refresh stats</button>
          </div>
          <p class="coding-dashboard__status" data-dashboard-status role="status" aria-live="polite">Loading public profile data…</p>
          <article class="coding-dashboard__card coding-dashboard__summary-total">
            <span>Total solves across platforms</span>
            <strong data-stat="all-platform-solves">—</strong>
            <small>LeetCode · CodeChef · TensorTonic · Deep-ML</small>
          </article>
          <section class="coding-dashboard__card coding-dashboard__panel coding-dashboard__summary" aria-labelledby="competitive-summary-title">
            <div class="coding-dashboard__panel-heading">
              <div>
                <h3 id="competitive-summary-title">Competitive programming</h3>
                <p>Contest ratings, rankings, and problem-solving stats</p>
              </div>
            </div>
            <div class="coding-dashboard__platform-summary">
              <a class="coding-dashboard__platform-card" href="https://leetcode.com/u/harrycapy/" target="_blank" rel="noopener noreferrer">
                <span class="coding-dashboard__platform-name"><span class="coding-dashboard__platform-logo coding-dashboard__platform-logo--leetcode"><img src="https://cdn.simpleicons.org/leetcode/FFA116" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span aria-hidden="true" hidden>LC</span></span>LeetCode</span>
                <strong class="coding-dashboard__platform-highlight"><span data-stat="leetcode-solved">—</span> solved</strong>
                <span class="coding-dashboard__platform-stats">Rating <b data-stat="leetcode-rating">—</b> · Global rank <b data-stat="leetcode-rank">—</b> · <b data-stat="leetcode-contests">— contests</b></span>
                <span class="coding-dashboard__platform-stats">Easy <b data-stat="leetcode-easy">—</b> · Medium <b data-stat="leetcode-medium">—</b> · Hard <b data-stat="leetcode-hard">—</b></span>
                <span class="coding-dashboard__platform-stats"><b data-stat="leetcode-active-days">—</b> active days (last 12 months) · <b data-stat="leetcode-streak">—</b> day streak · <b data-stat="leetcode-best-streak">Best (12 mo): — days</b></span>
              </a>
              <a class="coding-dashboard__platform-card" href="https://www.codechef.com/users/harshit_563" target="_blank" rel="noopener noreferrer">
                <span class="coding-dashboard__platform-name"><span class="coding-dashboard__platform-logo coding-dashboard__platform-logo--codechef"><img src="https://cdn.simpleicons.org/codechef/5B4638" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span aria-hidden="true" hidden>CC</span></span>CodeChef</span>
                <strong class="coding-dashboard__platform-highlight"><span data-stat="codechef-rating">—</span> rating</strong>
                <span class="coding-dashboard__platform-stats"><b data-stat="codechef-rank">Rank and peak —</b></span>
                <span class="coding-dashboard__platform-stats"><b data-stat="codechef-summary">— solved · — contests</b></span>
              </a>
              <a class="coding-dashboard__platform-card" href="https://codeforces.com/profile/Tanjiro563" target="_blank" rel="noopener noreferrer">
                <span class="coding-dashboard__platform-name"><span class="coding-dashboard__platform-logo coding-dashboard__platform-logo--codeforces"><img src="https://cdn.simpleicons.org/codeforces/1F8ACB" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span aria-hidden="true" hidden>CF</span></span>Codeforces</span>
                <strong class="coding-dashboard__platform-highlight">Rating <span data-stat="codeforces-rating">—</span></strong>
                <span class="coding-dashboard__platform-stats"><b data-stat="codeforces-rank">Rank —</b> · <b data-stat="codeforces-contests">— contests</b></span>
              </a>
            </div>
          </section>
          <section class="coding-dashboard__card coding-dashboard__panel coding-dashboard__summary" aria-labelledby="ml-platform-summary-title">
            <div class="coding-dashboard__panel-heading">
              <div>
                <h3 id="ml-platform-summary-title">Machine learning platforms</h3>
                <p>Hands-on ML challenges, learning progress, and projects</p>
              </div>
            </div>
            <div class="coding-dashboard__platform-summary">
              <a class="coding-dashboard__platform-card" href="https://www.tensortonic.com/profile/harshit_" target="_blank" rel="noopener noreferrer">
                <span class="coding-dashboard__platform-name"><span class="coding-dashboard__platform-logo coding-dashboard__platform-logo--tensortonic"><img src="https://www.tensortonic.com/images/logos/ttsvg.svg" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span aria-hidden="true" hidden>TT</span></span>TensorTonic</span>
                <strong class="coding-dashboard__platform-highlight"><span data-stat="tensortonic-solved">— solved</span></strong>
                <span class="coding-dashboard__platform-stats"><b data-stat="tensortonic-difficulty">Easy — · Medium — · Hard —</b></span>
                <span class="coding-dashboard__platform-stats"><b data-stat="tensortonic-activity">— submissions · — day streak · — best</b> · <b data-stat="tensortonic-badges">— badges</b></span>
              </a>
              <a class="coding-dashboard__platform-card" href="https://www.deep-ml.com/profile/2xpUsaUzFrO2orjHHGSjGh4v1gv1" target="_blank" rel="noopener noreferrer">
                <span class="coding-dashboard__platform-name"><span class="coding-dashboard__platform-logo coding-dashboard__platform-logo--deepml"><img src="https://www.deep-ml.com/dml-logo.png" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span aria-hidden="true" hidden>ML</span></span>Deep-ML</span>
                <strong class="coding-dashboard__platform-highlight"><span data-stat="deepml-solved">— solved</span></strong>
                <span class="coding-dashboard__platform-stats"><b data-stat="deepml-rank">Rank — · Level —</b> · <b data-stat="deepml-xp">— XP</b> · <b data-stat="deepml-elo">Contest Elo —</b></span>
                <span class="coding-dashboard__platform-stats"><b data-stat="deepml-difficulty">Problems: Easy — · Medium — · Hard —</b></span>
                <span class="coding-dashboard__platform-stats"><b data-stat="deepml-types">— problems · — labs · — math · — projects</b></span>
              </a>
            </div>
          </section>
          <section class="coding-dashboard__card coding-dashboard__panel coding-dashboard__github" aria-labelledby="github-activity-title">
            <div class="coding-dashboard__panel-heading">
              <div>
                <h3 id="github-activity-title"><span class="coding-dashboard__platform-logo coding-dashboard__platform-logo--github"><img src="https://cdn.simpleicons.org/github/FFFFFF" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span aria-hidden="true" hidden>GH</span></span>GitHub activity</h3>
                <p>Open-source contributions over the last year</p>
              </div>
              <a class="coding-dashboard__github-link" href="https://github.com/Harshit-563" target="_blank" rel="noopener noreferrer">View profile <span aria-hidden="true">↗</span></a>
            </div>
            <div class="coding-dashboard__github-stats">
              <div class="coding-dashboard__github-stat"><strong data-stat="github-platform">—</strong><span>Public repositories</span></div>
              <div class="coding-dashboard__github-stat coding-dashboard__github-stat--featured"><strong data-stat="github-contributions">—</strong><span>Contributions</span></div>
              <div class="coding-dashboard__github-stat"><strong data-stat="github-active-days">—</strong><span>Active days</span></div>
            </div>
            <div class="coding-dashboard__github-activity">
              <div class="coding-dashboard__github-activity-heading">
                <strong>Contribution activity</strong>
                <span>Each square represents one day</span>
                <span class="coding-dashboard__heatmap-hint">Swipe horizontally to see the full year</span>
              </div>
              <div class="coding-dashboard__heatmap-scroll">
                <div class="coding-dashboard__month-labels" data-github-months aria-hidden="true"></div>
                <div class="coding-dashboard__heatmap" data-github-heatmap role="img" aria-label="GitHub contribution activity for the last 12 months"></div>
              </div>
              <div class="coding-dashboard__heatmap-legend" aria-hidden="true"><span>Less</span><i class="level-0"></i><i class="level-1"></i><i class="level-2"></i><i class="level-3"></i><i class="level-4"></i><span>More</span></div>
            </div>
          </section>
          <p class="coding-dashboard__note">Stats update from public profile data when available.</p>
        </div>
    design:
      columns: '1'

  # ================= SKILLS (BENTO BOXES) =================
  - block: markdown
    id: skills
    content:
      title: '⚡ Skills'
      subtitle: ''
      text: |-
        **Languages & Core:** Python • C++ • SQL • Data Structures & Algorithms

        **ML & Libraries:** scikit-learn • PyTorch • Transformers • spaCy • OpenCV • LightGBM • Deep Learning • NLP • Model Evaluation

        **Generative AI:** LLM Applications • LangChain • LangGraph • RAG • Embeddings • Semantic Search • Agentic AI • Hugging Face Transformers

        **Backend:** FastAPI • Flask • REST APIs

        **Databases:** Vector Databases • MongoDB • PostgreSQL • SQLite

        **Tools:** Git • Docker • Postman • Jupyter Notebook • Google Colab • GitHub • AWS
    design:
      columns: '1'

  # ================= CERTIFICATIONS =================
  - block: collection
    id: certifications
    content:
      title: Certifications
      text: ''
      filters:
        folders:
          - certifications
    design:
      view: card
      columns: 1

  # ================= PROJECTS =================
  - block: collection
    id: projects
    content:
      title: Projects
      text: ''
      count: 0
      filters:
        folders:
          - projects
    design:
      view: card
      columns: 2


---
