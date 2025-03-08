---
title: 'Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Marin Vlastelica
  - Sebastian Blaes
  - Jonas Frey
  - Felix Grimminger
  - Georg Martius

# Author notes (optional)
author_notes:
  - 'Robotic Systems Lab, ETH Zurich, Switzerland. Max Planck Institute for Intelligent Systems, Germany'
  - 'Max Planck Institute for Intelligent Systems, Germany'
  - 'Max Planck Institute for Intelligent Systems, Germany'
  - 'Robotic Systems Lab, ETH Zurich, Switzerland'
  - 'Max Planck Institute for Intelligent Systems, Germany'
  - 'Max Planck Institute for Intelligent Systems, Germany'

date: '2022-06-15T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *Conference on Robot Learning*
publication_short: In *CoRL* <span class="middot-divider"></span><strong style="color:rgb(255,0,0);">Best Paper Award Finalist</strong>

abstract: Learning agile skills is one of the main challenges in robotics. To this end, reinforcement learning approaches have achieved impressive results. These methods require explicit task information in terms of a reward function or an expert that can be queried in simulation to provide a target control output, which limits their applicability. In this work, we propose a generative adversarial method for inferring reward functions from partial and potentially physically incompatible demonstrations for successful skill acquirement where reference or expert demonstrations are not easily accessible. Moreover, we show that by using a Wasserstein GAN formulation and transitions from demonstrations with rough and partial information as input, we are able to extract policies that are robust and capable of imitating demonstrated behaviors. Finally, the obtained skills such as a backflip are tested on an agile quadruped robot called Solo 8 and present faithful replication of hand-held human demonstrations.

# Summary. An optional shortened abstract.
summary: In this work, we propose a generative adversarial method for inferring reward functions from partial and potentially physically incompatible demonstrations for successful skill acquirement where reference or expert demonstrations are not easily accessible.

# tags:
#   - Large Language Models

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Project
  url: 'https://sites.google.com/view/corl2022-wasabi/home'

url_pdf: 'https://arxiv.org/abs/2206.11693'
url_code: 'https://github.com/martius-lab/wasabi'
url_dataset: ''
url_poster: 'https://drive.google.com/file/d/1lJ37U-_-eN-fDKTP88U8G-U5dnw-S6hU/view'
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://youtube.com/playlist?list=PLhqs0Oka9VRFrKb9djmEBU-NyewCKHfGP'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'SOLOBACKFLIP'
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
