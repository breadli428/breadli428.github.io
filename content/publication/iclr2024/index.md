---
title: 'FLD: Fourier Latent Dynamics for Structured Motion Representation and Learning'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Elijah Stanger-Jones
  - Steve Heim
  - Sangbae Kim

# Author notes (optional)
author_notes:
  - 'Biomimetic Robotics Lab, Massachusetts Institute of Technology, United States'
  - 'Biomimetic Robotics Lab, Massachusetts Institute of Technology, United States'
  - 'Biomimetic Robotics Lab, Massachusetts Institute of Technology, United States'
  - 'Biomimetic Robotics Lab, Massachusetts Institute of Technology, United States'

date: '2023-09-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Learning Representations*
publication_short: In *ICLR* <span class="middot-divider"></span><strong style="color:rgb(255,0,0);">Spotlight</strong>

abstract: Motion trajectories offer reliable references for physics-based motion learning but suffer from sparsity, particularly in regions that lack sufficient data coverage. To address this challenge, we introduce a self-supervised, structured representation and generation method that extracts spatial-temporal relationships in periodic or quasi-periodic motions. The motion dynamics in a continuously parameterized latent space enable our method to enhance the interpolation and generalization capabilities of motion learning algorithms. The motion learning controller, informed by the motion parameterization, operates online tracking of a wide range of motions, including targets unseen during training. With a fallback mechanism, the controller dynamically adapts its tracking strategy and automatically resorts to safe action execution when a potentially risky target is proposed. By leveraging the identified spatial-temporal structure, our work opens new possibilities for future advancements in general motion representation and learning algorithms.

# Summary. An optional shortened abstract.
summary: In this work, we propose a self-supervised, structured representation and generation method that extracts spatial-temporal relationships in periodic or quasi-periodic motions.

# tags:
#   - Large Language Models

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Project
  url: 'https://sites.google.com/view/iclr2024-fld/home'

url_pdf: 'https://arxiv.org/abs/2402.13820'
url_code: 'https://github.com/mit-biomimetics/fld'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/playlist?list=PLhqs0Oka9VREJXexpxtmu28NCo5KPyWV3'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Fourier Latent Dynamics'
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
