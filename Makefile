frontend-deps:
	cd ./frontend && npm install --legacy-peer-deps

build-frontend:
	cd ./frontend && npm run build

run:
	docker compose up

up:
	docker compose up

build:
	docker compose build
