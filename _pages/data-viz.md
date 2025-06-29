---
layout: archive
title: "Data Science Projects"
permalink: /data-science/
author_profile: true
redirect_from: 
  - /data-viz/
---


## Data Consulting for Michigan Non-Profits

I've consulted for MI non-profits on data analysis and data visualization projects through the [Community Technical Assistance Collaborative](https://ginsberg.umich.edu/ctac) at UM. Many of the GitHub repositories for these are private due to the sensitive nature of the data involved. Projects include:
* Data visualization and geospatial data analysis for [Brilliant Detroit](https://brilliantcities.org/detroit/) and the [Girl Scouts of Southeastern Michigan](https://www.gssem.org/), allowing orgs to more effectively allocate resources
* Interactive dashboard visualizations for [MI-CEMI](https://michigancollaborative.org/) to empower cross-functional collaboration 
* Data analysis for [OLHSA](https://www.olhsa.org/en-us/) to assess community needs
* Python & Bash visualization tutorials for CTAC


## BERT-based LLMs for PII Detection <span style="font-size:.8em;">\[[GitHub](https://github.com/kdv97/pii)\] \[[Slides](https://www.erdosinstitute.org/certificates/spring-2024/deep-learning-boot-camp/christopher-stith/)\]</span>

This is a team project done for the Erdos Institute's Deep Learning Bootcamp. The goal is to create a reliable automated method of detecting personally identifiable information (PII) in educational materials, such as student essay submissions. The data used was provided by the Learning Agency Lab through a [Kaggle competition](https://www.kaggle.com/competitions/pii-detection-removal-from-educational-data/overview).

Our team leveraged transfer-learning by fine-tuning the BERT-based LLMs [DeBERTa](https://huggingface.co/microsoft/deberta-v3-base) and [RoBERTa](https://huggingface.co/FacebookAI/roberta-base). We tokenized our raw data with each model's native tokenizer and trained them on the labeled, tokenized data. As the models only have a finite maximum token sequence length for training, choosing how to pre-process the data became essential so as not to miss PII.

The data consisted of of 6,807 student submissions (both full-text and tokenized). 




## Michigan Climate & Weather Data Viz <span style="font-size:.8em;">\[[GitHub](https://github.com/clstith/michigan-climate-data-public)\]\[[Link](https://clstith.github.io/michigan-climate)\]</span>

This is a personal project I did on visualizing and detecting climate change using monthly weather data from the National Oceanic and Atmospheric Administration ([NOAA](https://www.noaa.gov/)), from 1900 until today. I scraped and cleaned data from the [NOAA API](https://www.ncdc.noaa.gov/cdo-web/webservices/v2) using Python, then used various GIS Python packages (cartopy, geopy) as well as Tableau to get some nice visualizations. 

There are more than 1,000 NOAA stations in Michigan; to get county-level readings, I averaged data taken at all stations in a given county. Stations report their FIPS code (a three-digit code that uniquely identifies the county; see [here](https://www2.census.gov/programs-surveys/decennial/2010/partners/pdf/FIPS_StateCounty_Code.pdf)). 

Right now, the visualization displays county-level rainfall data. In the future, I plan to add other types of data.


## Neutrino Direction Detection <span style="font-size:.8em;">\[[GitHub](https://github.com/kdv97/ice-cube)\] \[[Slides](https://www.erdosinstitute.org/certificates/fall-2023/data-science-boot-camp/christopher-stith/)\]</span>

This is a team project done for the Erdos Institute's Data Science Bootcamp. The goal is to determine an effective, computationally efficient model for computing the direction of incoming neutrinos using data collected from the IceCube Neutrino Observatory provided through a [Kaggle competition](https://www.kaggle.com/competitions/icecube-neutrinos-in-deep-ice/).

Neutrinos are detected indirectly through [Cherenkov radiation](https://en.wikipedia.org/wiki/Cherenkov_radiation), an electromagnetic analog of a sonic boom produced by neutrinos traveling faster-than-light in ice. The detector's 5,160 optical sensors detect the photons emitted from Cherenkov radiation, and the job is to reconstruct the path of the neutrino. 

The data provided by Kaggle consisted of 660 parquet files, each consisting of around 200,000 individual neutrino events. 