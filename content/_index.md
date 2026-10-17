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
<<<<<<< HEAD
        I’m an AI/ML Engineer with a software engineering foundation and hands-on experience building machine learning systems, NLP tools, LLM-powered applications, and backend services.

        My work focuses on practical AI engineering: building retrieval systems, agentic workflows, and production-ready ML solutions that connect research with real-world impact. I enjoy working across the stack — from data preparation and model design to API integration and deployment.

        I’m especially interested in Generative AI, RAG, agentic AI, and scalable AI products that solve meaningful problems.

        I’m currently looking for opportunities to build and ship AI systems that create measurable value.
=======
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
>>>>>>> f4950150b3e4a2e43b488411af4a4c5f0b0562ba
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
<<<<<<< HEAD
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
=======
    content:
      title: '⚡ Skills & Expertise'
      subtitle: ''
      text: |-
        **Programming & Tools:** Python • C++ • SQL • Git • Docker

        **AI & Frameworks:** TensorFlow • PyTorch • Scikit-learn • FastAPI • Streamlit

        **Interests:** Artificial Intelligence • Machine Learning • DSA • Large Language Models • AI Agents
>>>>>>> f4950150b3e4a2e43b488411af4a4c5f0b0562ba
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
<<<<<<< HEAD
=======

>>>>>>> f4950150b3e4a2e43b488411af4a4c5f0b0562ba
