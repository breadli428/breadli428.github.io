---
title: 'Toward Task Generalization via Memory Augmentation in Meta-Reinforcement Learning'

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

abstract: In reinforcement learning (RL), agents often struggle to perform well on tasks that differ from those encountered during training. This limitation presents a challenge to the broader deployment of RL in diverse and dynamic task settings. In this work, we introduce memory augmentation, a memory-based RL approach to improve task generalization. Our approach leverages task-structured augmentations to simulate plausible out-of-distribution scenarios and incorporates memory mechanisms to enable context-aware policy adaptation. Trained on a predefined set of tasks, our policy demonstrates the ability to generalize to unseen tasks through memory augmentation without requiring additional interactions with the environment. Through extensive simulation experiments and real-world hardware evaluations on legged locomotion tasks, we demonstrate that our approach achieves zero-shot generalization to unseen tasks while maintaining robust in-distribution performance and high sample efficiency.

# Summary. An optional shortened abstract.
summary: We propose a memory-enhanced meta-reinforcement learning method that extends OOD generalization for RL agents.

# tags:
#   - Large Language Models

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Project
  url: 'https://sites.google.com/view/corl2025-ma/home'

url_pdf: 'https://arxiv.org/abs/2502.01521'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=I2jMrrBqisI'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Memory-Augmented Meta-RL'
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
