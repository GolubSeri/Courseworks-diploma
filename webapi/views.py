from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *
from datetime import datetime
from rest_framework.parsers import MultiPartParser


class CourseWorkView(APIView):
    def get(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if pk:
            object = get_object_or_404(CourseWork, pk=pk)

            serialized = CourseWorkSerializer(object, context={'request': request})
        else:
            objects = CourseWork.objects.filter(shown=True).order_by('-added')
            serialized = CourseWorksSerializer(objects, many=True)
        return Response(serialized.data, status=200)


class DiplomaWorkView(APIView):
    def get(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if pk:
            object = get_object_or_404(Diploma, pk=pk)
            serialized = DiplomaSerializer(object, context={'request': request})
        else:
            objects = Diploma.objects.filter(shown=True).order_by('-added')
            serialized = DiplomasSerializer(objects, many=True, context={'request': request})

        return Response(serialized.data, status=200)


class FeedbackView(APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request, *args, **kwargs):
        file_uploaded = request.data.get('file')
        context = {'email': request.POST.get("email"), 'student': request.POST.get("fio"),
                   'topic': request.POST.get("topic"), 'score': request.POST.get("score"),
                   'teacher': request.POST.get("teacher")}
        date = datetime.strptime(request.POST.get('date'), "%d.%m.%Y")
        context['date'] = date.strftime("%Y-%m-%d")
        context['pdf'] = file_uploaded

        work = Feedback.objects.create(**context)
        work.save()
        return Response({}, status=201)
