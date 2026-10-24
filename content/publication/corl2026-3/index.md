---
title: Morphology-Conditioned World Model for Cross-Embodiment Quadrupedal Locomotion
authors:
- Mohamad H. Danesh
- admin
- Amin Abyaneh
- Anas Houssaini
- Kirsty Ellis
- Glen Berseth
- Marco Hutter
- Hsiu-Chin Lin
date: '2026-04-09T00:00:00Z'
doi: ''
publishDate: '2017-01-01T00:00:00Z'
publication_types:
- paper-conference
publication: In *Conference on Robot Learning*
publication_short: In *CoRL*
abstract: World models promise a paradigm shift in robotics, where an agent learns the physics of its environment once and then acquires behaviors efficiently. Yet the learned dynamics models at their core are typically morphology locked. In legged locomotion, a dynamics model trained on an ANYmal-D quadruped fails on a Unitree Go1 because it overfits to one robot's embodiment rather than capturing the locomotion dynamics shared across robots, so even a small change in actuator dynamics or limb length forces retraining from scratch. However, if we formalize a robot's unique physical traits into a morphology specification, a controller for a family of robots can utilize this blueprint in two ways. It can feed the specification to a model-free policy, or it can feed the specification to a learned dynamics model and extract the policy in imagination. We argue for the second route and introduce the Quadrupedal World Model (QWM), which conditions a single generative dynamics model on scale-invariant physical features and trains policies entirely inside it, through a physical morphology encoder, an adaptive reward normalizer, and morphology conditioning in the latent dynamics. Holding the morphology information identical, a model-free policy matches QWM on the training cohort but degrades on unseen morphologies, while QWM transfers zero-shot with no fine-tuning, adaptation, or warm-up in such cases. To our knowledge, this is the first world model to demonstrate zero-shot cross-embodiment transfer within the quadrupedal family.
summary: World models promise a paradigm shift in robotics, where an agent learns the physics of its environment once and then acquires behaviors efficiently.
featured: false
links:
- name: Project
  url: 'https://modanesh.github.io/papers/qwm'
url_pdf: https://arxiv.org/abs/2604.08780
---
