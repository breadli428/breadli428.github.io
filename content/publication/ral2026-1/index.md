---
title: Learning Whole-Body Humanoid Locomotion via Motion Generation and Motion Tracking
authors:
- Zewei Zhang
- Kehan Wen
- Michael Xu
- Junzhe He
- admin
- Takahiro Miki
- Clemens Schwarke
- Chong Zhang
- Xue Bin Peng
- Marco Hutter
date: '2026-04-19T00:00:00Z'
doi: ''
publishDate: '2017-01-01T00:00:00Z'
publication_types:
- article-journal
publication: In *IEEE Robotics and Automation Letters*
publication_short: In *RA-L*
abstract: Whole-body humanoid locomotion is challenging due to high-dimensional control, morphological instability, and the need for real-time adaptation to various terrains using onboard perception. Directly applying reinforcement learning (RL) with reward shaping to humanoid locomotion often leads to lower-body-dominated behaviors, whereas imitation-based RL can learn more coordinated whole-body skills but is typically limited to replaying reference motions without a mechanism to adapt them online from perception for terrain-aware locomotion. To address this gap, we propose a whole-body humanoid locomotion framework that combines skills learned from reference motions with terrain-aware adaptation. We first train a diffusion model on retargeted human motions for real-time prediction of terrain-aware reference motions. Concurrently, we train a whole-body reference tracker with RL using this motion data. To improve robustness under imperfectly generated references, we further fine-tune the tracker with a frozen motion generator in a closed-loop setting. The resulting system supports directional goal-reaching control with terrain-aware whole-body adaptation, and can be deployed on a Unitree G1 humanoid robot with onboard perception and computation. The hardware experiments demonstrate successful traversal over boxes, hurdles, stairs, and mixed terrain combinations. Quantitative results further show the benefits of incorporating online motion generation and fine-tuning the motion tracker for improved generalization and robustness.
summary: Whole-body humanoid locomotion is challenging due to high-dimensional control, morphological instability, and the need for real-time adaptation to various terrains using onboard perception.
featured: false
url_pdf: https://arxiv.org/abs/2604.17335
---
