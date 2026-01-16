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
        I am an Information Technology undergraduate with a strong interest in
        Artificial Intelligence and Machine Learning.

        I have worked on AI-driven projects such as **EduTrackAI**, an intelligent
        compliance monitoring system that applies OCR and machine learning to
        automate document analysis and anomaly detection.

        I enjoy building practical AI systems that solve real-world problems and
        continuously learning modern tools and techniques in applied AI.
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

        **Interests:** Artificial Intelligence • Machine Learning • Large Language Models • AI Agents
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
      filters:
        folders:
          - projects
    design:
      view: card
      columns: 2


---
