import os
from dotenv import load_dotenv, find_dotenv
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = 'Create a superuser if not exists'


    def handle(self, *args, **options):
        load_dotenv(find_dotenv())
        if not User.objects.filter(username=os.getenv('DJANGO_SUPERUSER_USERNAME')).exists():
            User.objects.create_superuser(os.getenv('DJANGO_SUPERUSER_USERNAME'), os.getenv('DJANGO_SUPERUSER_EMAIL'),
                                          os.getenv('DJANGO_SUPERUSER_PASSWORD'))
            self.stdout.write(self.style.SUCCESS('Superuser created successfully'))
        else:
            self.stdout.write(self.style.SUCCESS('Superuser already exists'))
