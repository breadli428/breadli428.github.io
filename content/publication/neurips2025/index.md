---
title: 'Robotic World Model: A Neural Network Simulator for Robust Policy Optimization in Robotics'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Andreas Krause
  - Marco Hutter

# Author notes (optional)
author_notes:
  - 'ETH AI Center, Switzerland'
  - 'Learning & Adaptive Systems Group, ETH Zurich, Switzerland'
  - 'Robotic Systems Lab, ETH Zurich, Switzerland'

date: '2025-12-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: 'In *Conference on Neural Information Processing Systems, Embodied World Models Workshop*'
publication_short: In *NeurIPS EWM Workshop* <span class="middot-divider"></span><strong style="color:rgb(255,0,0);">Outstanding Paper Award</strong>

abstract: Learning robust and generalizable world models is crucial for enabling efficient and scalable robotic control in real-world environments. In this work, we introduce a novel framework for learning world models that accurately capture complex, partially observable, and stochastic dynamics. The proposed method employs a dual-autoregressive mechanism and self-supervised training to achieve reliable long-horizon predictions without relying on domain-specific inductive biases, ensuring adaptability across diverse robotic tasks. We further propose a policy optimization framework that leverages world models for efficient training in imagined environments and seamless deployment in real-world systems. Through extensive experiments, our approach consistently outperforms state-of-the-art methods, demonstrating superior autoregressive prediction accuracy, robustness to noise, and generalization across manipulation and locomotion tasks. Notably, policies trained with our method are successfully deployed on ANYmal D hardware in a zero-shot transfer, achieving robust performance with minimal sim-to-real performance loss. This work advances model-based reinforcement learning by addressing the challenges of long-horizon prediction, error accumulation, and sim-to-real transfer. By providing a scalable and robust framework, the introduced methods pave the way for adaptive and efficient robotic systems in real-world applications.

# Summary. An optional shortened abstract.
summary: We propose a model-based reinforcement learning method for robust policy optimization in robotics.

# tags:
#   - Large Language Models

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Project
  url: 'https://sites.google.com/view/roboticworldmodel/home'

url_pdf: 'https://arxiv.org/abs/2501.10100'
url_code: 'https://github.com/leggedrobotics/robotic_world_model'
url_dataset: ''
url_poster: 'https://drive.google.com/file/d/1PBrmlGrqrA4r_4DBX-_cSQFOiRUBGxaK/view?usp=sharing'
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/playlist?list=PLhqs0Oka9VRHfHk6nffzjiIsGv2KA0Wp9'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Robotic World Model'
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
