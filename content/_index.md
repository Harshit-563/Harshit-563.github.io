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
        I’m an AI/ML Engineer with a strong foundation in data structures and algorithms and hands-on experience building scalable, data-driven systems.

        I enjoy working at the intersection of problem-solving and machine learning — where structured thinking meets real-world impact. I’ve built end-to-end ML systems for document intelligence, anomaly detection, forecasting, and NLP-based applications, focusing on measurable performance and practical usability.

        My technical foundation includes:
        • Python, SQL, and backend integration
        • Machine Learning & Deep Learning fundamentals
        • Data preprocessing, feature engineering, and model evaluation
        • 500+ Data Structures & Algorithms problems solved (Top 13% on LeetCode)

        I’m particularly interested in building reliable, scalable AI systems that move beyond experimentation and create real-world value.

        Currently open to full-time opportunities in AI/ML, Data, or Backend-focused roles.

        Let’s connect.
    design:
      columns: '1'

  # ================= COMPETITIVE PROGRAMMING =================
  - block: markdown
    content:
      title: '🏆 Competitive Programming'
      subtitle: ''
      text: |-
        - **[Leetcode](https://leetcode.com/u/harsitmaurya555/)**: Top 13%  Rating: 1700
        - **[Codechef](https://www.codechef.com/users/tanjiro563)**: 2 ⭐
        - **[Codolio](https://codolio.com/profile/Harshit563)**: Profile
    design:
      columns: '1'

  # ================= SKILLS (BENTO BOXES) =================
  - block: markdown
    content:
      title: '⚡ Skills & Expertise'
      subtitle: ''
      text: |-
        **Programming & Tools:** Python • C++ • SQL • Git • Docker

        **AI & Frameworks:** TensorFlow • PyTorch • Scikit-learn • FastAPI • Streamlit

        **Interests:** Artificial Intelligence • Machine Learning • DSA • Large Language Models • AI Agents
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

