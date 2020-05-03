# UpDetector

Are you waiting for a URL to come online? Well, instead of just refereshing forever, this script can be installed in `cron` to text you when the URL comes up!

## Requirements
* AWS IAM account with SNS write policy
* `node`

## Setup
Install this into crontab with a line like this:

`*/5 * * * * /complete/path/to/node /complete/path/to/check_website.js >> /tmp/check_website.log`
