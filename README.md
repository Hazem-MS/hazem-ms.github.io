# Hazem Sallouha's academic website

A lightweight, accessible academic website built with Hugo extended and custom layouts. Content is maintained in Markdown and YAML. There are no Node dependencies, external fonts, analytics, or third-party scripts.

Repository: https://github.com/Hazem-MS/hazem-ms.github.io

Website URL: https://hazem-ms.github.io/


## Content and consent

The design follows https://gking.harvard.edu/mysite/.
Created using GaryKing.org/mysite

The CV PDF is not distributed by the site. Home highlights the email address and groups Google Scholar with the other profile links.

## Preview locally

```sh
hugo server --bind 127.0.0.1 --port 1313 --baseURL http://localhost:1313/
```

Publication uses the manual **Publish approved site to GitHub Pages** workflow.

## Publication filters

The Research page filters selected publications by the topics in `data/research_topics.yaml`. Each entry in `data/papers.yaml` has a `tags` list containing one or more topic IDs: `ntn`, `localization-sensing`, and `distributed-sustainable`. Edit that list to change which filters include a paper. The initial classifications are inferred from paper titles and available arXiv abstracts; the localization and sensing topic also includes work focused on localization alone.

Filters show one topic at a time; **All** restores every selected publication. The Li-IoT descriptor is included as a publication under distributed processing and sustainable networking. Without JavaScript, all publications remain readable.

Publications are grouped by `type: "journal"` or `type: "conference"` in `data/papers.yaml`, with each group ordered by year. Topic filters apply to both groups. Project entries in `data/projects.yaml` use `name` for the acronym, `title` for the full project title, `programme` for the funding source and scheme, and optional `role` for your involvement. The title, funding, and role appear on separate lines.
