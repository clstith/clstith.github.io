---
layout: archive
title: "Data Science Projects"
permalink: /data-science/
author_profile: true
redirect_from: 
  - /data-viz/
---


### $\mu$ n' I: Neutrino Direction Detection <span style="font-size:.8em;">\[[GitHub](https://github.com/kdv97/ice-cube)\] \[[Slides](https://www.erdosinstitute.org/certificates/fall-2023/data-science-boot-camp/christopher-stith/)\]</span>

This is a team project done for the Erdos Institute's Data Science Bootcamp. The goal is to determine an effective 


### Michigan Climate & Weather Data Viz <span style="font-size:.8em;">\[[Link](https://clstith.github.io/michigan-climate)\]</span>

This is a personal project I did on visualizing and detecting climate change using monthly weather data from the National Oceanic and Atmospheric Administration ([NOAA](https://www.noaa.gov/)), from 1900 until today. I scraped and cleaned data from the [NOAA API](https://www.ncdc.noaa.gov/cdo-web/webservices/v2) using Python, then used various GIS Python packages (cartopy, geopy) as well as Tableau to get some nice visualizations. 

There are more than 1,000 NOAA stations in Michigan; to get county-level readings, I averaged data taken at all stations in a given county. Stations report their FIPS code (a three-digit code that uniquely identifies the county; see [here](https://www2.census.gov/programs-surveys/decennial/2010/partners/pdf/FIPS_StateCounty_Code.pdf)). 

Right now, the visualization displays county-level rainfall data. In the future, I plan to add other types of data.