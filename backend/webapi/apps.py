from django.apps import AppConfig
from django.db.models.signals import post_migrate


def my_callback(sender, **kwargs):
    from .supporting_funcs import create_test_objects
    create_test_objects()
    pass

class WebapiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'webapi'
    verbose_name = 'Научные работы'

    def ready(self):
        post_migrate.connect(my_callback, sender=self)

