#!/bin/bash

# set -e ## error
set -x ## verbose

# yarn run build-minify

git add .
git commit -m 'autocommit'
git push

ssh do2 "cd /mnt/volume_sfo2_01/projects/docker/volumes/drupal/kyle_bizplus_drupal_production_data/sites/datamart.city.ad/themes/custom/business_plus ; git pull && echo $HOSTNAME ok"


set +e
set +x
echo ok