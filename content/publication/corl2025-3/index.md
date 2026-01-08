---
title: 'Motion Priors Reimagined: Adapting Flat-Terrain Skills for Complex Quadruped Mobility'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Zewei Zhang
  - admin
  - Takahiro Miki
  - Marco Hutter

# Author notes (optional)
author_notes:
  - 'Robotic Systems Lab, ETH Zurich, Switzerland'
  - 'ETH AI Center, Switzerland'
  - 'Robotic Systems Lab, ETH Zurich, Switzerland'
  - 'Robotic Systems Lab, ETH Zurich, Switzerland'

date: '2025-07-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *Conference on Robot Learning*
publication_short: In *CoRL*

abstract: Reinforcement learning (RL)-based legged locomotion controllers often require meticulous reward tuning to track velocities or goal positions while preserving smooth motion on various terrains. Motion imitation methods via RL using demonstration data reduce reward engineering but fail to generalize to novel environments. We address this by proposing a hierarchical RL framework in which a low-level policy is first pre-trained to imitate animal motions on flat ground, thereby establishing motion priors. A subsequent high-level, goal-conditioned policy then builds on these priors, learning residual corrections that enable perceptive locomotion, local obstacle avoidance, and goal-directed navigation across diverse and rugged terrains. Simulation experiments illustrate the effectiveness of learned residuals in adapting to progressively challenging uneven terrains while still preserving the locomotion characteristics provided by the motion priors. Furthermore, our results demonstrate improvements in motion regularization over baseline models trained without motion priors under similar reward setups. Real-world experiments with an ANYmal-D quadruped robot confirm our policy’s capability to generalize animal-like locomotion skills to complex terrains, demonstrating smooth and efficient locomotion and local navigation performance amidst challenging terrains with obstacles.


# Summary. An optional shortened abstract.
summary: In this work, we propose a hierarchical reinforcement learning method that extends flat-terrain skills for complex terrain navigation.

# tags:
#   - Large Language Models

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Project
  url: 'https://anymalprior.github.io/'

url_pdf: 'https://arxiv.org/abs/2505.16084'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Motion Priors Reimagined'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
