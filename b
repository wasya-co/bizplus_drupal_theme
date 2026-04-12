#!/bin/bash

# set -e ## error
set -x ## verbose

# yarn run build-minify

git add .
git commit -m 'autocommit'
git push

ssh do2 "cd /mnt/volume_sfo2_01/projects/docker/volumes/drupal/kyle_bizplus_drupal_production_data/sites/datamart.city.ad/themes/custom/business_plus ; git pull && echo 'pulled theme into datamart...' "
ssh do2 "cd /mnt/volume_sfo2_01/projects/docker/volumes/drupal/kyle_bizplus_drupal_production_data/themes/custom/business_plus ; git pull && echo 'pulled theme into kyle...' && echo $HOSTNAME ok"

set +x
set +e
echo ok