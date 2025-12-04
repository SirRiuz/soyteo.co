FROM python:3.12

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    build-essential \
    libcurl4-openssl-dev \
    libffi-dev \
    libpq-dev \
    pango1.0-tools \
    python3-dev \
    wget \
  && rm -rf /var/lib/apt/lists/* \
  && apt-get purge --auto-remove \
  && apt-get clean

WORKDIR /app

COPY /api .

RUN pip3 install -r requirements.txt

ENV WEB_CONCURRENCY=4

EXPOSE 8000
