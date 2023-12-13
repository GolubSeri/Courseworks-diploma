from django.contrib import admin
from .models import *


admin.site.register(CourseWork)
admin.site.register(Diploma)

class FeedbackAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False


admin.site.register(Feedback, FeedbackAdmin)
