---
title: 'Learning Diverse Skills for Local Navigation under Multi-constraint Optimality'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Jin Cheng
  - Marin Vlastelica
  - Pavel Kolev
  - admin
  - Georg Martius

# Author notes (optional)
author_notes:
  - 'Max Planck Institute for Intelligent Systems, Germany'
  - 'Max Planck Institute for Intelligent Systems, Germany'
  - 'Max Planck Institute for Intelligent Systems, Germany'
  - 'Robotic Systems Lab, ETH Zurich, Switzerland. Max Planck Institute for Intelligent Systems, Germany'
  - 'Max Planck Institute for Intelligent Systems, Germany'

date: '2024-05-13T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *IEEE International Conference on Robotics and Automation*
publication_short: In *ICRA*

abstract: Despite many successful applications of data-driven control in robotics, extracting meaningful diverse behaviors remains a challenge. Typically, task performance needs to be compromised in order to achieve diversity. In many scenarios, task requirements are specified as a multitude of reward terms, each requiring a different trade-off. In this work, we take a constrained optimization viewpoint on the quality-diversity trade-off and show that we can obtain diverse policies while imposing constraints on their value functions which are defined through distinct rewards. In line with previous work, further control of the diversity level can be achieved through an attract-repel reward term motivated by the Van der Waals force. We demonstrate the effectiveness of our method on a local navigation task where a quadruped robot needs to reach the target within a finite horizon. Finally, our trained policies transfer well to the real 12-DoF quadruped robot, Solo12, and exhibit diverse agile behaviors with successful obstacle traversal.

# Summary. An optional shortened abstract.
summary: We propose a constraint grouping method for diversity optimization maintaining near optimality.

# tags:
#   - Large Language Models

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Project
  url: 'https://sites.google.com/view/icra2024-dominic'

url_pdf: 'https://arxiv.org/abs/2310.02440'
url_code: 'https://github.com/martius-lab/dominic'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://youtube.com/playlist?list=PLUPeAQ-E3nrVdeZ4ZZYy0kQNX3pb4szJL&feature=shared'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Multi-constraint Optimality'
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
