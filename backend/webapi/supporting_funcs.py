from .models import *
import random


import random
from datetime import datetime, timedelta

def random_date(start_date='1970-01-01', end_date='2024-12-31'):
    start_date = datetime.strptime(start_date, '%Y-%m-%d')
    end_date = datetime.strptime(end_date, '%Y-%m-%d')

    random_days = random.randint(0, (end_date - start_date).days)
    random_date = start_date + timedelta(days=random_days)

    return random_date.strftime('%Y-%m-%d')


def create_test_objects():
    """
    Создает объекты блоков текста в бд, если их нет (после миграций)
    """

    models_to_check = [CourseWork, Diploma]

    for model in models_to_check:
        if len(model.objects.all()) == 0:
            for i in range(50):
                context = {
                    'topic': f"Teма работы №{i+1}",
                    'student': f'{random.choice(["Иванов", "Петров", "Сидоров", "Аврамов", "Сколкин", "Етарян", "Пронин"])} А.А',
                    'score': random.choice(["Хорошо", "Отлично", "Удовлeтворительно", "Неудовлeтворительно"]),
                    'date': random_date(),
                    'teacher': f'{random.choice([ "Эйнштейн", "Ньютон", "Кюри", "Галилей", "Хокинг", "Фейнман", "Максвелл", "Планк", "Шрёдингер", "Гейзенберг", "Бор", "Герц", "Тесла", "Фарадей", "Кеплер", "Коперник", "Тайсон", "Хаббл"])}',
                    'shown': True,
                }
                model.objects.create(**context)




