FROM python:3.11

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip3 install -r requirements.txt --no-cache-dir

COPY . /app
WORKDIR /app

COPY ./start.sh .
RUN chmod +x start.sh

ENV TZ Europe/Moscow
ENV PYTHONUNBUFFERED=1
