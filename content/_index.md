---
# Leave the homepage title empty to use the site title
title: ""
date: 2025-03-08
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    demo: false # Only display this section in the Hugo Blox Builder demo site
    content:
      title: <br/><br/>Embodied Intelligence and Robot Learning
    design:
      background:
        image:
          filename: sequence.png
          filters:
            brightness: 0.5
        text_color_light: true
  - block: resume-biography-3
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: '#242424'
        # image:
        #   # Add your image background to `assets/media/`.
        #   filename: stacked-peaks.svg
        #   filters:
        #     brightness: 1.0
        #   size: cover
        #   position: center
        #   parallax: false
  # - block: markdown
  #   content:
  #     title: '📚 My Research'
  #     subtitle: ''
  #     text: |-
  #       Use this area to speak to your mission. I'm a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.

  #       I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy.
        
  #       Please reach out to collaborate 😃
  #   design:
  #     columns: '1'
  # - block: collection
  #   id: news
  #   content:
  #     title: News
  #     subtitle: ''
  #     text: ''
  #     # Page type to display. E.g. post, talk, publication...
  #     page_type: post
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 0
  #     # Filter on criteria
  #     filters:
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: date-title-summary
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]
  - block: markdown
    id: news
    content:
      title: News
      text: |-
        <div style="height: 600px; width: 1000px; overflow-y: scroll; align-items: center;">
          <details open>
            <summary>
              <strong>2025</strong>
            </summary>
            <!-- <blockquote> -->
            <div style="margin-left:6px; padding-left:20px; border-left:1px solid;">
              <p></p>
              <details open>
                <summary>
                  <strong style="color:rgb(255,0,0);">Jan 27: Our work was accepted to ICRA 2025.</strong>
                </summary>
                Our work <a href="/publication/icra2025" target="_blank" rel="noopener"><em>DFM: Deep Fourier Mimic for Expressive Dance Motion Learning</em></a> was accepted by <a href="https://2025.ieee-icra.org/" target="_blank" rel="noopener">IEEE International Conference on Robotics and Automation (ICRA) 2025</a>. ICRA 2025 will be held in Atlanta, United States from May 19 to 23, 2025.
              </details>
            </div>
            <!-- </blockquote> -->
          </details>
          <details open>
            <summary>
              <strong>2024</strong>
            </summary>
            <!-- <blockquote> -->
            <div style="margin-left:6px; padding-left:20px; border-left:1px solid;">
              <p></p>
              <details>
                <summary>
                  <strong style="color:rgb(255,0,0);">Oct 08: Our work was accepted to NeurIPS 2024.</strong>
                </summary>
                Our work <em>Dataset and lessons learned from the 2024 satml llm capture-the-flag competition</em> was accepted by <a href="https://neurips.cc/" target="_blank" rel="noopener">The Thirty-Eighth Annual Conference on Neural Information Processing Systems (NeurIPS) 2024</a>. NeurIPS 2024 will be held in Vancouver, Canada from Dec 10 to 15, 2024.
              </details>
              <details>
                <summary>
                  <strong style="color:rgb(255,0,0);">Apr 05: I received the ETH Medal at my master's graduation ceremony.</strong>
                </summary>
                I feel extremely honored to receive the <a href="https://ethz.ch/en/the-eth-zurich/education/awards/eth-medal.html#" target="_blank" rel="noopener">ETH Medal</a> at my master's graduation ceremony at <a href="https://ethz.ch/en.html" target="_blank" rel="noopener">ETH Zurich</a>. The ETH Medal is awarded to students with outstanding master's and doctoral theses. I am deeply grateful to view this as a recognition and acknowledgement of my work during my master's studies. I would like to express my sincere gratitude to my advisors <a href="https://al.is.mpg.de/person/gmartius" target="_blank" rel="noopener">Prof. Georg Martius</a>, <a href="https://meche.mit.edu/people/faculty/SANGBAE@MIT.EDU" target="_blank" rel="noopener">Prof. Sangbae Kim</a>, and especially, <a href="https://mavt.ethz.ch/people/person-detail.hutter.html" target="_blank" rel="noopener">Prof. Marco Hutter</a> for their guidance and support.
              </details>
              <details>
                <summary>
                  <strong>Apr 05: An unforgettable reunion of friends at my master's graduation ceremony.</strong>
                </summary>
                The <a href="https://ethz.ch/en/the-eth-zurich/education/awards/eth-medal.html#" target="_blank" rel="noopener">graduation ceremony</a> officially concludes my master's studies at <a href="https://ethz.ch/en.html" target="_blank" rel="noopener">ETH Zurich</a>. It was an unforgettable reunion of friends who shared this great journey with me. I am grateful for the opportunity to have met so many wonderful people during my studies. I am excited to see where our paths will lead us next.
              </details>
              <details>
                <summary>
                  <strong>Mar 13: Our work was accepted to ICLR 2024 Generative Models for Decision Making workshop.</strong>
                </summary>
                  Our work <a href="/publication/iclr2024" target="_blank" rel="noopener"><em>FLD: Fourier Latent Dynamics for Structured Motion Representation and Learning</em></a> was accepted to the <a href="https://sites.google.com/view/genai4dm-iclr2024" target="_blank" rel="noopener">Generative Models for Decision Making (GenAI4DM)</a> workshop at <a href="https://iclr.cc/" target="_blank" rel="noopener">The Twelfth International Conference on Learning Representations (ICLR)</a>. This workshop aims to bring together researchers and practitioners from the fields of generative AI and decision making to explore the latest advances, methodologies, and applications.
              </details>
              <details>
                <summary>
                  <strong>Mar 04: Our defense won the second price in the LLM CTF competition at IEEE SaTML 2024.</strong>
                </summary>
                  Our team won the second price with our Llama-2-70b-chat defense in the <a href="https://ctf.spylab.ai/" target="_blank" rel="noopener">Large Language Models Capture-the-Flag (LLM CTF) competition</a> at <a href="https://satml.org/" target="_blank" rel="noopener">2024 IEEE Conference on Secure and Trustworthy Machine Learning (SaTML)</a>. In this competition, participants assume the roles of defenders that craft prompts and filters to instruct an LLM to keep a secret, aiming to prevent its discovery in a conversation.
              </details>
              <details>
                <summary>
                  <strong style="color:rgb(255,0,0);">Jan 29: Our work was accepted to ICRA 2024.</strong>
                </summary>
                Our work <a href="/publication/icra2024" target="_blank" rel="noopener"><em>Learning Diverse Skills for Local Navigation under Multi-constraint Optimality</em></a> was accepted by <a href="https://2024.ieee-icra.org/" target="_blank" rel="noopener">IEEE International Conference on Robotics and Automation (ICRA) 2024</a>. ICRA 2024 will be held in Yokohama, Japan from May 13 to 17, 2024.
              </details>
              <details>
                <summary>
                  <strong style="color:rgb(255,0,0);">Jan 16: Our work was accepted to ICLR 2024 for a spotlight presentation.</strong>
                </summary>
                Our work <a href="/publication/iclr2024" target="_blank" rel="noopener"><em>FLD: Fourier Latent Dynamics for Structured Motion Representation and Learning</em></a> was accepted by <a href="https://iclr.cc/" target="_blank" rel="noopener">The Twelfth International Conference on Learning Representations (ICLR)</a> for a spotlight presentation. ICLR 2024 will be held in Vienna, Austria from May 7 to 11, 2024.
              </details>
            </div>
            <!-- </blockquote> -->
          </details>
          <details>
            <summary>
              <strong>2023</strong>
            </summary>
            <!-- <blockquote> -->
            <div style="margin-left:6px; padding-left:20px; border-left:1px solid;">
              <p></p>
              <details>
                <summary>
                  <strong>Nov 01: I started my Ph.D. journey as a doctoral fellow at ETH AI Center.</strong>
                </summary>
                I am excited to share that I started my Ph.D. program as a doctoral fellow at <a href="https://ai.ethz.ch/" target="_blank" rel="noopener">ETH AI Center</a> at <a href="https://ethz.ch/en.html" target="_blank" rel="noopener">ETH Zurich</a>, Switzerland. I am honored to be co-supervised by <a href="https://las.inf.ethz.ch/krausea" target="_blank" rel="noopener">Prof. Andreas Krause</a> and <a href="https://mavt.ethz.ch/people/person-detail.hutter.html" target="_blank" rel="noopener">Prof. Marco Hutter</a>.
              </details>
              <details>
                <summary>
                  <strong>Oct 03: I finished my visit at the Biomimetic Robotics Lab at MIT.</strong>
                </summary>
                I am thrilled to wrap up my visit with the talented team at the <a href="https://biomimetics.mit.edu/" target="_blank" rel="noopener">Biomimetic Robotics Lab</a> at <a href="https://www.mit.edu/" target="_blank" rel="noopener">Massachusetts Institute of Technology (MIT)</a>, Cambridge, United States. It has been an invaluable experience, collaborating on cutting-edge legged robotics. I am eager to see our collective efforts make a meaningful impact on the robot learning community!
              </details>
              <details>
                <summary>
                  <strong>Jun 03: Great time at ICRA 2023.</strong>
                </summary>
                It was wonderful to have met my old and new friends during <a href="https://www.icra2023.org/" target="_blank" rel="noopener">IEEE International Conference on Robotics and Automation (ICRA) 2023</a> in London, United Kingdom. I am excited to see that our work <a href="/publication/icra2023" target="_blank" rel="noopener"><em>Versatile Skill Control via Self-supervised Adversarial Imitation of Unlabeled Mixed Motions</em></a> has been acknowledged by the greatest roboticists in the field. Thanks to the team <a href="https://sblaes.com/" target="_blank" rel="noopener">Sebastian Blaes</a>, <a href="https://pavelkolev.github.io/" target="_blank" rel="noopener">Pavel Kolev</a>, <a href="https://jimimvp.github.io/" target="_blank" rel="noopener">Marin Vlastelica</a>, <a href="https://www.linkedin.com/in/jonas-frey-3a3702175/" target="_blank" rel="noopener">Jonas Frey</a> and <a href="https://al.is.mpg.de/person/gmartius" target="_blank" rel="noopener">Georg Martius</a>, who made this work possible.
              </details>
              <details>
                <summary>
                  <strong>Apr 27: Our work was accepted to ICRA 2023 Agile Movements workshop.</strong>
                </summary>
                Our work <a href="/publication/icra2023" target="_blank" rel="noopener"><em>Versatile Skill Control via Self-supervised Adversarial Imitation of Unlabeled Mixed Motions</em></a> was accepted to the <a href="https://sites.google.com/view/agilemovement-2023icra/home" target="_blank" rel="noopener">Agile Movements: Animal Behavior, Biomechanics, and Robot Devices</a> workshop at <a href="https://www.icra2023.org/" target="_blank" rel="noopener">IEEE International Conference on Robotics and Automation (ICRA) 2023</a>. This workshop invites researchers to identify the challenges and opportunities of understanding and improving robotic agility from a diverse range of areas, including biology, biomechanics, mechanism design, and control.
              </details>
              <details>
                <summary>
                  <strong style="color:rgb(255,0,0);">Mar 02: I received the ETH AI Center Doctoral Fellowship.</strong>
                </summary>
                I am excited to share that I received the <a href="https://ai.ethz.ch/education/phd-and-postdoc-programs/phd-fellowships.html" target="_blank" rel="noopener">ETH AI Center Doctoral Fellowship</a> at <a href="https://ethz.ch/en.html" target="_blank" rel="noopener">ETH Zurich</a>, Switzerland. ETH AI Center Fellowship is awarded to doctoral students, where young researchers are co-supervised by two faculty members from different departments within ETH Zurich, thus fostering a culture of interdisciplinary exchange and collaboration. I am extremely honored to receive this offer from <a href="https://las.inf.ethz.ch/krausea" target="_blank" rel="noopener">Prof. Andreas Krause</a> and <a href="https://mavt.ethz.ch/people/person-detail.hutter.html" target="_blank" rel="noopener">Prof. Marco Hutter</a>.
              </details>
              <details>
                <summary>
                  <strong>Feb 16: Our work on Solo robots at MPI-IS was reported by German TV network.</strong>
                </summary>
                My work on Solo robots during my internship at the <a href="https://is.mpg.de/" target="_blank" rel="noopener">Max Planck Institute for Intelligent Systems</a> was covered in <a href="https://www.3sat.de/wissen/nano" target="_blank" rel="noopener">NANO</a> of <a href="https://www.3sat.de/" target="_blank" rel="noopener">3sat</a>. In the <a href="https://www.3sat.de/wissen/nano/230216-sendung-nutzung-der-polizei-software-eingeschraenkt-nano-100.html" target="_blank" rel="noopener">coverage</a>, <a href="https://al.is.mpg.de/person/gmartius" target="_blank" rel="noopener">Prof. Georg Martius</a> explained how autonomous learning systems can obtain extraordinary intelligence from interactions with the environment.
              </details>
              <details>
                <summary>
                  <strong style="color:rgb(255,0,0);">Feb 04: I received admissions to the Ph.D. program at MIT EECS and other prominent institutes.</strong>
                </summary>
                I am excited to share that I received admission invitation to the Ph.D. program at the department of <a href="https://www.eecs.mit.edu/" target="_blank" rel="noopener">Electrical Engineering and Computer Science (EECS)</a> and <a href="https://meche.mit.edu/" target="_blank" rel="noopener">Mechanical Engineering (MechE)</a> at <a href="https://www.mit.edu/" target="_blank" rel="noopener">Massachusetts Institute of Technology (MIT)</a>, Cambridge, United States. I was also lucky to be admitted to the <a href="https://www.ri.cmu.edu/" target="_blank" rel="noopener">Robotics Institute</a> at <a href="https://www.cmu.edu/" target="_blank" rel="noopener">Carnegie Mellon University (CMU)</a>, Pittsburgh, United States. I am honored to view these as a recognition and acknowledgement of my work during my master's studies.
              </details>
              <details>
                <summary>
                  <strong style="color:rgb(255,0,0);">Jan 16: Our work was accepted to ICRA 2023.</strong>
                </summary>
                Our work <a href="/publication/icra2023" target="_blank" rel="noopener"><em>Versatile Skill Control via Self-supervised Adversarial Imitation of Unlabeled Mixed Motions</em></a> was accepted by <a href="https://www.icra2023.org/" target="_blank" rel="noopener">IEEE International Conference on Robotics and Automation (ICRA)</a>. ICRA 2023 will be held in London, United Kingdom from May 29 to June 2, 2023.
              </details>
              <details>
                <summary>
                  <strong>Jan 09: I started my visit at Biomimetic Robotics Lab at MIT.</strong>
                </summary>
                Starting from January, I am honored to work with <a href="https://meche.mit.edu/people/faculty/SANGBAE@MIT.EDU" target="_blank" rel="noopener">Prof. Sangbae Kim</a> at <a href="https://biomimetics.mit.edu/" target="_blank" rel="noopener">Biomimetic Robotics Lab</a> at <a href="https://www.mit.edu/" target="_blank" rel="noopener">Massachusetts Institute of Technology (MIT)</a>, Cambridge, United States. My main research topic focuses on developing latent skill representation for <a href="https://spectrum.ieee.org/mit-dynamic-acrobatic-humanoid-robot" target="_blank" rel="noopener">MIT Humanoid</a> robot. I am happy to collaborate with <a href="https://sheim.github.io/" target="_blank" rel="noopener">Steve Heim</a> and <a href="https://www.linkedin.com/in/elijah-stanger-jones-216b10126/" target="_blank" rel="noopener">Elijah Stanger-Jones</a> on this exciting topic.
              </details>
            </div>
            <!-- </blockquote> -->
          </details>
          <p></p>
          <details>
            <summary>
              <strong>2022</strong>
            </summary>
            <!-- <blockquote> -->
            <div style="margin-left:6px; padding-left:20px; border-left:1px solid;">
              <p></p>
              <details>
                <summary>
                  <strong>Dec 19: Great time at CoRL 2022 and satisfying results for my first publication.</strong>
                </summary>
                It was wonderful to have met all the great names and my future collaborators and advisors during <a href="https://corl2022.org/" target="_blank" rel="noopener">Conference on Robot Learning (CoRL) 2022</a> in Auckland, New Zealand. I am excited to see that our work <a href="/publication/corl2022" target="_blank" rel="noopener"><em>Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations</em></a> has been acknowledged by the greatest roboticists in the field and was announced into the finalist of the best paper award. Thanks to the team <a href="https://jimimvp.github.io/" target="_blank" rel="noopener">Marin Vlastelica</a>, <a href="https://sblaes.com/" target="_blank" rel="noopener">Sebastian Blaes</a>, <a href="https://www.linkedin.com/in/jonas-frey-3a3702175/" target="_blank" rel="noopener">Jonas Frey</a>, <a href="https://is.mpg.de/person/fgrimmin" target="_blank" rel="noopener">Felix Grimminger</a> and <a href="https://al.is.mpg.de/person/gmartius" target="_blank" rel="noopener">Georg Martius</a>, who made this achievement possible.
              </details>
              <details>
                <summary>
                  <strong style="color:rgb(255,0,0);">Dec 16: Our work made it into the finalist of the best paper award at CoRL 2022, Auckland, New Zealand.</strong>
                </summary>
                It was announced during <a href="https://corl2022.org/" target="_blank" rel="noopener">Conference on Robot Learning (CoRL) 2022</a> in Auckland, New Zealand that our work <a href="/publication/corl2022" target="_blank" rel="noopener"><em>Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations</em></a> made it into the finalist of the best paper award. As one of the three nominated papers in this list, our work has received great acknowledgment from the community.
              </details>
              <details>
                <summary>
                  <strong>Dec 02: Our work was presented to the Machines in Motion Laboratory, New York University, United States.</strong>
                </summary>
                Our work <a href="/publication/corl2022" target="_blank" rel="noopener"><em>Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations</em></a> was presented to the scholars at the <a href="https://wp.nyu.edu/machinesinmotion/" target="_blank" rel="noopener">Machines in Motion Laboratory</a> led by <a href="http://wp.nyu.edu/machinesinmotion/89-2/" target="_blank" rel="noopener">Prof. Ludovic Righetti</a> at <a href="https://www.nyu.edu/" target="_blank" rel="noopener">New York University</a>. The Machines in Motion Laboratory focuses on understanding the fundamental principles for robot locomotion and manipulation that will endow robots with the robustness and adaptability necessary to efficiently and autonomously act in an unknown and changing environment.
              </details>
              <details>
                <summary>
                  <strong>Nov 25: I will join the Biomimetic Robotics Lab at MIT for my master thesis.</strong>
                </summary>
                I am glad to share that I will join the <a href="https://biomimetics.mit.edu/" target="_blank" rel="noopener">Biomimetic Robotics Lab</a> led by <a href="https://meche.mit.edu/people/faculty/SANGBAE@MIT.EDU" target="_blank" rel="noopener">Prof. Sangbae Kim</a> at <a href="https://www.mit.edu/" target="_blank" rel="noopener">Massachusetts Institute of Technology (MIT)</a> to complete my master thesis later this year. The Biomimetic Robotics Lab focuses on designing and controlling robots using insights taken from the natural world. I will be working with the <a href="https://spectrum.ieee.org/mit-dynamic-acrobatic-humanoid-robot" target="_blank" rel="noopener">MIT Humanoid</a> on human demonstration imitation.
              </details>
              <details>
                <summary>
                  <strong>Nov 22: Our work was accepted to CoRL 2022 Learning for Agile Robotics workshop.</strong>
                </summary>
                Our work <a href="/publication/corl2022" target="_blank" rel="noopener"><em>Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations</em></a> was accepted to the <a href="https://www.agilerobotscorl2022.com/" target="_blank" rel="noopener">Learning for Agile Robotics </a> workshop at <a href="https://corl2022.org/" target="_blank" rel="noopener">Conference on Robot Learning (CoRL) 2022</a>. This workshop invites researchers working on making agile robots. The goals include fostering collaboration, understanding the current limitations and inefficiencies, learning common ideas on modern ML based approaches, etc.
              </details>
              <details>
                <summary>
                  <strong>Nov 21: Our work made it into the Video Friday collection at IEEE Spectrum again.</strong>
                </summary>
                Our work <a href="/publication/corl2022" target="_blank" rel="noopener"><em>Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations</em></a> was covered by <a href="https://spectrum.ieee.org/video-friday-little-robot-big-stairs" target="_blank" rel="noopener">Video Friday collection</a> at <a href="https://spectrum.ieee.org/" target="_blank" rel="noopener">IEEE Spectrum</a>. Video Friday is a weekly selection of state-of-the-art robotics videos, collected by scholars at <a href="https://spectrum.ieee.org/topic/robotics/" target="_blank" rel="noopener">IEEE Spectrum Robotics</a>. This time, our <a href="https://www.youtube.com/watch?v=WZf67Qik6Fc" target="_blank" rel="noopener"><em>overview video</em></a> was selected and well acknowledged.
              </details>
              <details>
                <summary>
                  <strong>Sep 15: Our work was submitted to IEEE International Conference on Robotics and Automation (ICRA) 2023.</strong>
                </summary>
                During the second three months of my internship, I accomplished the work <a href="/publication/icra2023" target="_blank" rel="noopener"><em>Versatile Skill Control via Self-supervised Adversarial Imitation of Unlabeled Mixed Motions</em></a> under the guidance by <a href="https://sblaes.com/" target="_blank" rel="noopener">Sebastian Blaes</a>, <a href="https://pavelkolev.github.io/" target="_blank" rel="noopener">Pavel Kolev</a>, <a href="https://jimimvp.github.io/" target="_blank" rel="noopener">Marin Vlastelica</a>, <a href="https://www.linkedin.com/in/jonas-frey-3a3702175/" target="_blank" rel="noopener">Jonas Frey</a> and <a href="https://al.is.mpg.de/person/gmartius" target="_blank" rel="noopener">Prof. Georg Martius</a>. In this work, <a href="https://open-dynamic-robot-initiative.github.io/" target="_blank" rel="noopener">Solo</a> obtained diverse skills by imitating unlabeled, mixed reference motions.
              </details>
              <details>
                <summary>
                  <strong style="color:rgb(255,0,0);">Sep 10: Our work was accepted to CoRL 2022 for an oral presentation with best paper award nomination.</strong>
                </summary>
                Our work <a href="/publication/corl2022" target="_blank" rel="noopener"><em>Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations</em></a> was accepted by <a href="https://corl2022.org/" target="_blank" rel="noopener">Conference on Robot Learning (CoRL) 2022</a> for an oral presentation with best paper award nomination. CoRL 2022 will be held in Auckland, New Zealand from December 14 to 18, 2022.
              </details>
              <details>
                <summary>
                  <strong>Aug 10: Our work was presented to the Robotic Systems Lab, ETH Zurich, Switzerland.</strong>
                </summary>
                Our work <a href="/publication/corl2022" target="_blank" rel="noopener"><em>Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations</em></a> was presented to the scholars at the <a href="https://rsl.ethz.ch/" target="_blank" rel="noopener">Robotic Systems Lab (RSL)</a>, <a href="https://ethz.ch/en.html" target="_blank" rel="noopener">ETH Zurich</a> during the research presentation. In this weekly event, internal and external researchers are invited to inform their state-of-the-art discoveries in fields including robotic system integration and control methods.
              </details>
              <details>
                <summary>
                  <strong>Jul 02: Our work was presented to the public at the Science & Innovation Days, Tübingen.</strong>
                </summary>
                The <a href="https://youtube.com/playlist?list=PLhqs0Oka9VRFrKb9djmEBU-NyewCKHfGP" target="_blank" rel="noopener">experiments</a> of our work <a href="/publication/corl2022" target="_blank" rel="noopener"><em>Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations</em></a> were presented to the public at the <a href="https://uni-tuebingen.de/en/universitaet/campusleben/veranstaltungen/zentrale-veranstaltungen/science-innovation-days/" target="_blank" rel="noopener">Tübingen Science & Innovation Days</a>. In this event, research institutes including the <a href="https://is.mpg.de/" target="_blank" rel="noopener">Max Planck Institute for Intelligent Systems</a> open their doors to the interested public and present their research. 
              </details>
              <details>
                <summary>
                  <strong>Jul 01: Our work made it into the Video Friday collection at IEEE Spectrum.</strong>
                </summary>
                Our work <a href="/publication/corl2022" target="_blank" rel="noopener"><em>Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations</em></a> was covered by <a href="https://spectrum.ieee.org/video-friday-pokebo-cubes" target="_blank" rel="noopener">Video Friday collection</a> at <a href="https://spectrum.ieee.org/" target="_blank" rel="noopener">IEEE Spectrum</a>. Video Friday is a weekly selection of state-of-the-art robotics videos, collected by scholars at <a href="https://spectrum.ieee.org/topic/robotics/" target="_blank" rel="noopener">IEEE Spectrum Robotics</a>. Among our selected videos, <a href="https://www.youtube.com/watch?v=GDlylFsp9so" target="_blank" rel="noopener"><em>SOLOBACKFLIP</em></a> gained particular popularity.
              </details>
              <details>
                <summary>
                  <strong>Jun 29: Our work was presented to scholars from the International Max Planck Research School for Intelligent Systems.</strong>
                </summary>
                Our work <a href="/publication/corl2022" target="_blank" rel="noopener"><em>Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations</em></a> was presented to the evaluation committee and Ph.D. scholars from the <a href="https://imprs.is.mpg.de/" target="_blank" rel="noopener">International Max Planck Research School for Intelligent Systems (IMPRS)</a> during the on-site evaluation.
              </details>
              <details>
                <summary>
                  <strong>Jun 15: Our work was submitted to Conference on Robot Learning (CoRL) 2022.</strong>
                </summary>
                During the first three months of my internship, I accomplished the work <a href="/publication/corl2022" target="_blank" rel="noopener"><em>Learning Agile Skills via Adversarial Imitation of Rough Partial Demonstrations</em></a> under the guidance by <a href="https://jimimvp.github.io/" target="_blank" rel="noopener">Marin Vlastelica</a>, <a href="https://sblaes.com/" target="_blank" rel="noopener">Sebastian Blaes</a>, <a href="https://www.linkedin.com/in/jonas-frey-3a3702175/" target="_blank" rel="noopener">Jonas Frey</a>, <a href="https://is.mpg.de/person/fgrimmin" target="_blank" rel="noopener">Felix Grimminger</a> and <a href="https://al.is.mpg.de/person/gmartius" target="_blank" rel="noopener">Prof. Georg Martius</a>. In this work, <a href="https://open-dynamic-robot-initiative.github.io/" target="_blank" rel="noopener">Solo</a> developed highly dynamic skills by imitating rough, partial, human-demonstrated reference motions.
              </details>
              <details>
                <summary>
                  <strong>Apr 01: I started my internship at Autonomous Learning Group at Max Planck Institute for Intelligent Systems.</strong>
                </summary>
                Starting from April, I am honored to work with <a href="https://al.is.mpg.de/person/gmartius" target="_blank" rel="noopener">Prof. Georg Martius</a> at <a href="https://al.is.mpg.de/" target="_blank" rel="noopener">Autonomous Learning Group</a> at <a href="https://is.mpg.de/" target="_blank" rel="noopener">Max Planck Institute for Intelligent Systems (MPI-IS)</a>, Tübingen, Germany. My main research topic focuses on agile skill development and style diversification for <a href="https://open-dynamic-robot-initiative.github.io/" target="_blank" rel="noopener">Solo</a> robot. This work is closely collaborated with <a href="https://rsl.ethz.ch/" target="_blank" rel="noopener">Robotic Systems Lab (RSL)</a>, <a href="https://ethz.ch/en.html" target="_blank" rel="noopener">ETH Zurich</a>, Switzerland.
              </details>
              <details>
                <summary>
                  <strong>Mar 30: My semester project at Robotic Systems Lab (RSL) finished with successful policy deployment on the real system.</strong>
                </summary>
                By employing a novel compositional control structure, <a href="https://www.anybotics.com/anymal-autonomous-legged-robot/" target="_blank" rel="noopener">ANYmal</a> learned to achieve full-pose trajectory tracking in a global coordinate system. A hierarchical system pipeline was introduced, where the high-level policy proceeds global target information and outputs low-level composition signals and commands with trivial regularization.
              </details>
            </div>
            <!-- </blockquote> -->
          </details>
          <p></p>
          <details>
            <summary>
              <strong>2021</strong>
            </summary>
            <!-- <blockquote> -->
            <div style="margin-left:6px; padding-left:20px; border-left:1px solid;">
              <p></p>
              <details>
                <summary>
                  <strong>Oct 01: I started my semester project at Robotic Systems Lab (RSL), ETH Zurich, Switzerland.</strong>
                </summary>
                From October, I am honored to work on a semester project on the skill integration for ANYmal with hierarchical reinforcement learning at <a href="https://rsl.ethz.ch/" target="_blank" rel="noopener">Robotic Systems Lab (RSL)</a> directed by <a href="https://mavt.ethz.ch/people/person-detail.hutter.html" target="_blank" rel="noopener">Prof. Marco Hutter</a>. The main research topic focuses on extending locomotion and manipulation capabilities for legged systems by leveraging appropriate combination of acquired skills. This project is mainly supervised by <a href="https://scholar.google.com/citations?user=do0paQsAAAAJ&hl=en" target="_blank" rel="noopener">Yuntao Ma</a>, <a href="https://scholar.google.com/citations?user=nOl83tYAAAAJ&hl=en" target="_blank" rel="noopener">Takahiro Miki</a> and <a href="https://mayankm96.github.io/" target="_blank" rel="noopener">Mayank Mittal</a>.
              </details>
              <details>
                <summary>
                  <strong>Sep 01: I started my teaching assistant position for Linear & Combinatorial Optimization at ETH Zurich, Switzerland.</strong>
                </summary>
                After having achieved top grades at the course <a href="http://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=146748&semkez=2021W&ansicht=LEHRVERANSTALTUNGEN&lang=en" target="_blank" rel="noopener">Linear & Combinatorial Optimization (L&CO, 11 ECTS)</a> instructed by <a href="https://math.ethz.ch/ifor/groups/zenklusen_group/rico-zenklusen.html" target="_blank" rel="noopener">Prof. Rico Zenklusen</a> at <a href="https://ethz.ch/en.html" target="_blank" rel="noopener">ETH Zurich</a> last semester, I was honored to take a teaching assistant position for the new semester. Among my responsibilities, I enjoyed delivering lectures the most.
              </details>
              <details>
                <summary>
                  <strong>Jul 9: Wonderful week at ETH Robotics Summer School in Wangen an der Aare, Switzerland.</strong>
                </summary>
                From July 2 to 9, I was honored to participate in the <a href="https://robotics-summerschool.ethz.ch/" target="_blank" rel="noopener">ETH Robotics Summer School</a> directed by <a href="https://center-for-robotics.ethz.ch/education.html" target="_blank" rel="noopener">ETH RobotX initiative</a>. During this event, a broad scope of components of autonomous mobile robots including state estimation, trajectory optimization, environment mapping, path planning, and artifact detection were introduced and implemented on a wheeled platform, <a href="https://unlimited.ethz.ch/display/ROBOTX/SuperMegaBot" target="_blank" rel="noopener">SuperMegaBot</a>. On the last day, we successfully completed an autonomous rescue challenge at the test site.
              </details>
            </div>
            <!-- </blockquote> -->
          </details>
          <p></p>
          <details>
            <summary>
              <strong>2020</strong>
            </summary>
            <!-- <blockquote> -->
            <div style="margin-left:6px; padding-left:20px; border-left:1px solid;">
              <p></p>
              <details>
                <summary>
                  <strong>Sep 01: I started my master's program in Robotics, Systems and Control at ETH Zurich, Switzerland.</strong>
                </summary>
                After receiving offers from top-class universities including <a href="https://www.ucla.edu/" target="_blank" rel="noopener">University of California, Los Angeles (UCLA)</a>, <a href="https://www.jhu.edu/" target="_blank" rel="noopener">Johns Hopkins University (JHU)</a>, <a href="https://www.epfl.ch/en/" target="_blank" rel="noopener">École polytechnique fédérale de Lausanne (EPFL)</a>, <a href="https://www.imperial.ac.uk/" target="_blank" rel="noopener">Imperial College London</a>, etc, I decided to pursue my future endeavors in <a href="https://ethz.ch/en/studies/master/degree-programmes/engineering-sciences/robotics-systems-and-control.html" target="_blank" rel="noopener">Robotics, Systems and Control</a> under the guidance by <a href="https://mavt.ethz.ch/people/person-detail.hutter.html" target="_blank" rel="noopener">Prof. Marco Hutter</a> at <a href="https://ethz.ch/en.html" target="_blank" rel="noopener">ETH Zurich</a>, Switzerland.
              </details>
              <details>
                <summary>
                  <strong>Jun 15: I was awarded Excellent Graduate of Shanghai.</strong>
                </summary>
                Together with 11 other students from the School of Mechanical Engineering, it was my honor to be granted this highest honor for all undergraduates of all majors from more than ten universities in Shanghai this year.
              </details>
              <details>
                <summary>
                  <strong>Feb 01: My research project at Biorobotics Laboratory (BioRob) finished with successful hardware test.</strong>
                </summary>
                My work on <em>Analysis, Design and Implementation of a Bio-inspired Passive Tail for Amphibious Robots</em> concluded with a novel development of an appropriate chordwise stiffness distribution along a bio-inspired tail for <a href="https://www.epfl.ch/labs/biorob/research/amphibious/agnathax/" target="_blank" rel="noopener">AgnathaX</a> which maximizes the propulsion generated under a combined movement of both passive heaving and pitching.
              </details>
            </div>
            <!-- </blockquote> -->
          </details>
          <p></p>
          <details>
            <summary>
              <strong>2019</strong>
            </summary>
            <!-- <blockquote> -->
            <div style="margin-left:6px; padding-left:20px; border-left:1px solid;">
              <p></p>
              <details>
                <summary>
                  <strong>Sep 01: I started my research project at Biorobotics Laboratory (BioRob) at École polytechnique fédérale de Lausanne (EPFL), Switzerland.</strong>
                </summary>
                I am honored to work as a research assistant on the design of a bio-inspired passive tail for amphibious robots at <a href="https://www.epfl.ch/labs/biorob/" target="_blank" rel="noopener">Biorobotics Laboratory (BioRob)</a> directed by <a href="https://www.epfl.ch/labs/biorob/people/ijspeert/" target="_blank" rel="noopener">Prof. Auke Ijspeert</a> during the last year of my bachelor's study. This project is mainly supervised by <a href="https://www.epfl.ch/labs/biorob/people/paez/" target="_blank" rel="noopener">Laura Paez</a>.
              </details>
            </div>
            <!-- </blockquote> -->
          </details>
          <p></p>
          <details>
            <summary>
              <strong>2018</strong>
            </summary>
            <!-- <blockquote> -->
            <div style="margin-left:6px; padding-left:20px; border-left:1px solid;">
              <p></p>
              <details>
                <summary>
                  <strong>Nov 16: I was awarded my second National Scholarship for my study at Tongji University, Shanghai, China.</strong>
                </summary>
                The Ministry of Education of China funded the China National Scholarship to award outstanding full-time undergraduates for their excellent academic records. Being among top 1% of the students of the same year again, I am honored to receive this award a second time.
              </details>
              <details>
                <summary>
                  <strong>Oct 01: I finished my research internship at Advanced Multifunctional and Multiphysics Metamaterials Lab (AM3L) of the Department of Bioresource Engineering of McGill University, Montréal, Canada.</strong>
                </summary>
                From July to October, I was honored to be selected by <a href="https://www.mitacs.ca/en/programs/globalink/globalink-research-internship" target="_blank" rel="noopener">Mitacs Globalink Research Internship</a> program and work on <em>Design and 3D Printing of Lightweight Advanced Energy Harvesters Made of Smart Materials</em> under the supervision of <a href="https://www.mcgill.ca/bioeng/faculty-and-staff/academic-staff/abdolhamid-akbarzadeh-shafaroudi" target="_blank" rel="noopener">Prof. Abdolhamid Akbarzadeh</a>. The research was devoted into reinforcing mechanical properties of 3D printing materials by affiliating pulverized wood particles with melted polymer through a novel process of extrusion.
              </details>
              <details>
                <summary>
                  <strong>Apr 01: I was awarded Meritorious Winner in 2018 Mathematical Contest in Modeling.</strong>
                </summary>
                I am honored to receive my first international award in Mathematics.
              </details>
            </div>
            <!-- </blockquote> -->
          </details>
          <p></p>
          <details>
            <summary>
              <strong>2016</strong>
            </summary>
            <!-- <blockquote> -->
            <div style="margin-left:6px; padding-left:20px; border-left:1px solid;">
              <p></p>
              <details>
                <summary>
                  <strong>Nov 16: I was awarded my first National Scholarship for my study at Tongji University, Shanghai, China.</strong>
                </summary>
                The Ministry of Education of China funded the China National Scholarship to award outstanding full-time undergraduates for their excellent academic records. Being among top 1% of the students of the same year, I am honored to receive this award.
              </details>
            </div>
            <!-- </blockquote> -->
          </details>
        </div>
    design:
      columns: 2
  - block: collection
    id: publications
    content:
      title: Featured Publications
      count: 0
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: Recent Publications
      text: ""
      count: 0
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  - block: resume-experience
    id: experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      count: 0
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: platforms
    content:
      title: Robotic Platforms
      subtitle: I Learned and Grew up with
      count: 0
      filters:
        folders:
          - platform
    design:
      view: article-grid
      columns: 2
  - block: markdown
    id: contact
    content:
      title: Contact Me
    design:
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
  - block: cta-button-list
    content:
      buttons:
        - text: E-mail
          icon: at-symbol
          url: mailto:chenhli@ethz.ch
        - text: Message
          icon: brands/x
          url: https://x.com/breadli428
        - text: Connect
          icon: brands/linkedin
          url: https://www.linkedin.com/in/chenhao-li-86080b1b0/
    design:
      columns: 2
  # - block: cta-card
  #   demo: true # Only display this section in the Hugo Blox Builder demo site
  #   content:
  #     title: 👉 Build your own academic website like this
  #     text: |-
  #       This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

  #       <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

  #       Easily build anything with blocks - no-code required!
        
  #       From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
  #     button:
  #       text: Get Started
  #       url: https://hugoblox.com/templates/
  #   design:
  #     card:
  #       # Card background color (CSS class)
  #       css_class: "bg-primary-700"
  #       css_style: ""
---
