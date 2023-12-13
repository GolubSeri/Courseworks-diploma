#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

python manage.py collectstatic --noinput
python manage.py migrate --noinput
python manage.py superuserinit

gunicorn Courseworks.wsgi -b 0.0.0.0:8000
