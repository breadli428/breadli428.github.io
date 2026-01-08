---
title: 'Learning More With Less: Sample Efficient Dynamics Learning and Model-Based RL for Loco-Manipulation'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Benjamin Hoffman
  - Jin Cheng
  - admin
  - Stelian Coros

# Author notes (optional)
author_notes:
  - 'Computational Robotics Lab, ETH Zurich, Switzerland'
  - 'Computational Robotics Lab, ETH Zurich, Switzerland'
  - 'ETH AI Center, Switzerland'
  - 'Computational Robotics Lab, ETH Zurich, Switzerland'

date: '2025-01-08T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['article']

# Publication name and optional abbreviated publication name.
publication: In *arXiv*
publication_short: In *arXiv*

abstract: Combining the agility of legged locomotion with the capabilities of manipulation, loco-manipulation platforms have the potential to perform complex tasks in real-world applications. To this end, state-of-the-art quadrupeds with attached manipulators, such as the Boston Dynamics Spot, have emerged to provide a capable and robust platform. However, both the complexity of loco-manipulation control, as well as the black-box nature of commercial platforms pose challenges for developing accurate dynamics models and control policies. We address these challenges by developing a hand-crafted kinematic model for a quadruped-with-arm platform and, together with recent advances in Bayesian Neural Network (BNN)-based dynamics learning using physical priors, efficiently learn an accurate dynamics model from data. We then derive control policies for loco-manipulation via model-based reinforcement learning (RL). We demonstrate the effectiveness of this approach on hardware using the Boston Dynamics Spot with a manipulator, accurately performing dynamic end-effector trajectory tracking even in low data regimes.

# Summary. An optional shortened abstract.
summary: We propose a BNN-based dynamics learning method using physical priors for efficient policy learning.

# tags:
#   - Large Language Models

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2501.10499'
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
  caption: 'Sim-FSVGD'
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
