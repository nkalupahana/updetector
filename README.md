# UpDetector

Are you waiting for a URL to come online? Well, instead of just refereshing forever, this script can be installed in `cron` to text you when the URL comes up!

## Requirements
* AWS IAM account with SNS write policy
* `node` (tested on > v8), `npm`, `cron`
* `curl`

## Setup
* `npm install` to get necessary packages
* Create `.env` file with all the necessary data (based on `sample.env` file)
* Install the script into crontab with a line like this (checks every 5 minutes):

`*/5 * * * * /complete/path/to/node /complete/path/to/check_website.js >> /tmp/check_website.log`
