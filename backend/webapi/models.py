from django.db import models
import os
from datetime import datetime
from django.db import transaction


class ScientificWork(models.Model):
    class Meta:
        abstract = True

    topic = models.CharField(max_length=255, default="", blank=True, null=True, verbose_name='Тема работы')
    student = models.CharField(max_length=255, default="", blank=True, null=True, verbose_name='Автор работы')
    score = models.CharField(max_length=255, default="", blank=True, null=True, verbose_name='Оценка')
    date = models.DateField(blank=True, null=True, verbose_name='Дата защиты')
    teacher = models.CharField(max_length=255, default="", blank=True, null=True, verbose_name='Научный руководитель')
    desc = models.TextField(default="", blank=True, null=True, verbose_name='Краткое описание')
    shown = models.BooleanField(default=True, verbose_name='Показать в общей таблице?')

    def __str__(self):
        return self.topic


class Diploma(ScientificWork):
    class Meta:
        verbose_name = "Дипломная работа"
        verbose_name_plural = "Дипломные работы"

    pdf = models.FileField(upload_to="diplomas/%Y/", default='', blank=True, null=True, verbose_name='Работа в PDF')


class CourseWork(ScientificWork):
    class Meta:
        verbose_name = "Курсовая работа"
        verbose_name_plural = "Курсовые работы"

    pdf = models.FileField(upload_to="courseworks/%Y/", default='', blank=True, null=True, verbose_name='Работа в PDF')


class Feedback(ScientificWork):
    ACTION_CHOICES = (
        ("Nothing", "Не добавлять к работам"),
        ("Courseworks", "Курсовые работы"),
        ("Diplomas", "Дипломные работы"),
    )

    class Meta:
        verbose_name = "Работа на рассмотрении"
        verbose_name_plural = "Работы на рассмотрении"

    email = models.EmailField(verbose_name='email', default='', blank=True, null=True)
    pdf = models.FileField(upload_to="waitlist/%Y/", default='', blank=True, null=True, verbose_name='Работа в PDF')
    save_as = models.CharField(max_length=15, choices=ACTION_CHOICES, default="Nothing",
                               verbose_name="Куда добавить работу?")

    def __str__(self):
        return f"Работа на рассмотрении №{self.pk}"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        if self.save_as == "Courseworks":
            course_work = CourseWork(
                topic=self.topic,
                student=self.student,
                score=self.score,
                date=self.date,
                teacher=self.teacher,
                desc=self.desc,
                shown=self.shown,
                pdf=self.pdf,
            )
            course_work.save()
            self.delete()

        if self.save_as == "Diplomas":
            diploma = Diploma(
                topic=self.topic,
                student=self.student,
                score=self.score,
                date=self.date,
                teacher=self.teacher,
                desc=self.desc,
                shown=self.shown,
                pdf=self.pdf,
            )
            diploma.save()
            self.delete()


