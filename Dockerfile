FROM python:3.12

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get update && apt-get install -y \
    vim \
    libffi-dev \
    libssl-dev \
    sqlite3 \
    libjpeg-dev \
    libopenjp2-7-dev \
    locales \
    cron \
    postgresql-client-15 \
    gettext \
    zip

WORKDIR /app

COPY /api .

RUN pip3 install -r requirements.txt

ENV WEB_CONCURRENCY=4

EXPOSE 8000
