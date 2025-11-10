# Python
from http import HTTPStatus


# Libs
from fastapi.testclient import TestClient
from main import app


client = TestClient(app)


class TestHealthcheckRoute:

    def test_healthcheck_route_status_code(self):
        response = client.get("/healthcheck")
        assert response.status_code == HTTPStatus.OK
        assert response.json() == {"status": "ok"}
