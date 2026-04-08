---
title: 'Symmetry-Guided Memory Augmentation for Efficient Locomotion Learning'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Kaixi Bao
  - admin
  - Yarden As
  - Andreas Krause
  - Marco Hutter

# Author notes (optional)
author_notes:
  - 'Robotic Systems Lab, ETH Zurich, Switzerland'
  - 'ETH AI Center, Switzerland'
  - 'ETH AI Center, Switzerland'
  - 'Learning & Adaptive Systems Group, ETH Zurich, Switzerland'
  - 'Robotic Systems Lab, ETH Zurich, Switzerland'

date: '2025-04-25T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *arXiv*
publication_short: In *arXiv*

abstract: Training reinforcement learning (RL) policies for legged locomotion often requires extensive environment interactions, which are costly and time-consuming. We propose Symmetry-Guided Memory Augmentation (SGMA), a framework that improves training efficiency by combining structured experience augmentation with memory-based context inference. Our method leverages robot and task symmetries to generate additional, physically consistent training experiences without requiring extra interactions. To avoid the pitfalls of naive augmentation, we extend these transformations to the policy's memory states, enabling the agent to retain task-relevant context and adapt its behavior accordingly. We evaluate the approach on quadruped and humanoid robots in simulation, as well as on a real quadruped platform. Across diverse locomotion tasks involving joint failures and payload variations, our method achieves efficient policy training while maintaining robust performance, demonstrating a practical route toward data-efficient RL for legged robots.

# Summary. An optional shortened abstract.
summary: We propose a memory-enhanced augmentation method for reinforcement learning that extends OOD generalization with context-awareness.

# tags:
#   - Large Language Models

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Project
  url: 'https://sites.google.com/view/eth-sgma'

url_pdf: 'https://arxiv.org/abs/2502.01521'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=e30T4eXbbpo'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Symmetry-Guided Memory Augmentation'
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
