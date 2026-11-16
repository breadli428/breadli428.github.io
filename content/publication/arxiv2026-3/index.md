---
title: Enhancing VLM Reward Models Through Structure-Aware Fine-Tuning
authors:
- Pyrros Koussios
- admin
- Xin Chen
- Andreas Krause
date: '2026-08-04T00:00:00Z'
doi: ''
publishDate: '2017-01-01T00:00:00Z'
publication_types:
- article
publication: In *arXiv*
publication_short: In *arXiv*
abstract: Designing effective reward functions remains a major bottleneck in Reinforcement Learning (RL). Recent work uses large foundation Vision-Language Models (VLMs) as reward models, computing text-observation similarity to bypass manual reward engineering. Although promising, these rewards are often noisy and unreliable, limiting their direct utility during deployment. We present Structure-Aware Fine-Tuning (SAFT), a simple, self-supervised method that refines these imperfect reward signals online without access to ground-truth supervision. SAFT leverages intrinsic structural priors to regularize the VLM's latent space via LoRA adapters. We rigorously evaluate SAFT across a spectrum of base model capabilities to demonstrate its versatility. Our results show that SAFT consistently denoises the reward landscape, yielding faster policy convergence and substantially improved alignment (EPIC distance) relative to the underlying base model, suggesting that failures can often be attributed to structural brittleness rather than semantic misunderstanding. By replacing extensive human preference annotation with structural inductive biases inherent to the task, SAFT offers a scalable path for stabilizing text-conditioned RL and underscores the broader value of incorporating task structure as a general inductive bias.
summary: Designing effective reward functions remains a major bottleneck in Reinforcement Learning (RL).
student_work: true
featured: false
url_pdf: https://arxiv.org/abs/2608.03875
---
