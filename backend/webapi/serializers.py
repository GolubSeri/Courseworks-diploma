from rest_framework import serializers
from .models import *

class FileUrlField(serializers.FileField):
    def to_representation(self, value):
        request = self.context.get('request', None)
        if value and request:
            return request.build_absolute_uri(value.url)
        return super().to_representation(value)

class WorkSerializer(serializers.ModelSerializer):
    pdf = FileUrlField()
    date = serializers.DateField(format="%d.%m.%Y")

    class Meta:
        model = ScientificWork
        fields = '__all__'

class WorksSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScientificWork
        fields = ("id", "topic", "score", "student", "teacher", "date")

    date = serializers.DateField(format="%d.%m.%Y")

class CourseWorkSerializer(WorkSerializer):
    class Meta:
        fields = '__all__'
        model = CourseWork

class DiplomaSerializer(WorkSerializer):
    class Meta:
        fields = '__all__'
        model = Diploma

class CourseWorksSerializer(WorksSerializer):
    class Meta:
        fields = ("id", "topic", "score", "student", "teacher", "date")
        model = CourseWork

class DiplomasSerializer(WorksSerializer):
    class Meta:
        fields = ("id", "topic", "score", "student", "teacher", "date")
        model = Diploma