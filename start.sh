#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

python manage.py collectstatic --noinput
python manage.py migrate --noinput
python manage.py superuserinit
python manage.py runserver 0.0.0.0:8000
#gunicorn Courseworks.wsgi -b 0.0.0.0:8000 --chdir=/app --timeout 90
