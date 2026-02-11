---
title: Domain Watch
date: 2026-01-25
links:
  - type: Repo
    url: https://github.com/Harshit-563/Domain-Watch
tags:
  - Network Security
  - DNS Monitoring
  - Scapy
  - Threat Detection
  - Cybersecurity
  - SQLite
---

A real-time DNS traffic monitoring system that captures packets, detects anomalies such as DGAs and fast-flux domains, and visualizes threats through an interactive dashboard.

<!--more-->

This project focuses on real-time DNS packet capture and threat analysis to address security gaps in traditional network monitoring tools. The system captures DNS traffic over UDP and TCP port 53 using Scapy, parses DNS headers and payloads, and applies entropy-based and heuristic techniques to detect suspicious behaviors such as Domain Generation Algorithms (DGA) and fast-flux activity. A Tkinter-based interactive dashboard provides live traffic visualization and alerts, while results are stored in SQLite for offline investigation and reporting. Designed for both academic research and practical cybersecurity use cases, the system serves as a lightweight yet effective DNS threat monitoring tool.
