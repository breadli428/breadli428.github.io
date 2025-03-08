---
title: 'DFM: Deep Fourier Mimic for Expressive Dance Motion Learning'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Ryo Watanabe
  - admin
  - Marco Hutter

# Author notes (optional)
author_notes:
  - 'Sony Group Corporation, Japan'
  - 'ETH AI Center, Switzerland'
  - 'Robotic Systems Lab, ETH Zurich, Switzerland'

date: '2025-01-27T00:00:00Z'
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

abstract: As entertainment robots gain popularity, the demand for natural and expressive motion, particularly in dancing, continues to rise. Traditionally, dancing motions have been manually designed by artists, a process that is both labor-intensive and restricted to simple motion playback, lacking the flexibility to incorporate additional tasks such as locomotion or gaze control during dancing. To overcome these challenges, we introduce Deep Fourier Mimic (DFM), a novel method that combines advanced motion representation with Reinforcement Learning (RL) to enable smooth transitions between motions while concurrently managing auxiliary tasks during dance sequences. While previous frequency domain based motion representations have successfully encoded dance motions into latent parameters, they often impose overly rigid periodic assumptions at the local level, resulting in reduced tracking accuracy and motion expressiveness, which is a critical aspect for entertainment robots. By relaxing these locally periodic constraints, our approach not only enhances tracking precision but also facilitates smooth transitions between different motions. Furthermore, the learned RL policy that supports simultaneous base activities, such as locomotion and gaze control, allows entertainment robots to engage more dynamically and interactively with users rather than merely replaying static, pre-designed dance routines.

# Summary. An optional shortened abstract.
summary: In this work, we propose an efficient motion representation method with frequency-domain parameterizations that enable expressive policy learning.

# tags:
#   - Large Language Models

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Project
  url: 'https://sony.github.io/DFM/'

url_pdf: 'https://arxiv.org/abs/2502.10980'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=Do4HmC9PNCE'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Deep Fourier Mimic'
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
