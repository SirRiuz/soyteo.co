frontend-deps:
	cd ./frontend && npm install --legacy-peer-deps

run:
	docker compose up

up:
	docker compose up

build:
	docker compose build

