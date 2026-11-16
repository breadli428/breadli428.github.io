---
title: 'Bridging the Gap: Enabling Soft Actor Critic for High Performance Legged Locomotion'
authors:
- Gianluca Sabatini
- admin
- Marco Hutter
date: '2026-05-24T00:00:00Z'
doi: ''
publishDate: '2017-01-01T00:00:00Z'
publication_types:
- article
publication: In *arXiv*
publication_short: In *arXiv*
abstract: Proximal Policy Optimization (PPO) has become the de facto standard for training legged robots, thanks to its robustness and scalability in massively parallel simulation environments like IsaacLab. However, its on-policy nature makes it inherently sample-inefficient, preventing its use for continuous adaptation and fine-tuning on real hardware. Soft Actor-Critic (SAC), by contrast, is an off-policy algorithm that can reuse past experience, making it a natural candidate for sim-to-real transfer workflows where the same algorithm can be used both in simulation and for online learning on the real robot. Despite these advantages, SAC has consistently failed to match PPO's empirical performance in massively parallel training settings. This work identifies the root causes of this gap and introduces targeted modifications, covering policy initialization, timeout-aware critic targets, and multi-step return estimation, that enable SAC to train stably at scale. Evaluated across multiple legged robot platforms and diverse locomotion tasks, our approach closes the performance gap with PPO entirely.
summary: Proximal Policy Optimization (PPO) has become the de facto standard for training legged robots, thanks to its robustness and scalability in massively parallel simulation environments like IsaacLab.
student_work: true
featured: false
url_pdf: https://arxiv.org/abs/2605.24975
---
