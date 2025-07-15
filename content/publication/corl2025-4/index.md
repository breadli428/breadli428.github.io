---
title: 'Constrained Style Learning from Imperfect Demonstrations under Task Optimality'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Kehan Wen
  - admin
  - Junzhe He
  - Marco Hutter

# Author notes (optional)
author_notes:
  - 'Robotic Systems Lab, ETH Zurich, Switzerland'
  - 'ETH AI Center, Switzerland'
  - 'Robotic Systems Lab, ETH Zurich, Switzerland'
  - 'Robotic Systems Lab, ETH Zurich, Switzerland'

date: '2025-07-10T00:00:00Z'
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

abstract: Learning from demonstration has proven effective in robotics for acquiring natural behaviors, such as stylistic motions and lifelike agility, particularly when explicitly defining style-oriented reward functions is challenging. Synthesizing stylistic motions for real-world tasks usually requires balancing task performance and imitation quality. Existing methods generally depend on expert demonstrations closely aligned with task objectives. However, practical demonstrations are often incomplete or unrealistic, causing current methods to boost style at the expense of task performance. To address this issue, we propose formulating the problem as a constrained Markov Decision Process (CMDP). Specifically, we optimize a style-imitation objective with constraints to maintain near-optimal task performance. We introduce an adaptively adjustable Lagrangian multiplier to guide the agent to imitate demonstrations selectively, capturing stylistic nuances without compromising task performance. We validate our approach across multiple robotic platforms and tasks, demonstrating both robust task performance and high-fidelity style learning. On ANYmal-D hardware we show a 14.5% drop in mechanical energy and a more agile gait pattern, showcasing real-world benefits.


# Summary. An optional shortened abstract.
summary: In this work, we propose a constrained style learning approach that balances task performance and stylistic imitation.

# tags:
#   - Large Language Models

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Project
  url: 'https://sites.google.com/view/consmimic'

url_pdf: 'https://arxiv.org/abs/2507.09371v1'
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
  caption: 'ConsMimic'
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
